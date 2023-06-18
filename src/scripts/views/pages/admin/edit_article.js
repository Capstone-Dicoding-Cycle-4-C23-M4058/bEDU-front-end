import Swal from 'sweetalert2';
import UrlParser from '../../../routes/url-parser';
import ArtichelDbSource from '../../../data/articheldb-source';
import { updateArticle } from '../../templates/template-creator';

const EditArticle = {
  async render() {
    const nav = document.getElementById('bar-nav');
    nav.classList.add('admin-nav');
    return `
          <div class="post-detail"></div>
        `;
  },

  async afterRender() {
    const bEDUCookie = getCookieValue('bEDUCookie');
    if (!bEDUCookie) {
      // Jika cookie "bEDUCookie" tidak ditemukan, redirect ke halaman login
      window.location.href = '/#/login';
      return;
    }

    const parsedToken = parseJwtPayload(bEDUCookie);
    if (!parsedToken || parsedToken.role !== 'Admin') {
      // Jika token tidak valid atau role bukan admin, redirect ke halaman login
      window.location.href = '/#/login';
      return;
    }

    const output = document.getElementsByClassName('post-detail');
    output.innerHTML = 'Loading...';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const artichels = await ArtichelDbSource.detailArtichel(url.id);
    console.log(artichels);

    const Container = document.querySelector('.post-detail');
    Container.innerHTML = updateArticle(artichels);

    const articleId = url.id;

    const updateArticleButton = document.getElementById('UpdateArticle');
    updateArticleButton.addEventListener('click', async () => {
        const titleInput = document.getElementById('title').value;
        const abstractInput = document.getElementById('abstract').value;
        const descriptionInput = document.getElementById('description').value;
        const labelInput = document.getElementById('label').value;
        const thumbnailInput = document.getElementById('thumbnail').files[0];
        const imageInput = document.getElementById('image').files[0];
        const formattedValue = formatTextWithLineBreaks(descriptionInput);
        const formattedValue1 = formatTextWithLineBreaks(abstractInput);

        const formData = new FormData();
        formData.append('title', titleInput);
        formData.append('abstract', formattedValue1);
        formData.append('description', formattedValue);
        formData.append('label', labelInput);
        formData.append('thumbnail', thumbnailInput);
        formData.append('image', imageInput);

      try {
        if (bEDUCookie) {
          // Kirim data artikel ke backend menggunakan ArtichelDbSource
          const response = await ArtichelDbSource.updateArticle(
            formData,
            articleId,
            bEDUCookie);

            console.log(response);

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edit Article Success!',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              const metaTag = document.createElement('meta');
              metaTag.setAttribute('http-equiv', 'refresh');
              metaTag.setAttribute('content', '1;url=/#/admin');
              document.head.appendChild(metaTag);
            });
          // Tampilkan pesan sukses atau alihkan pengguna ke halaman lain
          // sesuai dengan kebutuhan aplikasi Anda
        } else {
          console.error('Cookie "bEDUCookie" not found');
        }
      } catch (error) {
        // Tangani kesalahan jika ada
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        });
      }
    });

    function getCookieValue(cookieName) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${cookieName}=`)) {
          return cookie.substring(cookieName.length + 1);
        }
      }
      return null;
    }
    function parseJwtPayload(token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = atob(base64);
        return JSON.parse(jsonPayload);
      } catch (error) {
        return null;
      }
    }

    function formatTextWithLineBreaks(text) {
      return text.replace(/\n/g, '<br>');
    }
  },
};

export default EditArticle;
