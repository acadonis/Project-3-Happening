import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div>
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

export default Comments
