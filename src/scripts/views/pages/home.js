import ArtichelDbSource from '../../data/articheldb-source';
import { createTemplateArtichel } from '../templates/template-creator';

const showCard = {
  async render() {
    return `
    <!-- Home -->
    <section class="home" id="home">
        <div class="home-text container">
            <h2 class="home-title">Bedah Edukasi Blog</h2>
            <span class="home-subtitle">Jadikan Pedindikan Generasi Baru Semakin Baik</span>
        </div>
    </section>
    <!-- About -->
    <section class="about" id="about">
    <article class="about-articel" id="tokoh">
        <figure class="about-figure">
          <img src="/img/tan-malaka.png" alt="Bedu Fact Sheet">
          <figcaption>Tan Malaka.</figcaption>
        </figure>
        <div class="about-content">
          <h1 class="about-title">Tan Malaka</h1>
          <p class="about-description">“Bila kaum muda yang telah belajar di sekolah dan menganggap dirinya terlalu tinggi dan pintar untuk melebur dengan masyarakat yang bekerja dengan cangkul dan hanya memiliki cita-cita yang sederhana, maka lebih baik pendidikan itu tidak diberikan sama sekali.”</p>
        </div>
      </article>
      
    </section>
    <section class="about" id="about">
    <article class="about-articel" id="tokoh">
          <div class="about-content">
              <h1 class="about-title" style="color:var(--container-color); ">Ki Hadjar Dewantara.</h1>
              <p class="about-description">“Apapun yang dilakukan oleh seseorang itu, hendaknya dapat bermanfaat bagi dirinya sendiri, bermanfaat bagi bangsanya, dan bermanfaat bagi manusia di dunia pada umumnya.”</p>
            </div>
            <figure class="about-figure">
              <img src="/img/Ki-Hajar-Dewantara.png" alt="Bedu Fact Sheet">
              <figcaption>Ki Hadjar Dewantara.</figcaption>
            </figure>
          </article>
    </section>
    <section class="select-tab" id="select-tab">
          <a class="tab-btn" href="/#/news"><i class='bx bxs-news' ></i><p>Berita</p></a>
          <a class="tab-btn" href="/#/articles"><i class='bx bxs-book-reader' ></i><p>Artikel</p></a>
      </section>
        <p class="artikel-space">Artikel Pilihan</p>
    <!-- Posts -->
    <section class="post container">
       
    </section>
      `;
  },

  async afterRender() {
    const artichels = await ArtichelDbSource.showCardArtichel().then((data) => data.slice(0, 6));
    const artichelsContainer = document.querySelector('.post');
    artichels.forEach((data) => {
      artichelsContainer.innerHTML += createTemplateArtichel(data);
    });
  },
};

export default showCard;
