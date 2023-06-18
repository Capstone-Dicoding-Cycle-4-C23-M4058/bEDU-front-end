/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import UrlParser from '../../routes/url-parser';
import ArtichelDbSource from '../../data/articheldb-source';
import { createDetailArtichel, createTemplateArtichel } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
          <div class="post-detail"></div>
          <p class="artikel-space">Baca Artikel Lainnya</p>
          <section class="post container"></section>
          <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const bEDUCookie = getCookieValue('bEDUCookie');
    const output = document.getElementsByClassName('post-detail');
    output.innerHTML = 'Loading...';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const artichels = await ArtichelDbSource.detailArtichel(url.id);

    const Container = document.querySelector('.post-detail');
    Container.innerHTML = createDetailArtichel(artichels);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      data: {
        article_id: artichels.article_id,
        title: artichels.title,
        abstract: artichels.abstract,
        thumbnail: artichels.thumbnail,
        label: artichels.label,
        created_at: artichels.created_at,
      },
    });

    const recomend = await ArtichelDbSource.showCardArtichel().then(data => data.slice(0, 3));
    const artichelsContainer = document.querySelector('.post');

    // Fungsi untuk mengacak urutan elemen dalam array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const randomizedRecomend = shuffleArray(recomend);

    randomizedRecomend.forEach(data => {
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

export default Detail;
