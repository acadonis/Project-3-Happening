import React from 'react'

import CategoryCard from '../common/CategoryCard'

const MainBox = ({ photo, name, categories, description}) => {
  return (
    <div className="box">
      <figure className="image is-2by1">
        <img className="has-ratio" src={photo} alt={name} />
      </figure>
      <hr />
      <div className="container">
        <div className="columns is-multiline is-variable is-4">
          {' ' && categories.map(category =>
            <CategoryCard
              key={category}
              categoryName={category}
            />
          )}
        </div>
      </div>
      <hr />
      <h3 className="subtitle has-text-weight-semibold">Description</h3>
      <p>{description}</p>
    </div>
  )
}

export default MainBox
