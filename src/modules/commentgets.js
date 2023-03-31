const commentGets = async (f) => {
  const res = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NPy1laVI5CqYuz1BAf3w/comments/?item_id=${f}`,
  );
  const datas = await res.json();
  return datas;
};

export default commentGets;