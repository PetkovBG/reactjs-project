import styles from './CreateProperty.module.css';
import { usePropertyContext } from '../../contexts/PropertyContext';

import { useForm } from '../../hooks/useForm';

export const CreateProperty = () => {

    const { onCreateSubmit } = usePropertyContext();

    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        type: '',
        size: '',
        price: '',
        location: '',
        imageUrl: '',
        description: '',
    }, onCreateSubmit)

    return (
        <section className={styles.createListing}>
            <h2>Create Real Estate Listing</h2>
            <form method="POST" onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"
                    value={values.name}
                    onChange={changeHandler}
                />

                <label htmlFor="type">Type:</label>
                <input type="text" id="name" name="type"
                    value={values.type}
                    onChange={changeHandler}
                    placeholder="Apartment, condo, house etc."
                />
                {/* <select id="type" name="type">
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option> */}
                {/* </select> */}

                <label htmlFor="size">Square Meters:</label>
                <input type="text" id="size" name="size"
                    value={values.size}
                    onChange={changeHandler}
                />

                <label htmlFor="price">Price:</label>
                <input type="text" id="price" name="price"
                    value={values.price}
                    onChange={changeHandler}
                />

                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location"
                    value={values.location}
                    onChange={changeHandler}
                />

                <label htmlFor="game-img">Image:</label>
                <input value={values.imageUrl} onChange={changeHandler} type="text" id="imageUrl"
                    name="imageUrl"
                    placeholder="Upload a photo..." />

                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"
                    value={values.description}
                    onChange={changeHandler}
                ></textarea>

                <button type="submit" className={styles.createBtn}>Create Listing</button>
            </form>
        </section>


    );
}