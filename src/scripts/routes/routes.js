import showCard from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import showNews from '../views/pages/news';
import About from '../views/pages/about';
import Artichel from '../views/pages/artichel';
import AdminPage from '../views/pages/admin/admin';
import CreateArticle from '../views/pages/admin/create';
import LoginAdmin from '../views/pages/admin/login';
import RegisterAdmin from '../views/pages/admin/register';
import EditArticle from '../views/pages/admin/edit_article';
import UserForm from '../views/pages/user/login';
import RegisterUser from '../views/pages/user/register';
import VerifyEmail from '../views/pages/user/verifyemail';
import ForgotPassword from '../views/pages/forgot_password';
import ChangePasswordForm from '../views/pages/user/change-password';
import ChangePasswordAdminForm from '../views/pages/admin/change-password';

const routes = {
  '/': showCard, // default page
  '/bedu': showCard,
  '/about': About,
  '/favorite': Favorite,
  '/news': showNews,
  '/articles': Artichel,
  '/article/:id': Detail,
  '/login': LoginAdmin,
  '/login_user': UserForm,
  '/register_user': RegisterUser,
  '/register': RegisterAdmin,
  '/create_article': CreateArticle,
  '/edit_article/:id': EditArticle,
  '/verify_user/:id': VerifyEmail,
  '/verify_email/:id': VerifyEmail,
  '/forgot-password': ForgotPassword,
  '/change-password_user/:id': ChangePasswordForm,
  '/change-password_admin/:id': ChangePasswordAdminForm,
  '/admin': AdminPage,
};

export default routes;
