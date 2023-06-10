import showCard from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import showNews from '../views/pages/news';

const routes = {
  '/': showCard, // default page
  '/favorite': Favorite,
  '/news': showNews,
  '/article/:id': Detail,
};

export default routes;
