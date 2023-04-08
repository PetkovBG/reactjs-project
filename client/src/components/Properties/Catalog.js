import styles from './Catalog.module.css';
import { CatalogItem } from './CatalogItem/CatalogItem';
import { usePropertyContext } from '../../contexts/PropertyContext';
import { useEffect } from 'react';

export const Catalog = () => {

  const { properties, getAllProperties } = usePropertyContext();
  // console.log("log from catalog", properties);

  useEffect(() => {
    getAllProperties();
  }, [])

  return (
    <section className={styles.catalog}>
      <h2>Real Estate Catalog</h2>

      {properties.map(x =>
        <CatalogItem key={x._id} {...x} />
      )}

      {/* <div className={styles.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg" alt="Real Estate" />
    <div className={styles.details}>
      <h3>Real Estate Name</h3>
      <p className={styles.type}>Type: Two bedroom apartment</p>
      <p className={styles.price}>$1,000,000</p>
      <p className={styles.location}>New York, NY</p>
      <button className={styles.details}>Details</button>
    </div>
  </div> */}

      {properties.length === 0 &&
      <div className={styles['no-properties']}>
        <p className={styles['message-p']}>There are no properties listed as of now. Please come back later!</p>
      </div>
        }

    </section>



  );
}