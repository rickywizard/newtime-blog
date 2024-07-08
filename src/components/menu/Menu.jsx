import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import { getRandomColor } from '@/utils/randomColor';
import MenuPost from '../menuPost/MenuPost';
import MenuCategory from '../menuCategories/MenuCategory';

const Menu = () => {
  return (
    <aside className={styles.container}>
      {/* --- */}
      <h2 className={styles.subtitle}>Sedang Hangat</h2>
      <h1 className={styles.title}>Terpopuler</h1>
      <MenuPost withImage={false} />
      {/* --- */}
      <h2 className={styles.subtitle}>Temukan Topik</h2>
      <h1 className={styles.title}>Topik</h1>
      <MenuCategory />
      {/* --- */}
      <h2 className={styles.subtitle}>Rekomendasi</h2>
      <h1 className={styles.title}>Pilihan Editor</h1>
      <MenuPost withImage={true} />
    </aside>
  );
};

export default Menu;
