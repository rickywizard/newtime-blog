import React from 'react';
import styles from './categorylist.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { getRandomColor } from '@/utils/randomColor';
import { getData } from '@/utils/getData';

const CategoryList = async () => {
  const data = await getData('categories');

  const colors = [
    '#57c4ff31',
    '#da85c731',
    '#7fb88133',
    '#ff795736',
    '#ffb04f45',
    '#5e4fff31',
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Topik</h1>
      <div className={styles.categories}>
        {data.map((item, index) => (
          <Link
            key={item._id}
            href="/blog?cat=lifestyle"
            className={styles.category}
            style={{ backgroundColor: getRandomColor(colors) }}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
                className={styles.image}
                priority
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
