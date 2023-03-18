import styles from './Home.module.css';

export const Home = () => {

    return (
        <div className={styles['home-page']}>
        <div className="background-image">
          <h1>Welcome to Our Real Estate Website</h1>
          <p>Find your dream home today!</p>
          <button>Search Homes</button>
        </div>
      </div>
    );

}