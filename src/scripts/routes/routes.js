import showCard from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import showNews from '../views/pages/news';
import AdminPage from '../views/pages/admin/admin';
import CreateArticle from '../views/pages/admin/create';
import LoginAdmin from '../views/pages/admin/login';
import RegisterAdmin from '../views/pages/admin/register';
import EditArticle from '../views/pages/admin/edit_article';

const routes = {
  '/': showCard, // default page
  '/favorite': Favorite,
  '/news': showNews,
  '/article/:id': Detail,
  '/login': LoginAdmin,
  '/register': RegisterAdmin,
  '/create_article': CreateArticle,
  '/edit_article/:id': EditArticle,
  '/admin': AdminPage,
};

export default routes;
