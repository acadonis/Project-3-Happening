import React from 'react'

const Comments = ({ comments, commentsAreExpanded }) => {
  let sliceArgs = [0, 3]
  if (commentsAreExpanded) sliceArgs = [0]
  console.log('slice Args', sliceArgs, commentsAreExpanded)
  return (
    <div>
      {comments[0] && <div className="box">
        {comments.slice(...sliceArgs).map((comment, i) => (
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
