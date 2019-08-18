import React from 'react'

import CatagoryCard from '../common/CategoryCard'

const MainBox = ({ photo, name, categories, description}) => {
  return (
    <div className="box section">
      <figure className="image is-2by1">
        <img className="has-ratio" src={photo} alt={name} />
      </figure>
      <hr />
      <div className="container">
        <div className="columns is-multiline is-variable is-4">
          {' ' && categories.map(category =>
            <CatagoryCard
              key={category}
              categoryName={category}
            />
          )}
        </div>
      </div>
      <hr />
      <h3 className="subtitle">Description</h3>
      <p>{description}</p>
    </div>
  )
}

export default MainBox
