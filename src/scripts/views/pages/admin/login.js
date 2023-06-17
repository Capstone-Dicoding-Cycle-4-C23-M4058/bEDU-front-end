import ArtichelDbSource from '../../../data/articheldb-source';
import { loginAdminForm } from '../../templates/template-creator';

const LoginForm = {
  async render() {
    const nav = document.getElementById('bar-nav');
    nav.classList.add('admin-nav');
    return loginAdminForm();
  },

  async afterRender() {
    const signInButton = document.getElementById('signInBtn');
    signInButton.addEventListener('click', async () => {
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('passwordInput').value;

      try {
        const response = await ArtichelDbSource.loginAdmin(usernameInput, passwordInput);
        console.log(response);
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'refresh');
        metaTag.setAttribute('content', '1;/#/admin');
        document.head.appendChild(metaTag);
      } catch (error) {
        console.error('Error:', error.message);
      }
    });
  },
};

export default LoginForm;
