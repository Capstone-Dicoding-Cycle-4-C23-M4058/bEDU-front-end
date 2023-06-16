import ArtichelDbSource from '../../../data/articheldb-source';
import { RegisterAdminForm } from '../../templates/template-creator';

const RegisterAdmin = {
  async render() {
    return RegisterAdminForm();
  },

  async afterRender() {
    const registerAdminButton = document.getElementById('RegisterAdminButton');
    registerAdminButton.addEventListener('click', async () => {
      const nama = document.getElementById('namaLengkap').value;
      const username = document.getElementById('username').value;
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
      const passwordConfirm = document.getElementById('passwordConfirm').value;

      console.log(nama, username, email, password, passwordConfirm);
      try {
        const response = await ArtichelDbSource.registerAdmin(
          nama,
          username,
          email,
          password,
          passwordConfirm,
          );

        console.log(response);

        // Tampilkan pesan sukses atau alihkan pengguna ke halaman lain
        // sesuai dengan kebutuhan aplikasi Anda
      } catch (error) {
        // Tangani kesalahan jika ada
        console.error(error);
      }
    });
  },
};

export default RegisterAdmin;
