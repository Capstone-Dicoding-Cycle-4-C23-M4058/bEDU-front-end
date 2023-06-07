import CONFIG from './config';

const API_ENDPOINT = {
  SHOW_CARD: `${CONFIG.BASE_URL}article`,
  DETAIL: (id) => `${CONFIG.BASE_URL}article/${id}`,
};

export default API_ENDPOINT;
