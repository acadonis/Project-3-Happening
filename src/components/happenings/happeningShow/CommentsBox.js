import React from 'react'

const CommentsBox = ({ comments, openCommentInput, commentInputIsOpen, storeFormData}) => {
  console.log(comments)
  // FM: Need to add moment to comments to display comment.createdAt
  return (
    <div className="box">
      <div className="columns">
        <div className="column">
          <h3 className="subtitle has-text-weight-semibold">Comments</h3>
        </div>
        <div className="column is-offset-7">
          <button
            className="button is-primary"
            onClick={openCommentInput}
          >Add Comment</button>
        </div>
      </div>
      {commentInputIsOpen && <form>
        <div className="field">
          <div className="control">
            <textarea
              className="textarea"
              name="content"
              placeholder="Enter comment"
              onChange={storeFormData}
            />
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
