import CONFIG from './config';

const API_ENDPOINT = {
  SHOW_CARD: `${CONFIG.BASE_URL}article`,
  DETAIL: id => `${CONFIG.BASE_URL}article/${id}`,
  SHOW_NEWS: `${CONFIG.BASE_URL_SINDO}edukasi`,
  ADMIN_ARTICLES: `${CONFIG.BASE_URL}article`,
  LOGIN_ADMIN: `${CONFIG.BASE_URL}admin/login`,
  LOGOUT_ADMIN: `${CONFIG.BASE_URL}admin/logout`,
  LOGOUT_USER: `${CONFIG.BASE_URL}user/logout`,
  REGISTER_ADMIN: `${CONFIG.BASE_URL}admin/register`,
  LOGIN_USER: `${CONFIG.BASE_URL}login`,
  REGISTER_USER: `${CONFIG.BASE_URL}register`,
  CREATE_ARTICLE: `${CONFIG.BASE_URL}admin/article`,
  DELETE_ARTICLE: id => `${CONFIG.BASE_URL}admin/article/${id}`,
  EDIT_ARTICLE: id => `${CONFIG.BASE_URL}admin/article/${id}`,
};

export default API_ENDPOINT;
