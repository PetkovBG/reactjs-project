import styles from './Catalog.module.css';

export const Catalog = () => {
    return (
<section className={styles.catalog}>
  <h2>Real Estate Catalog</h2>
  <div className={styles.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg" alt="Real Estate" />
    <div className={styles.details}>
      <h3>Real Estate Name</h3>
      <p className={styles.type}>Type: Two bedroom apartment</p>
      <p className={styles.price}>$1,000,000</p>
      <p className={styles.location}>New York, NY</p>
      <button className={styles.detailsBtn}>Details</button>
    </div>
  </div>
  <div className={styles.card}>
    <img src="https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/life-in-city-images/london-england-glance.jpg" alt="Real Estate" />
    <div className={styles.details}>
      <h3>Real Estate Name</h3>
      <p className={styles.type}>Type: Three bedroom house</p>
      <p className={styles.price}>$800,000</p>
      <p className={styles.location}>Los Angeles, CA</p>
      <button className={styles.detailsBtn}>Details</button>
    </div>
  </div>
  <div className={styles.card}>
    <img src="https://travellersworldwide.com/wp-content/uploads/2022/12/Shutterstock_1401491837.jpg" alt="Real Estate" />
    <div className={styles.details}>
      <h3>Real Estate Name</h3>
      <p className={styles.type}>Type: Studio apartment</p>
      <p className={styles.price}>$500,000</p>
      <p className={styles.location}>Chicago, IL</p>
      <button className={styles.detailsBtn}>Details</button>
    </div>
  </div>
  <div className={styles.card}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg" alt="Real Estate" />
    <div className={styles.details}>
      <h3>Real Estate Name</h3>
      <p className={styles.type}>Type: Two bedroom apartment</p>
      <p className={styles.price}>$1,000,000</p>
      <p className={styles.location}>New York, NY</p>
      <button className={styles.detailsBtn}>Details</button>
    </div>
  </div>
</section>



    );
}