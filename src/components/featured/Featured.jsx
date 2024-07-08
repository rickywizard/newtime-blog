import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Temukan <b>Inspirasi, Cerita, dan Pengetahuan</b> di Setiap Halaman
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/assets/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            temporibus nam sequi laboriosam veniam assumenda eligendi illo
            aliquid quasi? Nihil ipsum necessitatibus reiciendis odio quasi
            debitis, quaerat minima nemo. Nesciunt!
          </p>
          <button className={styles.button}>Lebih Banyak</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
