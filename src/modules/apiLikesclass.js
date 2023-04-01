class LikesApi {
  static ApiLikesUrl =
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xy1aQPyLn78nCXi0a3Ol/likes/';

  static async likeGet() {
    const response = await fetch(LikesApi.ApiLikesUrl);
    const data = await response.json();
    return data;
  }

  static async likePost(id) {
    const response = await fetch(LikesApi.ApiLikesUrl, {
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

export default LikesApi;