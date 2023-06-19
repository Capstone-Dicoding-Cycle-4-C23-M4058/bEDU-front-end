import Swal from 'sweetalert2';
import ArtichelDbSource from '../../../data/articheldb-source';
import { RegisterUserForm } from '../../templates/template-creator';

const RegisterUser = {
    async render() {
      const nav = document.getElementById('bar-nav');
      nav.classList.add('admin-nav');
      return RegisterUserForm();
    },

    async afterRender() {
    // Mendapatkan elemen tombol register
    const registerUserButton = document.getElementById('RegisterUserButton');

    // Mendapatkan elemen input password konfirmasi
    const passwordConfirmInput = document.getElementById('passwordConfirm');

    // Menambahkan event listener untuk event "click" pada tombol register
    registerUserButton.addEventListener('click', () => {
      registerUser();
    });

    // Menambahkan event listener untuk event "keydown" pada input password konfirmasi
    passwordConfirmInput.addEventListener('keydown', event => {
      // Memeriksa jika tombol yang ditekan adalah "Enter"
      if (event.key === 'Enter') {
        registerUser();
      }
    });

    // Fungsi untuk melakukan registrasi user
    async function registerUser() {
      // Mengambil nilai input dari elemen-elemen yang diperlukan
      const nama = document.getElementById('namaLengkap').value;
      const username = document.getElementById('username').value;
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
      const passwordConfirm = document.getElementById('passwordConfirm').value;

      try {
        const response = await ArtichelDbSource.registerUser(
          nama,
          username,
          email,
          password,
          passwordConfirm,
        );
        console.log(response);
        Swal.fire({
          title: 'Register Success!',
          text: `${response.data}`,
          icon: 'success',
        }).then(() => {
          const metaTag = document.createElement('meta');
          metaTag.setAttribute('http-equiv', 'refresh');
          metaTag.setAttribute('content', '1;url=/#/login_user');
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

      // const RegisterUserButton = document.getElementById('RegisterUserButton');
      // RegisterUserButton.addEventListener('click', async () => {
      //   const nama = document.getElementById('namaLengkap').value;
      //   const username = document.getElementById('username').value;
      //   const email = document.getElementById('emailInput').value;
      //   const password = document.getElementById('passwordInput').value;
      //   const passwordConfirm = document.getElementById('passwordConfirm').value;
      //     console.log(nama, username, email, password, passwordConfirm);
      //   try {
      //     const response = await ArtichelDbSource.registerUser(
      //       nama,
      //       username,
      //       email,
      //       password,
      //       passwordConfirm,
      //       );
      //       Swal.fire({
      //         title: 'Register Success!',
      //         text: `${response.data}`,
      //         icon: 'success',
      //       }).then(() => {
      //         const metaTag = document.createElement('meta');
      //         metaTag.setAttribute('http-equiv', 'refresh');
      //         metaTag.setAttribute('content', '1;url=/#/login_user');
      //         document.head.appendChild(metaTag);
      //       });

      //     // Tampilkan pesan sukses atau alihkan pengguna ke halaman lain
      //     // sesuai dengan kebutuhan aplikasi Anda
      //   } catch (error) {
      //     // Tangani kesalahan jika ada
      //     Swal.fire({
      //       icon: 'error',
      //       title: 'Oops...',
      //       text: `${error.message}`,
      //     });
      //   }
      // });
    },
};

export default RegisterUser;
