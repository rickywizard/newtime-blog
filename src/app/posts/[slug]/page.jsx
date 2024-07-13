import React from 'react';
import styles from './singlepage.module.css';
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';
import { getDataSlug } from '@/utils/getData';

export default async function SinglePage({ params }) {
  const { slug } = params;

  const data = await getDataSlug('posts', slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            {data?.user.image && (
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" className={styles.avatar} fill />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>
                {data?.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image
              src={data.img}
              alt=""
              className={styles.image}
              fill
              priority
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}