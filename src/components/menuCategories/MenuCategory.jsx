import React from 'react';
import styles from './menucategory.module.css';
import { getRandomColor } from '@/utils/randomColor';
import Link from 'next/link';

const MenuCategory = () => {
  const colors = [
    '#57c4ff31',
    '#da85c731',
    '#7fb88133',
    '#ff795736',
    '#ffb04f45',
    '#5e4fff31',
  ];

  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=lifestyle"
        className={styles.categoryItem}
        style={{ backgroundColor: getRandomColor(colors) }}
      >
        Lifestyle
      </Link>
      <Link
        href="/blog?cat=fashion"
        className={styles.categoryItem}
        style={{ backgroundColor: getRandomColor(colors) }}
      >
        Fashion
      </Link>
      <Link
        href="/blog?cat=food"
        className={styles.categoryItem}
        style={{ backgroundColor: getRandomColor(colors) }}
      >
        Food
      </Link>
      <Link
        href="/blog?cat=travel"
        className={styles.categoryItem}
        style={{ backgroundColor: getRandomColor(colors) }}
      >
        Travel
      </Link>
      <Link
        href="/blog?cat=culture"
        className={styles.categoryItem}
        style={{ backgroundColor: getRandomColor(colors) }}
      >
        Culture
      </Link>
      <Link
        href="/blog?cat=technology"
        className={styles.categoryItem}
        style={{ backgroundColor: getRandomColor(colors) }}
      >
        Technology
      </Link>
    </div>
  );
};

export default MenuCategory;
