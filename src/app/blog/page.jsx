import CardList from '@/components/cardList/CardList';
import styles from './blogpage.module.css';

export default function Blog({ searchParams }) {
  
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams
  
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
      </div>
    </main>
  );
}
