import React from 'react';
import styles from './singlepage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/assets/p1.jpeg"
                alt=""
                className={styles.avatar}
                fill
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/assets/p1.jpeg" alt="" className={styles.image} fill priority />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est, molestiae in voluptatibus autem quis vero minima cumque amet
              et soluta ea non dolorum obcaecati ratione quibusdam ullam?
              Recusandae, voluptas?
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est, molestiae in voluptatibus autem quis vero minima cumque amet
              et soluta ea non dolorum obcaecati ratione quibusdam ullam?
              Recusandae, voluptas?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
              est, molestiae in voluptatibus autem quis vero minima cumque amet
              et soluta ea non dolorum obcaecati ratione quibusdam ullam?
              Recusandae, voluptas?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
