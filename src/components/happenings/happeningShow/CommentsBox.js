import React from 'react'

import CommentsForm from './CommentsForm'
import Comments from './Comments'

const CommentsBox = ({ comments, commentsAreExpanded, commentFormIsOpen, errors, toggleComments, toggleCommentForm, storeCommentFormData, submitComment}) => {
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
            onClick={toggleCommentForm}
          >{!commentFormIsOpen ? 'Add Comment' : 'Close'}</button>
        </div>
      </div>
      {commentFormIsOpen && <CommentsForm
        {...{
          errors,
          submitComment,
          storeCommentFormData
        }}
      />}
      <Comments {...{comments, commentsAreExpanded}} />
      <br />
      <div className="level">
        <div className="level-left"></div>
        {comments.length > 3 && <button
          className="button level-right is-primary"
          onClick={toggleComments}
        >{!commentsAreExpanded ? 'See All' : 'Close'}</button>}
      </div>
    </div>
  )
}

export default CommentsBox
