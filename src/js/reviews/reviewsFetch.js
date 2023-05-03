export const fetchReviews = async () => {
  try {
    const data = await fetch('https://carpathians-db.onrender.com/api/review', {
      method: 'GET',
      headers: {
        key: 'dede23wfWSD@@$fsD3',
      },
    }).then(r => r.json());
    return data;
  } catch (error) {
    console.log(error);
  }
};
