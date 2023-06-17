/* eslint-disable camelcase */
import FavoriteBookIdb from '../data/favorite-idb';
import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._data = data;

    await this._renderButton();
  },

  async _renderButton() {
    const { article_id } = this._data;

    if (await this._isDataExist(article_id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isDataExist(article_id) {
    const data = await FavoriteBookIdb.getBook(article_id);
    return !!data;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteBookIdb.putBook(this._data);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteBookIdb.deleteBook(this._data.article_id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
