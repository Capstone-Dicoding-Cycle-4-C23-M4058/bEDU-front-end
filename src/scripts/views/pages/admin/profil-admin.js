import Swal from 'sweetalert2';
import UrlParser from '../../../routes/url-parser';
import ArtichelDbSource from '../../../data/articheldb-source';
import { Profiles } from '../../templates/template-creator';

const ProfilesAdmin = {
  async render() {
    const nav = document.getElementById('bar-nav');
    nav.classList.add('admin-nav');
    return `
          <div class="post-detail"></div>
        `;
  },

  async afterRender() {
    const bEDUCookie = getCookieValue('bEDUCookie');
    if (!bEDUCookie) {
      // Jika cookie "bEDUCookie" tidak ditemukan, redirect ke halaman login
      window.location.href = '/#/login';
      return;
    }

    const parsedToken = parseJwtPayload(bEDUCookie);
    if (!parsedToken || parsedToken.role !== 'Admin') {
      // Jika token tidak valid atau role bukan admin, redirect ke halaman login
      window.location.href = '/#/login';
      return;
    }

    const output = document.getElementsByClassName('post-detail');
    output.innerHTML = 'Loading...';

    try {
      const response = await ArtichelDbSource.ProfileAdmin(bEDUCookie);
      console.log(response);
      const Container = document.querySelector('.post-detail');
      Container.innerHTML = Profiles(response);
      console.log(response.data.nama);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const IdAdmin = url.id;

    const UpdateProfileButton = document.getElementById('UpdateProfile');
    UpdateProfileButton.addEventListener('click', async () => {
        const namaInput = document.getElementById('nama').value;
        const usernameInput = document.getElementById('username').value;
        const emailInput = document.getElementById('email').value;
        const roleInput = document.getElementById('role').value;

        const formData = new FormData();
        formData.append('nama', namaInput);
        formData.append('username', usernameInput);
        formData.append('email', emailInput);
        formData.append('role', roleInput);
      try {
        if (bEDUCookie) {
          // Kirim data artikel ke backend menggunakan ArtichelDbSource
          const response = await ArtichelDbSource.updateProfileAdmin(
            formData,
            IdAdmin,
            bEDUCookie);

            console.log(response);

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edit Article Success!',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              const metaTag = document.createElement('meta');
              metaTag.setAttribute('http-equiv', 'refresh');
              metaTag.setAttribute('content', '1;url=/#/admin');
              document.head.appendChild(metaTag);
            });
          // Tampilkan pesan sukses atau alihkan pengguna ke halaman lain
          // sesuai dengan kebutuhan aplikasi Anda
        } else {
          console.error('Cookie "bEDUCookie" not found');
        }
      } catch (error) {
        // Tangani kesalahan jika ada
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
        });
      }
    });

    function getCookieValue(cookieName) {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${cookieName}=`)) {
          return cookie.substring(cookieName.length + 1);
        }
      }
      return null;
    }
    function parseJwtPayload(token) {
      try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = atob(base64);
        return JSON.parse(jsonPayload);
      } catch (error) {
        return null;
      }
    }

    function formatTextWithLineBreaks(text) {
      return text.replace(/\n/g, '<br>');
    }
  },
};

export default ProfilesAdmin;
