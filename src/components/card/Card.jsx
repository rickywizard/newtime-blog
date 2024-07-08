import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ item, key }) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image src="/assets/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href='/'>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          {item.desc}
        </p>
        <Link href='/' className={styles.link}>Lebih Banyak</Link>
      </div>
    </div>
  );
};

export default Card;
