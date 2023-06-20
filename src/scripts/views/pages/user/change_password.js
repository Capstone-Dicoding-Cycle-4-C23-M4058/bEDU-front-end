import Swal from 'sweetalert2';
import ArtichelDbSource from '../../../data/articheldb-source';
import { formChangePassword } from '../../templates/template-creator';
import Cookie from '../../../utils/cookie';

const ChangePasswordUser = {
  async render() {
    const nav = document.getElementById('bar-nav');
    nav.classList.add('admin-nav');
    return formChangePassword();
  },

  async afterRender() {
    const bEDUCookie = Cookie.getCookieValue('bEDUCookie');
    if (!bEDUCookie) {
      // Jika cookie "bEDUCookie" tidak ditemukan, redirect ke halaman login
      window.location.href = '/#/login_user';
      return;
    }

    const parsedToken = Cookie.parseJwtPayload(bEDUCookie);
    if (!parsedToken || parsedToken.role !== 'User') {
      // Jika token tidak valid atau role bukan admin, redirect ke halaman login
      window.location.href = '/#/login_user';
      return;
    }

    // Mendapatkan elemen tombol sign in
    const changePasswordButton = document.getElementById('changePassword');

    // Mendapatkan elemen input password
    const passwordInput = document.getElementById('passwordConfirm');

    // Menambahkan event listener untuk event "click" pada tombol sign in
    changePasswordButton.addEventListener('click', () => {
      changePassword();
    });

    // Menambahkan event listener untuk event "keydown" pada input password
    passwordInput.addEventListener('keydown', event => {
      // Memeriksa jika tombol yang ditekan adalah "Enter"
      if (event.key === 'Enter') {
        changePassword();
      }
    });

    // Fungsi untuk melakukan login admin
    async function changePassword() {
      // Mengambil nilai username dan password dari input
      const OldPassword = document.getElementById('oldpassword').value;
      const Password = document.getElementById('password').value;
      const PasswordConfirm = document.getElementById('passwordConfirm').value;

      const formData = new FormData();
      formData.append('old_password', OldPassword);
      formData.append('password', Password);
      formData.append('passwordConfirm', PasswordConfirm);

      try {
        const response = await ArtichelDbSource.ChangePasswordUser(formData, bEDUCookie);
        console.log(response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Change Password Success!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          const metaTag = document.createElement('meta');
          metaTag.setAttribute('http-equiv', 'refresh');
          metaTag.setAttribute('content', '1;/#/profile_user');
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

export default ChangePasswordUser;
