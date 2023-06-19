import Swal from 'sweetalert2';
import ArtichelDbSource from '../../../data/articheldb-source';
import { verifyemail } from '../../templates/template-creator';

const VerifyEmail = {
  async render() {
    return verifyemail();
  },

  async afterRender() {
    const MessageStatus = document.getElementById('status_verify');
    const url = window.location.href;
    const uniqueCode = url.substring(url.lastIndexOf('/') + 1);
    console.log('Ini unique code :', uniqueCode);

    try {
      const response = await ArtichelDbSource.verifyEmailUser(uniqueCode);
      MessageStatus.textContent = 'Status berhasil diverifikasi.';
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  },
};

export default VerifyEmail;