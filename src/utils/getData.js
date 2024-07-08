export const getData = async (route) => {
  const res = await fetch(`${process.env.SERVER_URL}/api/${route}`);

  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  return res.json();
};

export const getDataPage = async (route, page) => {
  const res = await fetch('http://localhost:3000/api/posts?page=1');

  // ${process.env.SERVER_URL}/api/${route}?page=${page}
  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  const jsonRes = await res.json();

  console.log(jsonRes);

  return jsonRes;
};