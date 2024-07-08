import React from 'react';
import styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Comments() {
  const status = 'auth';

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'auth' ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/assets/p1.jpeg"
              alt=""
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem at
            veniam laborum eaque debitis optio quisquam iure, sequi, tempore
            voluptate saepe molestiae nam non illum a explicabo architecto
            corporis. Fuga.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/assets/p1.jpeg"
              alt=""
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem at
            veniam laborum eaque debitis optio quisquam iure, sequi, tempore
            voluptate saepe molestiae nam non illum a explicabo architecto
            corporis. Fuga.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/assets/p1.jpeg"
              alt=""
              className={styles.image}
              width={50}
              height={50}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem at
            veniam laborum eaque debitis optio quisquam iure, sequi, tempore
            voluptate saepe molestiae nam non illum a explicabo architecto
            corporis. Fuga.
          </p>
        </div>
      </div>
    </div>
  );
}
