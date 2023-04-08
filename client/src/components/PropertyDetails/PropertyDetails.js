import styles from './PropertyDetails.module.css'

import { Link, useNavigate } from 'react-router-dom';

import { propertyServiceFactory } from '../../services/propertyService';
import { useService } from '../../hooks/useService';

import { AuthContext, useAuthContext } from '../../contexts/authContext';
import { useContext } from 'react';

import * as commentService from '../../services/commentService';


import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { AddComment } from './AddComment/AddComment';
import { propertyReducer } from '../../reducers/propertyReducer';

import { usePropertyContext } from '../../contexts/PropertyContext';


export const PropertyDetails = () => {

  const navigate = useNavigate();

  const propertyService = useService(propertyServiceFactory);

  // const [property, setProperty] = useState({});
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { propertyId } = useParams();
  const { deleteProperty } = usePropertyContext();

  const [propertyData, dispatch] = useReducer(propertyReducer, { comments: [], property: {} });



  useEffect(() => {

    propertyService.getOne(propertyId)
      .then(res => {
        console.log("getOne res:", res);
        dispatch({
          type: "PROPERTY_FETCH",
          payload: {
            property: res,
          },
        })
      })

    commentService.getAll(propertyId)
      .then(res => {
        console.log("getAllComments res:", res);
        dispatch({
          type: "COMMENTS_FETCH",
          payload: {
            comments: res,
          },
        })
      })


  }, [propertyId]);

  const isOwner = propertyData.property._ownerId === userId;

  const onDeleteClick = async () => {

    let result = window.confirm('Are you sure you want to delete this record?')

    if (result) {
      await propertyService.delete(propertyData.property._id);
      deleteProperty(propertyData.property._id);
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
  console.log("useReducer property state", propertyData);
  return (
    <div className={styles["real-estate-details"]}>
      <h1>{propertyData.property.name}</h1>
      <img src={propertyData.property.imageUrl} alt="" />
      <p>Type: {propertyData.property.type}</p>
      <p>Size: {propertyData.property.size}</p>
      <p>Price: ${propertyData.property.price}</p>
      <p>Location: {propertyData.property.location}</p>
      <p>Description: {propertyData.property.description}</p>



      {isOwner && (
        < div className="buttons">
          <Link to={`/catalog/${propertyId}/edit`} className="button">Edit</Link>
          <button className="button" onClick={onDeleteClick}>Delete</button>
        </div>
      )}

      <h2>Comments</h2>
      <ul>
        {propertyData.comments && propertyData.comments.map(x => (
          <li key={x._id}>
            <p>{x.author.email}: {x.comment}</p>
          </li>
        ))}
      </ul>

      {!propertyData.comments?.length && (
        <p>No comments</p>
      )}

      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

    </div>
  );

}