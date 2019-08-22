import React from 'react'

const CategoryIndexCard = ({ categoryName }) => {
  return (
    <div className="column is-half has-text-weight-semibold">
      <p className="card has-text-centered">{categoryName}</p>
    </div>
  )
}

export default CategoryIndexCard
