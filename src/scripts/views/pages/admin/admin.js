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
          const bEDUCookie = getCookieValue('bEDUCookie');

          if (bEDUCookie) {
            const response = await ArtichelDbSource.deleteArticle(articleId, bEDUCookie);
            console.log(response);
          } else {
            console.error('Cookie "bEDUCookie" not found');
          }
        } catch (error) {
          console.error(error);
        }

        console.log(`Delete article with id: ${articleId}`);
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
    });
  },
};

export default AdminPage;
