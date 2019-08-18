import React from 'react'

const CommentsBox = ({ comments }) => {
  console.log(comments)
  return (
    <div className="box">
      <h3 className="subtitle has-text-weight-semibold">Comments</h3>
      <div className="box">
        {comments.map(comment => (
          <div key={comment._id}>
            <p className="has-text-weight-semibold subtitle is-6">{comment.user.name}</p>
            <p className="is-6">{comment.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentsBox
