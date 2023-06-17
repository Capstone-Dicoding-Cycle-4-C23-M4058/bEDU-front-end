import ArtichelDbSource from '../../../data/articheldb-source';
import { RegisterUserForm } from '../../templates/template-creator';

const RegisterUser = {
    async render() {
      return RegisterUserForm();
    },

    async afterRender() {
      const RegisterUserButton = document.getElementById('RegisterUserButton');
      RegisterUserButton.addEventListener('click', async () => {
        const nama = document.getElementById('fullname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('emailInput').value;
        const password = document.getElementById('passwordInput').value;
        const passwordConfirm = document.getElementById('passwordConfirm').value;
          console.log(nama, username, email, password, passwordConfirm);
        try {
          const response = await ArtichelDbSource.registerUser(
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

export default RegisterUser;
