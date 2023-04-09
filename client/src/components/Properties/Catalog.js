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

      {properties.length === 0 &&
      <div className={styles['no-properties']}>
        <p className={styles['message-p']}>There are no properties listed as of now. Please come back later!</p>
      </div>
        }

    </section>



  );
}