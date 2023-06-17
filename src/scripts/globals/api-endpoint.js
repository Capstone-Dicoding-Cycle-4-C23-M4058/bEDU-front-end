import CONFIG from './config';

const API_ENDPOINT = {
  SHOW_CARD: `${CONFIG.BASE_URL}article`,
  DETAIL: (id) => `${CONFIG.BASE_URL}article/${id}`,
  SHOW_NEWS: `${CONFIG.BASE_URL_SINDO}edukasi`,
};

export default API_ENDPOINT;
