import Swal from 'sweetalert2';
import ArtichelDbSource from '../../../data/articheldb-source';
import { loginUserForm } from '../../templates/template-creator';

const UserForm = {
  async render() {
    const nav = document.getElementById('bar-nav');
    nav.classList.add('admin-nav');
    return loginUserForm();
  },

  async afterRender() {
    const signInButton = document.getElementById('signInBtn');
    signInButton.addEventListener('click', async () => {
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('passwordInput').value;

      try {
        const response = await ArtichelDbSource.loginUser(usernameInput, passwordInput);
        console.log(response);
        Swal.fire({
          title: 'Login Success!',
          text: `Welcome ${response.data.username}`,
          icon: 'success',
        }).then(() => {
          const metaTag = document.createElement('meta');
          metaTag.setAttribute('http-equiv', 'refresh');
          metaTag.setAttribute('content', '1;url=/?#/favorite');
          document.head.appendChild(metaTag);
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        });
      }
    });
  },
};

  export default UserForm;
