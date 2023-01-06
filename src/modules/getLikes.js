
export class ApiLikes {
  static URL_LIKES = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IXJFUIasaU3NTiCbJHbl/likes/';

  static async getLikes() {
    const response = await fetch(ApiLikes.URL_LIKES);
    const data = await response.json();
    return data;
  }

  static async postLikes(id) {
    const response = await fetch(ApiLikes.URL_LIKES, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  }
}