import showCard from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import showNews from '../views/pages/news';
import AdminPage from '../views/pages/admin';
import CreateArticle from '../views/pages/create';
import LoginAdmin from '../views/pages/login';

const routes = {
  '/': showCard, // default page
  '/favorite': Favorite,
  '/news': showNews,
  '/article/:id': Detail,
  '/login': LoginAdmin,
  '/admin/create_article': CreateArticle,
  '/admin': AdminPage,
};

export default routes;
