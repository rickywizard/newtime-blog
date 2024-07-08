import CardList from '@/components/cardList/CardList';
import styles from './blogpage.module.css';

export default function Blog() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lifestyle</h1>
      <div className={styles.content}>
        <CardList />
      </div>
    </main>
  );
}
