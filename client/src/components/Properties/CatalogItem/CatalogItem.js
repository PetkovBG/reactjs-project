import styles from './CatalogItem.module.css'

import { Link } from 'react-router-dom';

export const CatalogItem = ({
    _id,
    name,
    type,
    size,
    price,
    location,
    imageUrl,
    description,
}) => {
    return (
        <div className={styles.card}>
        <img src={imageUrl} alt="Real Estate Pic" />
        <div className={styles.details}>
          <h3>{name}</h3>
          <p className={styles.type}>{type}</p>
          <p className={styles.price}>{price}</p>
          <p className={styles.location}>{location}</p>
          <Link to={`/catalog/${_id}`} className={styles.details}>Details</Link>
        </div>
      </div>
    );
}