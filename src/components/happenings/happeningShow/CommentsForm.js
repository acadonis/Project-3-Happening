import React from 'react'

const CommentsForm = ({ errors, submitComment, storeCommentFormData }) => {
  return (
    <form
      onSubmit={submitComment}
    >
      <div className="field">
        <div className="control">
          <textarea
            className="textarea"
            name="content"
            placeholder="Enter comment"
            onChange={storeCommentFormData}
          />
          {errors['comments.0.content'] && <small className="help is-danger">{errors['comments.0.content']}</small>}
          <br />
          <button className="button is-light">Submit</button>
        </div>
      </div>
      <hr />
    </form>
  )
}

export default CommentsForm
