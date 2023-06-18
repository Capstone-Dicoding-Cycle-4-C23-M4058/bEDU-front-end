import ArtichelDbSource from '../../../data/articheldb-source';
import { loginAdminForm } from '../../templates/template-creator';

const LoginForm = {
  async render() {
    const nav = document.getElementById('bar-nav');
    nav.classList.add('admin-nav');
    return loginAdminForm();
  },

  async afterRender() {
    // Mendapatkan elemen tombol sign in
    const signInButton = document.getElementById('signInBtn');

    // Mendapatkan elemen input password
    const passwordInput = document.getElementById('passwordInput');

    // Menambahkan event listener untuk event "click" pada tombol sign in
    signInButton.addEventListener('click', () => {
      loginAdmin();
    });

    // Menambahkan event listener untuk event "keydown" pada input password
    passwordInput.addEventListener('keydown', event => {
      // Memeriksa jika tombol yang ditekan adalah "Enter"
      if (event.key === 'Enter') {
        loginAdmin();
      }
    });

    // Fungsi untuk melakukan login admin
    async function loginAdmin() {
      // Mengambil nilai username dan password dari input
      const usernameInput = document.getElementById('username').value;
      const passInput = document.getElementById('passwordInput').value;

      try {
        const response = await ArtichelDbSource.loginAdmin(usernameInput, passInput);
        console.log(response);

        const metaTag = document.createElement('meta');
        metaTag.setAttribute('http-equiv', 'refresh');
        metaTag.setAttribute('content', '1;/#/admin');
        document.head.appendChild(metaTag);
      } catch (error) {
        console.error('Error:', error.message);
      }
    }

    // const signInButton = document.getElementById('signInBtn');
    // signInButton.addEventListener('click', async () => {
    //   const usernameInput = document.getElementById('username').value;
    //   const passwordInput = document.getElementById('passwordInput').value;

    //   try {
    //     const response = await ArtichelDbSource.loginAdmin(usernameInput, passwordInput);
    //     console.log(response);
    //     const metaTag = document.createElement('meta');
    //     metaTag.setAttribute('http-equiv', 'refresh');
    //     metaTag.setAttribute('content', '1;/#/admin');
    //     document.head.appendChild(metaTag);
    //   } catch (error) {
    //     console.error('Error:', error.message);
    //   }
    // });
  },
};

export default LoginForm;
