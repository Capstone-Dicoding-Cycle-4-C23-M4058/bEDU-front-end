import ArtichelDbSource from '../../../data/articheldb-source';
import { createTemplateAdminArticle } from '../../templates/template-creator';

const AdminPage = {
  async render() {
    return `
    <section class="home" id="home">
        <div class="home-text container">
            <h2 class="home-title">Bedah Edukasi Blog</h2>
            <span class="home-subtitle">Jadikan Pedindikan Generasi Baru Semaikn Baik</span>
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
  },
};

export default AdminPage;
