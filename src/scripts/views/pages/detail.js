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
  },
};

export default Detail;
