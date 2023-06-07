import UrlParser from '../../routes/url-parser';
import ArtichelDbSource from '../../data/articheldb-source';
import { createDetailArtichel } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <div class="post-detail"></div>
        `;
  },

  async afterRender() {
    const output = document.getElementsByClassName('post-detail');
    output.innerHTML = 'Loading...';

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const artichels = await ArtichelDbSource.detailArtichel(url.id);
    console.log(artichels);

    const Container = document.querySelector('.post-detail');
    Container.innerHTML = createDetailArtichel(artichels);
  },
};

export default Detail;
