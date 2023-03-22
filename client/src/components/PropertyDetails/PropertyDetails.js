import styles from './PropertyDetails.module.css'

import * as propertyService from '../../services/propertyService';

import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


export const PropertyDetails = () => {

    const [property, setProperty] = useState({});

    const {propertyId} = useParams();

    useEffect(() => {
        propertyService.getOne(propertyId)
        .then(result => {
            console.log(result);
            setProperty(result);
        })
    }, [propertyId])

return (
    <div className="real-estate-details">
    <h1>New York</h1>
    <img src={property.imageUrl} alt="" />
    <p>Type: {property.type}</p>
    <p>Size: {property.size}</p>
    <p>Price: ${property.price}</p>
    <p>Location: {property.location}</p>
    <p>Description: {property.description}</p>

    <h2>Comments</h2>
    {/* <ul>
      {comments.map((comment, index) => (
        <li key={index}>{comment} <button onClick={handleDelete}>Delete</button> <button onClick={handleEdit}>Edit</button></li>
      ))}
    </ul> */}
    {/* onSubmit={handleSubmit} */}
    <form >
      <label>
        Add a comment:
        <input type="text"  />
        {/* value={newComment} onChange={(e) => setNewComment(e.target.value)} */}
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
);

}