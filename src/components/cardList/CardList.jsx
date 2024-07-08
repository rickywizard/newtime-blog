import React from 'react';
import styles from './cardlist.module.css';
import Pagination from '../pagination/Pagination';
import Image from 'next/image';
import Card from '../card/Card';
// import { getDataPage } from '@/utils/getData';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/posts?page=1', {
    cache: "no-store"
  });

  // ${process.env.SERVER_URL}/api/${route}?page=${page}
  if (!res.ok) {
    throw new Error('Failed fetching data');
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const data = await getData();

  // console.log("data", data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Artikel Terbaru</h1>
      <div className={styles.posts}>
        {data?.map((item, index) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
