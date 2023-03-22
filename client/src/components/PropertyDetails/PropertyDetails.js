import styles from './PropertyDetails.module.css'

export const PropertyDetails = () => {

return (
    <div className="real-estate-details">
    <h1>New York</h1>
    <p>Type: </p>
    <p>Size: </p>
    <p>Price: </p>
    <p>Location: </p>
    <p>Description: </p>

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