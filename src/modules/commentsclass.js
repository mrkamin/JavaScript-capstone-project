const commentsPosts = async (data) => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPy1laVI5CqYuz1BAf3w/comments',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: data.item_id,
        username: data.username,
        comment: data.comment,
      }),
    },
  );
};

export default commentsPosts;
