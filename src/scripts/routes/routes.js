import showCard from '../views/pages/card';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': showCard, // default page
  '/favorite': Favorite,
  '/article/:id': Detail,
};

export default routes;
