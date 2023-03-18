import styles from './CreateProperty.module.css';

export const CreateProperty = () => {

    return (
        <section className={styles.createListing}>
        <h2>Create Real Estate Listing</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          
          <label htmlFor="type">Type:</label>
          <select id="type" name="type">
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>

          <label htmlFor="size">Square Meters:</label>
          <input type="text" id="size" name="size" />
          
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" />
          
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
          
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description"></textarea>
          
          <button type="submit" className={styles.createBtn}>Create Listing</button>
        </form>
      </section>
      

    );
}