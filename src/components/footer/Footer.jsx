import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
          <h1 className={styles.logoText}>Newtime</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officia
          doloremque, amet delectus facere recusandae autem qui tenetur labore
          at ipsum numquam ratione architecto a iusto? Explicabo quibusdam iusto
          quae?
        </p>
        <div className={styles.social}>
          <Image
            className={styles.icon}
            src="/assets/facebook.png"
            alt="facebook"
            width={18}
            height={18}
          />
          <Image
            className={styles.icon}
            src="/assets/instagram.png"
            alt="instagram"
            width={18}
            height={18}
          />
          <Image
            className={styles.icon}
            src="/assets/youtube.png"
            alt="youtube"
            width={18}
            height={18}
          />
          <Image
            className={styles.icon}
            src="/assets/tiktok.png"
            alt="tiktok"
            width={18}
            height={18}
          />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link className={styles.link} href="/">Homepage</Link>
          <Link className={styles.link} href="/">Blog</Link>
          <Link className={styles.link} href="/">About</Link>
          <Link className={styles.link} href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link className={styles.link} href="/">Lifestyle</Link>
          <Link className={styles.link} href="/">Fashion</Link>
          <Link className={styles.link} href="/">Technology</Link>
          <Link className={styles.link} href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link className={styles.link} href="/">Facebook</Link>
          <Link className={styles.link} href="/">Instagram</Link>
          <Link className={styles.link} href="/">Youtube</Link>
          <Link className={styles.link} href="/">Tiktok</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
