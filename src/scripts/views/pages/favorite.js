import FavoriteBookIdb from '../../data/favorite-idb';
import { createTemplateArtichel } from '../templates/template-creator';
import ArtichelDbSource from '../../data/articheldb-source';

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
    const bEDUCookie = getCookieValue('bEDUCookie');
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

export default Favorite;
