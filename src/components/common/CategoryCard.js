import React from 'react'

const CatagoryCard = ({ categoryName }) => {
  return (
    <div
      className="column is-one-fifth has-text-weight-semibold"
    >
      <p className="card has-text-centered">{categoryName}</p>
    </div>
  )
}

export default CatagoryCard
