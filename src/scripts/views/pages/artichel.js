import ArtichelDbSource from '../../data/articheldb-source';
import { createTemplateArtichel } from '../templates/template-creator';

const Artichel = {
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
    <section class="select-tab render">
    <a class="tab-btn" href="/#/news"><i class='bx bxs-news' ></i><p>Berita</p></a>
    <a class="tab-btn" href="/#/articles"><i class='bx bxs-book-reader' ></i><p>Artikel</p></a>
      </section>
        <p class="artikel-space">Artikel Pilihan Kami - Bedah Edukasi</p>
    <!-- Posts -->
    <section class="post container">
       
    </section>
      `;
  },

  async afterRender() {
    const artichels = await ArtichelDbSource.showCardArtichel();
    const artichelsContainer = document.querySelector('.post');
    console.log(artichels);
    artichels.forEach(data => {
      artichelsContainer.innerHTML += createTemplateArtichel(data);
    });
  },
};

export default Artichel;
