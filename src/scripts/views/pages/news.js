import NewslDbSource from '../../data/newsIdb-source';
import { createSindoArtichel } from '../templates/template-creator';

const showNews = {
  async render() {
    return `
    <!-- Home -->
    <section class="home" id="home">
        <div class="home-text container">
            <h2 class="home-title">Daily News</h2>
            <span class="home-subtitle">
            Berita Edukasi terkini dan terlengkap hari ini, menyajikan info berita Edukasi terupdate seputar Kampus, Sekolah dan Beasiswa
            </span>
        </div>
    </section>
        <p class="artikel-space">Berita Edukasi Terkini dan Terbaru Hari ini - SINDOnews</p>
    <!-- Posts -->
    <section class="post container">
       
    </section>
      `;
  },

  async afterRender() {
    const artichels = await NewslDbSource.showCardNews();
    const Container = document.querySelector('.post');
    console.log(artichels);
    artichels.forEach((data) => {
      Container.innerHTML += createSindoArtichel(data);
    });
  },
};

export default showNews;
