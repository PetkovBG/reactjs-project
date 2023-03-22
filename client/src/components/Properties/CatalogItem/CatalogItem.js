import styles from '../Catalog.module.css'


export const CatalogItem = ({
    _id,
    name,
    Type,
    size,
    price,
    location,
    description,
}) => {
    return (
        <div className={styles.card}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg" alt="Real Estate" />
        <div className={styles.details}>
          <h3>{name}</h3>
          <p className={styles.type}>Type: {Type}</p>
          <p className={styles.price}>${price}</p>
          <p className={styles.location}>{location}</p>
          <button className={styles.details}>Details</button>
        </div>
      </div>
    );
}