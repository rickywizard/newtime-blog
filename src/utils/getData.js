export const getData = async (route) => {
  const res = await fetch(`${process.env.SERVER_URL}/${route}`);

  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  return res.json();
};

export const getDataPage = async (route, page, cat) => {
  const res = await fetch(`${process.env.SERVER_URL}/${route}?page=${page}&cat=${cat || ''}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  const jsonRes = await res.json();

  // console.log(jsonRes);

  return jsonRes;
};

export const getDataSlug = async (route, slug) => {
  const res = await fetch(`${process.env.SERVER_URL}/${route}/${slug}`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  const jsonRes = await res.json();

  // console.log(jsonRes);

  return jsonRes;
};