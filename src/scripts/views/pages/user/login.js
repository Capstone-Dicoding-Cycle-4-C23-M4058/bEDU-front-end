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
    // Mendapatkan elemen tombol login
const signInButton = document.getElementById('signInBtn');

// Mendapatkan elemen input password
const passwordInput = document.getElementById('passwordInput');

// Menambahkan event listener untuk event "click" pada tombol login
signInButton.addEventListener('click', () => {
  loginUser();
});

// Menambahkan event listener untuk event "keydown" pada input password
passwordInput.addEventListener('keydown', event => {
  // Memeriksa jika tombol yang ditekan adalah "Enter"
  if (event.key === 'Enter') {
    loginUser();
  }
});

// Fungsi untuk melakukan login
async function loginUser() {
  // Mengambil nilai username dan password dari input
  const usernameInput = document.getElementById('username').value;
  const passInput = document.getElementById('passwordInput').value;

  try {
    const response = await ArtichelDbSource.loginUser(usernameInput, passInput);
    console.log(response);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login Success!',
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('http-equiv', 'refresh');
      metaTag.setAttribute('content', '1;url=/#/favorite');
      document.head.appendChild(metaTag);
    });
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`,
    });
  }
}

    // const signInButton = document.getElementById('signInBtn');
    // signInButton.addEventListener('click', async () => {
    //   const usernameInput = document.getElementById('username').value;
    //   const passwordInput = document.getElementById('passwordInput').value;

    //   try {
    //     const response = await ArtichelDbSource.loginUser(usernameInput, passwordInput);
    //     console.log(response);
    //     Swal.fire({
    //       title: 'Login Success!',
    //       text: `Welcome ${response.data.username}`,
    //       icon: 'success',
    //     }).then(() => {
    //       const metaTag = document.createElement('meta');
    //       metaTag.setAttribute('http-equiv', 'refresh');
    //       metaTag.setAttribute('content', '1;url=/?#/favorite');
    //       document.head.appendChild(metaTag);
    //     });
    //   } catch (error) {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Oops...',
    //       text: `${error.message}`,
    //     });
    //   }
    // });
  },
};

  export default UserForm;
