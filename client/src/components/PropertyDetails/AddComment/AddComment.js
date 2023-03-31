import { useForm } from "../../../hooks/useForm";



export const AddComment = ({
    onCommentSubmit,
}) => {

    const { values, changeHandler, onSubmit} = useForm({
        comment: '',
    }, onCommentSubmit)

    return (
        <form method="POST" onSubmit={onSubmit}>
        <label>
          Add a comment:
          {/* <input type="text"  /> */}
          {/* value={newComment} onChange={(e) => setNewComment(e.target.value)} */}
          <textarea name="comment" placeholder="Comment......" value={values.comment} onChange={changeHandler} ></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    );

}