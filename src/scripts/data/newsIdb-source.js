import API_ENDPOINT from '../globals/api-endpoint';

class NewslDbSource {
  static async showCardNews() {
    const response = await fetch(API_ENDPOINT.SHOW_NEWS);
    const responseJson = await response.json();
    return responseJson.data.posts;
  }
}

export default NewslDbSource;
