import styles from './PropertyDetails.module.css'

import { Link, useNavigate } from 'react-router-dom';

import { propertyServiceFactory } from '../../services/propertyService';
import { useService } from '../../hooks/useService';

import { AuthContext, useAuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

import * as commentService from '../../services/commentService';


import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { AddComment } from './AddComment/AddComment';
import { propertyReducer } from '../../reducers/propertyReducer';


export const PropertyDetails = () => {

  const navigate = useNavigate();

  const propertyService = useService(propertyServiceFactory);

  // const [property, setProperty] = useState({});

  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { propertyId } = useParams();

  const [property, dispatch] = useReducer(propertyReducer, {});



  useEffect(() => {
    Promise.all([
      propertyService.getOne(propertyId),
      commentService.getAll(propertyId),
    ])
      .then(([propertyData, commentsData]) => {
        console.log('Promise all useEffect', propertyData);
        console.log('Promise all useEffect', commentsData);
        
        const propertyState = {
          ...propertyData,
          commentsData,
        }

        dispatch({
          type: "PROPERTY_FETCH",
          payload: propertyState,
        })

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

  const onCommentSubmit = async (values) => {
    // console.log('Comment submit', values);
    const response = await commentService.create(propertyId, values.comment);

    // console.log('Response from comment submit', response);

      dispatch({
        type: "COMMENT_ADD",
        payload: response,
        userEmail,
      })

  };

  return (
    <div className={styles["real-estate-details"]}>
      <h1>{property.name}</h1>
      <img src={property.imageUrl} alt="" />
      <p>Type: {property.type}</p>
      <p>Size: {property.size}</p>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
      <p>Description: {property.description}</p>



      {isOwner && (
        < div className="buttons">
          <Link to={`/catalog/${propertyId}/edit`} className="button">Edit</Link>
          <button className="button" onClick={onDeleteClick}>Delete</button>
        </div>
      )}

      <h2>Comments</h2>
      <ul>
        {property.comments && property.comments.map(x => (
          <li key={x._id}>
            <p>{x.author.email}: {x.comment}</p>
          </li>
        ))}
      </ul>

      {!property.comments?.length && (
        <p>No comments</p>
      )}

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

    </div>
  );

}