import styles from './PropertyDetails.module.css'

export const PropertyDetails = () => {

return (
    <div className="real-estate-details">
    <h1>{props.name}</h1>
    <p>Type: {props.type}</p>
    <p>Size: {props.size}</p>
    <p>Price: {props.price}</p>
    <p>Location: {props.location}</p>
    <p>Description: {props.description}</p>

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