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

  static async deleteArticle(articleId, token) {
    try {
      const response = await fetch(API_ENDPOINT.DELETE_ARTICLE(articleId), {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  static async logoutAdmin(token) {
    try {
      const response = await fetch(API_ENDPOINT.LOGOUT_ADMIN, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const responseJson = await response.json();
        throw new Error(responseJson.message);
      }

      // Menghapus cookie bEDUCookie
      document.cookie = 'bEDUCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async logoutUser(token) {
    try {
      const response = await fetch(API_ENDPOINT.LOGOUT_USER, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const responseJson = await response.json();
        throw new Error(responseJson.message);
      }

      // Menghapus cookie bEDUCookie
      document.cookie = 'bEDUCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async updateArticle(formData, articleId, token) {
    try {
      const response = await fetch(API_ENDPOINT.EDIT_ARTICLE(articleId), {
        method: 'PUT',
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

  static async registerUser(nama, username, email, password, passwordConfirm) {
    try {
      const data = {
        nama,
        username,
        email,
        password,
        passwordConfirm,
      };

      console.log('Ini data', data);

      const response = await fetch(API_ENDPOINT.REGISTER_USER, {
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

  static async loginUser(username, password) {
    try {
      const data = {
        username,
        password,
      };

      const response = await fetch(API_ENDPOINT.LOGIN_USER, {
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
}

export default ArtichelDbSource;
