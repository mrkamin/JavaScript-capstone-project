const getLikes = async () => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xy1aQPyLn78nCXi0a3Ol/likes/',
  );
  const data = await response.json();
  return data;
};
const addLike = async (id, z) => {
  const result = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xy1aQPyLn78nCXi0a3Ol/likes/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        item_id: id,
        likes: z,
      }),
    },
  );
  const response = await result.text();
  return response;
};

export { getLikes, addLike };
