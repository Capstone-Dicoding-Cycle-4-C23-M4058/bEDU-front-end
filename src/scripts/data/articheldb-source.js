import API_ENDPOINT from '../globals/api-endpoint';

class ArtichelDbSource {
  static async showCardArtichel() {
    const response = await fetch(API_ENDPOINT.SHOW_CARD);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailArtichel(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async getAdminArticles() {
    const response = await fetch(API_ENDPOINT.ADMIN_ARTICLES);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async deleteArticle(articleId) {
    const response = await fetch(API_ENDPOINT.DELETE_ARTICLE(articleId), {
      method: 'DELETE',
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async createArticle(formData, token) {
    try {
      const response = await fetch(API_ENDPOINT.CREATE_ARTICLE, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const responseJson = await response.json();
        throw new Error(responseJson.message);
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async loginAdmin(username, password) {
    try {
      const data = {
        username,
        password,
      };

      const response = await fetch(API_ENDPOINT.LOGIN_ADMIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseJson = await response.json();
        throw new Error(responseJson.message);
      }

      const responseData = await response.clone().json();
      document.cookie = `bEDUCookie=${responseData.data.token}; path=/`;
      console.log(responseData.message);
      return responseData;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async registerAdmin(nama, username, email, password, passwordConfirm) {
    try {
      const data = {
        nama,
        username,
        email,
        password,
        passwordConfirm,
      };

      console.log('Ini data', data);

      const response = await fetch(API_ENDPOINT.REGISTER_ADMIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const responseJson = await response.json();
        throw new Error(responseJson.message);
      }

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default ArtichelDbSource;
