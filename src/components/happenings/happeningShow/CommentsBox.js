import React from 'react'

const CommentsBox = ({ comments, commentInputIsOpen, errors, toggleCommentInput, storeCommentFormData, submitComment}) => {
  // FM: Need to add moment to comments to display comment.createdAt
  return (
    <div className="box">
      <div className="level container">
        <div className="level-left">
          <h3 className="subtitle has-text-weight-semibold">Comments</h3>
        </div>
        <div className="level-right">
          <button
            className="button is-primary"
            onClick={toggleCommentInput}
          >{!commentInputIsOpen ? 'Add Comment' : 'Close'}</button>
        </div>
      </div>
      {commentInputIsOpen && <form
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
      </form>}
      {comments[0] && <div className="box">
        {comments.map((comment, i) => (
          <div key={comment._id}>
            <p className="title has-text-weight-semibold is-5">{comment.user.name}</p>
            <p className="subtitle has-text-weight-semibold is-7">{comment.createdAt.replace(/T|\..*/g, ' ')}</p>
            <p className="is-6">{comment.content}</p>
            {i !== comments.length - 1 && <hr />}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default CommentsBox
