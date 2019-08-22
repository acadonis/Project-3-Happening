import React from 'react'

const OtherHappeningsBox = ({ happenings, linkToHappening }) => {
  happenings = happenings.slice(0, 4)
  return (
    <div className="box">
      <h3 className="subtitle is-5 has-text-weight-semibold">Other Happenings</h3>
      <div className="columns is-multiline">
        {happenings.map(happening =>
          <div
            key={happening._id}
            className="column is-offset-0 is-half has-text-weight-semibold"
            onClick={() => linkToHappening(happening._id)}
          >
            <a>
              <figure className="image">
                <img src={happening.photo} />
              </figure>
              <p className="is-6 is-transparent">{happening.name}</p>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default OtherHappeningsBox
