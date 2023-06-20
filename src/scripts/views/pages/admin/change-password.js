import Swal from 'sweetalert2';
import ArtichelDbSource from '../../../data/articheldb-source';
import { formChangePasswordOTP } from '../../templates/template-creator';

const ChangePasswordAdminForm = {
  async render() {
    return formChangePasswordOTP();
  },

  async afterRender() {
    // Mendapatkan elemen tombol login
const ChangePasswordButton = document.getElementById('changePassword');

// Menambahkan event listener untuk event "click" pada tombol login
ChangePasswordButton.addEventListener('click', () => {
    ChangePassword();
});

const url = window.location.href;
const uniqueCode = url.substring(url.lastIndexOf('/') + 1);
console.log('Ini unique code :', uniqueCode);

// Fungsi untuk melakukan login
async function ChangePassword() {
 // Mendapatkan elemen input password
const password = document.getElementById('password').value;
const passwordConfirm = document.getElementById('passwordConfirm').value;

  try {
    const response = await ArtichelDbSource.getOTPAdmin(uniqueCode, password, passwordConfirm);
    console.log(response);
    Swal.fire({
        title: `${response.message}`,
        text: `${response.data.message}`,
        icon: 'success',
      }).then(() => {
      const metaTag = document.createElement('meta');
      metaTag.setAttribute('http-equiv', 'refresh');
      metaTag.setAttribute('content', '1;/#/login');
      document.head.appendChild(metaTag);
    });
  } catch (error) {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${error.message}`,
    });
  }
}
  },
};

  export default ChangePasswordAdminForm;
