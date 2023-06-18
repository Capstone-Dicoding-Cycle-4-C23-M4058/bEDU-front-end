/* eslint-disable arrow-parens */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import Swal from 'sweetalert2';
import ArtichelDbSource from '../../../data/articheldb-source';
import { createTemplateAdminArticle } from '../../templates/template-creator';

const AdminPage = {
  async render() {
    return `
      <section class="home" id="home">
          <div class="home-text container">
              <h2 class="home-title">Bedah Edukasi Blog</h2>
              <span class="home-subtitle">Jadikan Pendidikan Generasi Baru Semakin Baik</span>
          </div>
      </section>
      <div class="post container admin-articles"></div>
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

    const artichels = await ArtichelDbSource.showCardArtichel();
    const artichelsContainer = document.querySelector('.admin-articles');
    console.log(artichels);
    artichels.forEach(data => {
      artichelsContainer.innerHTML += createTemplateAdminArticle(data);
    });

    // Tambahkan event listener untuk tombol "Edit Article" dan "Delete Article"
    const editArticleButtons = document.querySelectorAll('#editArticle');
    editArticleButtons.forEach(button => {
      button.addEventListener('click', () => {
        const articleId = button.getAttribute('data-id');
        window.location.href = `/#/edit_article/${articleId}`;
      });
    });

    const deleteArticleButtons = document.querySelectorAll('#deleteArticle');
    deleteArticleButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const articleId = button.getAttribute('data-id');

        try {
          if (bEDUCookie) {
            Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
              if (result.isConfirmed) {
                const response = await ArtichelDbSource.deleteArticle(articleId, bEDUCookie);
                console.log(response);
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Delete Article Success!',
                  showConfirmButton: false,
                  timer: 1500,
                }).then(() => {
                  const metaTag = document.createElement('meta');
                metaTag.setAttribute('http-equiv', 'refresh');
                metaTag.setAttribute('content', '1;/#/admin');
                document.head.appendChild(metaTag);
                });
              }
            });
          } else {
            console.error('Cookie "bEDUCookie" not found');
          }
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.message}`,
          });
        }

        console.log(`Delete article with id: ${articleId}`);
      });
    });

    const createArticle = document.querySelectorAll('nav-btn5');
    createArticle.forEach(create => {
      create.addEventListener('click', () => {
        window.location.href = '/#/create_article';
      });
    });

    const logoutAdmin = document.querySelectorAll('#nav-btn4');
    logoutAdmin.forEach(button => {
      button.addEventListener('click', async () => {
        console.log(bEDUCookie);
      try {
        if (bEDUCookie) {
          const response = await ArtichelDbSource.logoutAdmin(bEDUCookie);
          console.log(response);

          const metaTag = document.createElement('meta');
          metaTag.setAttribute('http-equiv', 'refresh');
          metaTag.setAttribute('content', '1;/');
          document.head.appendChild(metaTag);
        } else {
          console.error('Cookie "bEDUCookie" not found');
        }
      } catch (error) {
        console.error(error);
      }
      console.log('Logout Sukses');
  });
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

export default AdminPage;
