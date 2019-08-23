import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Auth from '../../../lib/Auth'

const Comments = ({ comments, commentsAreExpanded, deleteComment }) => {
  let sliceArgs = [0, 3]
  if (commentsAreExpanded) sliceArgs = [0]
  return (
    <div>
      {comments[0] && <div className="box">
        {comments.slice(...sliceArgs).map((comment, i) => (
          <div key={comment._id}>
            <div className="level">
              <p className="level-left title has-text-weight-semibold is-5">
                <Link to={`/users/${comment.user._id}`}>
                  {comment.user.name}
                </Link>
              </p>
              {Auth.isCurrentUser(comment.user) && <button
                className="level-right delete"
                value={`${comment._id}`}
                onClick={deleteComment}
              ></button>}
            </div>
            <p className="subtitle has-text-weight-semibold is-7">{`${moment(comment.createdAt).format('h:mm a')} ${moment(comment.createdAt).format('dddd, MMMM Do')}`}</p>
            <p className="is-6">{comment.content}</p>
            {i !== comments.length - 1 && <hr />}
          </div>
        ))}
      </div>}
    </div>
  )
}

export default Comments
