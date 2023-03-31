

export const AddComment = () => {

    return (
        <form >
        <label>
          Add a comment:
          {/* <input type="text"  /> */}
          {/* value={newComment} onChange={(e) => setNewComment(e.target.value)} */}
          <textarea name="comment" placeholder="Comment......" value={'Hello'} onChange={() => console.log('')} ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );

}