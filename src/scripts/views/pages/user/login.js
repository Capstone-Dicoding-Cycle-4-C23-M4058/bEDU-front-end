import ArtichelDbSource from '../../../data/articheldb-source';
import { loginUserForm } from '../../templates/template-creator';

  const UserForm = {
    async render() {
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
        } catch (error) {
          console.error('Error:', error.message);
        }
      });
    },
  };

  export default UserForm;
