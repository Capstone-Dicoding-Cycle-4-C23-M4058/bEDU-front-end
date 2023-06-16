import ArtichelDbSource from '../../data/articheldb-source';
import { createTemplateArtichel } from '../templates/template-creator';

const showCard = {
  async render() {
    return `
    <!-- Home -->
    <section class="home" id="home">
        <div class="home-text container">
            <h2 class="home-title">Bedah Edukasi Blog</h2>
            <span class="home-subtitle">Jadikan Pedindikan Generasi Baru Semaikn Baik</span>
        </div>
    </section>
    <!-- About -->
    <section class="about" id="about">
        <article class="about-articel">
            <figure class="about-figure">
              <img src="./about img/Icon Bedu .png" alt="Bedu Fact Sheet">
              <figcaption>Logo Bedah Edukasi Juni 2023.</figcaption>
            </figure>
            <div class="about-content">
              <h1 class="about-title">Selamat Datang Di Bedah Edukasi!</h1>
              <p class="about-description">Kami adalah sumber terpercaya untuk informasi dan saran
                terkait pendidikan. Tujuan kami adalah memberikan pemahaman
                yang mendalam tentang berbagai topik Edukasi serta membantu
                anda dalam memperoleh pengetahuan dan keterampilan baru.</p>
            </div>
          </article>
    </section>
        <p class="artikel-space">Artikel Pilihan</p>
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

export default showCard;
