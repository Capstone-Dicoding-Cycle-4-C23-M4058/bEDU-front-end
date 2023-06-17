import UrlParser from '../../../routes/url-parser';
import ArtichelDbSource from '../../../data/articheldb-source';
import { updateArticle } from '../../templates/template-creator';

const EditArticle = {
  async render() {
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

        const formData = new FormData();
        formData.append('title', titleInput);
        formData.append('abstract', abstractInput);
        formData.append('description', descriptionInput);
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

          // Tampilkan pesan sukses atau alihkan pengguna ke halaman lain
          // sesuai dengan kebutuhan aplikasi Anda
        } else {
          console.error('Cookie "bEDUCookie" not found');
        }
      } catch (error) {
        // Tangani kesalahan jika ada
        console.error(error);
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
  },
};

export default EditArticle;
