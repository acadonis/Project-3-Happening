import React from 'react'

const SimilarHappeningsBox = ({ happenings }) => {
  console.log(happenings)
  return (
    <div className="box">
      <h3 className="subtitle is-5 has-text-weight-semibold">Similar Happenings</h3>
      <div className="columns is-multiline">
        {happenings.map(happening =>
          <div
            key={happening._id}
            className="column is-offset-0 is-half has-text-weight-semibold"
          >
            <figure className="image">
              <img src={happening.photo} />
            </figure>
            <p className="is-6">{happening.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SimilarHappeningsBox
