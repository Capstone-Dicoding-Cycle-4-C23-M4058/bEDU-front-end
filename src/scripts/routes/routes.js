import showCard from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import showNews from '../views/pages/news';
import About from '../views/pages/about';
import Artichel from '../views/pages/artichel';

const routes = {
  '/': showCard, // default page
  '/bedu': showCard,
  '/about': About,
  '/favorite': Favorite,
  '/news': showNews,
  '/articles': Artichel,
  '/article/:id': Detail,
};

export default routes;
