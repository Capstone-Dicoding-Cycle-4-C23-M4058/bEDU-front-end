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
    const bEDUCookie = getCookieValue('bEDUCookie');
    const artichels = await ArtichelDbSource.showCardArtichel().then(data => data.slice(0, 6));
    const artichelsContainer = document.querySelector('.post');
    artichels.forEach(data => {
      artichelsContainer.innerHTML += createTemplateArtichel(data);
    });

  const logoutUser = document.querySelectorAll('#nav-btn4');
  logoutUser.forEach(button => {
  button.addEventListener('click', async () => {
    try {
      // Cek isi innerHTML dari #nav-btn4
      if (button.innerHTML === 'Logout') {
        // Lakukan tindakan logout
        const response = await ArtichelDbSource.logoutUser(bEDUCookie);
        console.log(response);

        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'refresh');
        metaTag.setAttribute('content', '1;/');
        document.head.appendChild(metaTag);
        // Tambahkan kode logout di sini
      } else if (button.innerHTML === 'Login') {
        // Redirect ke halaman login
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'refresh');
        metaTag.setAttribute('content', '1;/#/login_user');
        document.head.appendChild(metaTag);
      }
    } catch (error) {
      console.error(error);
    }
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

export default showCard;
