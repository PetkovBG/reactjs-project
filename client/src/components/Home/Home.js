import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
        <div className={styles['home-page']}>
        <div className={styles["background-image"]}>
          <h1 className={styles.heading}>Petkov Real Estate</h1>
          <h2 className={styles.subheading}>The Real Website for your dream home</h2>
          <p className={styles.info}>Find your dream home today!</p>
          <Link to="/catalog" className={styles.button}>Search Homes</Link>
        </div>
      </div>
    );

}