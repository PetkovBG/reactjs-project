import styles from './Home.module.css';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';

export const Home = () => {

  const { userEmail } = useContext(AuthContext);
  let firstName = '';
  if(userEmail) {
    firstName = userEmail.split('@')[0];
  }
    return (
        <div className={styles['home-page']}>
        <div className={styles["background-image"]}>
          <h1 className={styles.heading}>Petkov Real Estate</h1>
          <h2 className={styles.subheading}>The Real Website for your dream home</h2>
          {firstName && 
          <p className={styles.info}>Find your dream home today, {firstName}!</p>}
          {!firstName && <p className={styles.info}>Find your dream home today!</p>}
          <Link to="/catalog" className={styles.button}>Search Homes</Link>
        </div>
      </div>
    );

}