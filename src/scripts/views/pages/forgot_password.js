import Swal from 'sweetalert2';
import ArtichelDbSource from '../../data/articheldb-source';
import { formForgotPassword } from '../templates/template-creator';

const ForgotPassword = {
  async render() {
    return formForgotPassword();
  },

  async afterRender() {
    // Mendapatkan elemen tombol sign in
    const buttonForgotPassword = document.getElementById('forgotPassword');

    // Menambahkan event listener untuk event "click" pada tombol sign in
    buttonForgotPassword.addEventListener('click', () => {
      forgotPassword();
    });

    // Fungsi untuk melakukan login admin
    async function forgotPassword() {
    // Mendapatkan elemen email password
    const emailInput = document.getElementById('emailforgot').value;

      try {
        const response = await ArtichelDbSource.forgotPassword(emailInput);
        console.log(response);
        Swal.fire({
            title: `${response.message}`,
            text: `${response.data.message}`,
            icon: 'success',
          }).then(() => {
          const metaTag = document.createElement('meta');
          metaTag.setAttribute('http-equiv', 'refresh');
          metaTag.setAttribute('content', '1;/');
          document.head.appendChild(metaTag);
        });
      } catch (errors) {
        const errorMessage = errors.message; // Mendapatkan pesan kesalahan dari errorData
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${errorMessage}`,
        });
      }
    }
  },
};

export default ForgotPassword;
