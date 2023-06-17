/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'article_id' });
  },
});

const FavoriteBookIdb = {
  async getBook(article_id) {
    if (!article_id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, article_id);
  },

  async getAllBook() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putBook(data) {
    if (!data.hasOwnProperty('article_id')) {
      return;
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, data);
  },
  async deleteBook(article_id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, article_id);
  },
};

export default FavoriteBookIdb;
