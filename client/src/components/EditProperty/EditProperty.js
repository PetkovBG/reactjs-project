import styles from './EditProperty.module.css';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useService } from '../../hooks/useService';
import { useForm } from '../../hooks/useForm';
import { propertyServiceFactory } from '../../services/propertyService';
import { usePropertyContext } from '../../contexts/PropertyContext';

    export const EditProperty = () => {

      const { onPropertyEditSubmit } = usePropertyContext();

      const {propertyId} = useParams();

      const propertyService = useService(propertyServiceFactory);

      const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        type: '',
        size: '',
        price: '',
        location: '',
        imageUrl: '',
        description: '',
      }, onPropertyEditSubmit);

      useEffect(() => {
        propertyService.getOne(propertyId)
        .then(result => {
          // console.log('Log from edit useEffect', result);
          changeValues(result);
        })
      }, [propertyId]);

  return (
    <section className={styles.editListing}>
      <h2>Edit Real Estate Listing</h2>
      <form method="POST" 
      onSubmit={onSubmit}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"
          value={values.name}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="type">Type:</label>
        <input type="text" id="type" name="type"
          value={values.type}
          onChange={changeHandler}
          placeholder="Apartment, condo, house etc."
          className={styles.input}
          required
        />

        <label htmlFor="size">Square Meters:</label>
        <input type="text" id="size" name="size"
          value={values.size}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price"
          value={values.price}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location"
          value={values.location}
          onChange={changeHandler}
          className={styles.input}
          required
        />

        <label htmlFor="imageUrl">Image:</label>
        <input 
        value={values.imageUrl} onChange={changeHandler}
         type="text" id="imageUrl"
          name="imageUrl"
          placeholder="Upload a photo..."
          className={styles.input}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description"
          value={values.description}
          onChange={changeHandler}
          className={styles.textarea}
          required
        ></textarea>

        <button type="submit" className={styles.btn}>Update Listing</button>
      </form>
    </section>
  );
}

