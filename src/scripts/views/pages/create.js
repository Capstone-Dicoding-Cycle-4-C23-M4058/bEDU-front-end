import ArtichelDbSource from '../../data/articheldb-source';
import { createArticleForm } from '../templates/template-creator';

const CreateArticle = {
  async render() {
    return createArticleForm();
  },

  async afterRender() {
    const createArticleButton = document.getElementById('CreateArticle');
    createArticleButton.addEventListener('click', async () => {
      const titleInput = document.getElementById('title').value;
      const abstractInput = document.getElementById('abstract').value;
      const descriptionInput = document.getElementById('description').value;
      const labelInput = document.getElementById('label').value;
      const thumbnailInput = document.getElementById('thumbnail').files[0];
      const imageInput = document.getElementById('image').files[0];

      const formData = new FormData();
      formData.append('title', titleInput);
      formData.append('abstract', abstractInput);
      formData.append('description', descriptionInput);
      formData.append('label', labelInput);
      formData.append('thumbnail', thumbnailInput);
      formData.append('image', imageInput);

      try {
        const bEDUCookie = getCookieValue('bEDUCookie');
        console.log(bEDUCookie);

        if (bEDUCookie) {
          // Kirim data artikel ke backend menggunakan ArtichelDbSource
          const response = await ArtichelDbSource.createArticle(formData, bEDUCookie);
          console.log(response);

          // Tampilkan pesan sukses atau alihkan pengguna ke halaman lain
          // sesuai dengan kebutuhan aplikasi Anda
        } else {
          console.error('Cookie "bEDUCookie" not found');
        }
      } catch (error) {
        // Tangani kesalahan jika ada
        console.error(error);
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
  },
};

export default CreateArticle;
