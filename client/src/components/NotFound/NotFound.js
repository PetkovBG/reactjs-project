import styles from './NotFound.module.css'
import { Link } from 'react-router-dom';

export const NotFound = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.description}>Page not found.</p>
            <Link to="/" className={styles.link}>Go to home page</Link>
        </div>
    );

}