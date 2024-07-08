import React from 'react';
import styles from './menupost.module.css';
import Link from 'next/link';
import { getRandomColor } from '@/utils/randomColor';
import Image from 'next/image';

const MenuPost = ({ withImage }) => {
  const colors = [
    '#ff7857',
    '#ffb14f',
    '#7fb881',
    '#ff7887',
    '#775aec',
    '#789cff',
  ];

  return (
    <div className={styles.items}>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/assets/p1.jpeg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={styles.category}
            style={{ backgroundColor: getRandomColor(colors) }}
          >
            Travel
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/assets/p1.jpeg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={styles.category}
            style={{ backgroundColor: getRandomColor(colors) }}
          >
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/assets/p1.jpeg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={styles.category}
            style={{ backgroundColor: getRandomColor(colors) }}
          >
            Food
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.03.2024</span>
          </div>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/assets/p1.jpeg" alt="" className={styles.image} fill />
          </div>
        )}
        <div className={styles.textContainer}>
          <span
            className={styles.category}
            style={{ backgroundColor: getRandomColor(colors) }}
          >
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 11.03.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;
