import React from 'react'

const CommentsBox = ({ comments }) => {
  console.log(comments)
  return (
    <div className="box">
      <h3 className="subtitle has-text-weight-semibold">Comments</h3>
      {comments[0] && <div className="box">
        {comments.map((comment, i) => (
          <div key={comment._id}>
            <p className="title has-text-weight-semibold is-5">{comment.user.name}</p>
            <p className="subtitle has-text-weight-semibold is-7">{comment.createdAt.replace(/T|\..*/g, '    ')}</p>
            <p className="is-6">{comment.content}</p>
            {i !== comments.length - 1 ? <hr /> : ''}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default CommentsBox
