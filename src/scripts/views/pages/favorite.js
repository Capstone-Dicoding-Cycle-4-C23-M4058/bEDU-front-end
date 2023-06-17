import FavoriteBookIdb from '../../data/favorite-idb';
import { createTemplateArtichel } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <section class="home" id="home">
        <div class="home-text container">
            <h2 class="home-title">Bedah Edukasi Blog</h2>
            <span class="home-subtitle">Jadikan Pedindikan Generasi Baru Semaikn Baik</span>
        </div>
    </section>
    <p class="artikel-space">Artikel Bookmark</p>
    <!-- Posts -->
    <section class="post container">
       
    </section>
    <div id="empty-content"></div>
  `;
  },

  async afterRender() {
    const List = await FavoriteBookIdb.getAllBook();
    const Container = document.querySelector('.post');
    const empty = document.getElementById('empty-content');

    if (List.length < 1) {
      empty.innerHTML += `
      <div id"message">
        <h2 tabindex="0" class="resto-item-not-found">Belum ada artikel</h2>
        <p>coba anda tandai dulu artikel yang telah di baca</p>
      </div>
      `;

      Container.innerHTML = '';
    } else if (List.length >= 1) {
      const articleContainer = document.querySelector('.post');
      List.forEach(data => {
        articleContainer.innerHTML
        += createTemplateArtichel(data);
      });
      empty.innerHTML = '';
    }
  },
};

export default Favorite;
