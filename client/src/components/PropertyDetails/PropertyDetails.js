import styles from './PropertyDetails.module.css'

import { Link, useNavigate } from 'react-router-dom';

import {propertyServiceFactory} from '../../services/propertyService';
import { useService } from '../../hooks/useService';

import { AuthContext, useAuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';


import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { AddComment } from './AddComment/AddComment';


export const PropertyDetails = () => {

    const navigate = useNavigate();

    const propertyService = useService(propertyServiceFactory);

    const [property, setProperty] = useState({});

    const { userId, isAuthenticated } = useAuthContext();
    const {propertyId} = useParams();

    useEffect(() => {
        propertyService.getOne(propertyId)
        .then(result => {
            console.log('Log from new property - details', result);
            setProperty(result);
        })
    }, [propertyId]);

    const isOwner = property._ownerId === userId;

    const onDeleteClick = async () => {

        let result = window.confirm('Are you sure you want to delete this record?')

        if (result) {
            await propertyService.delete(property._id);
            navigate('/catalog')
        } else {
            return;
        }

    }

return (
    <div className={styles["real-estate-details"]}>
    <h1>{property.name}</h1>
    <img src={property.imageUrl} alt="" />
    <p>Type: {property.type}</p>
    <p>Size: {property.size}</p>
    <p>Price: ${property.price}</p>
    <p>Location: {property.location}</p>
    <p>Description: {property.description}</p>

    <h2>Comments</h2>

    {isOwner && (
       < div className="buttons">
       <Link to={`/catalog/${propertyId}/edit`} className="button">Edit</Link>
       <button className="button" onClick={onDeleteClick}>Delete</button>
   </div>
    )}
   
      {isAuthenticated && <AddComment />}

  </div>
);

}