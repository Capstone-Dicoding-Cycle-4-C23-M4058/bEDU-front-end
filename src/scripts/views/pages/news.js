import NewslDbSource from '../../data/newsIdb-source';
import { createSindoArtichel } from '../templates/template-creator';
import ArtichelDbSource from '../../data/articheldb-source';

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
    <section class="select-tab">
    <a class="tab-btn" href="/#/news"><i class='bx bxs-news' ></i><p>Berita</p></a>
    <a class="tab-btn" href="/#/articles"><i class='bx bxs-book-reader' ></i><p>Artikel</p></a>
      </section>
        <p class="artikel-space">Berita Edukasi Terkini dan Terbaru Hari ini - SINDOnews</p>
    <!-- Posts -->
    <section class="post container">
       
    </section>
      `;
  },

  async afterRender() {
    const bEDUCookie = getCookieValue('bEDUCookie');
    const nav = document.getElementById('bar-nav');
    nav.style.display = 'flex';
    const artichels = await NewslDbSource.showCardNews();
    const Container = document.querySelector('.post');
    console.log(artichels);
    artichels.forEach(data => {
      Container.innerHTML += createSindoArtichel(data);
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

export default showNews;
