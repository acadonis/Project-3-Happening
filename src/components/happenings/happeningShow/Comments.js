import React from 'react'
import { Link } from 'react-router-dom'

const Comments = ({ comments, commentsAreExpanded }) => {
  let sliceArgs = [0, 3]
  if (commentsAreExpanded) sliceArgs = [0]
  return (
    <div>
      {comments[0] && <div className="box">
        {comments.slice(...sliceArgs).map((comment, i) => (
          <div key={comment._id}>
            <p className="title has-text-weight-semibold is-5">
              <Link to={`/users/${comment.user._id}`}>
                {comment.user.name}
              </Link>
            </p>
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
