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
}

export default ArtichelDbSource;
