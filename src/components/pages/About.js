import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LazyHero from 'react-lazy-hero'

class About extends React.Component {

  constructor() {
    super()

    this.state = {}
  }

  // getFollowings() {
  //   return (
  //     <div className="columns is-multiline">
  //       {!this.state.user.following[0] && <h2 className="subtitle is-4">Not following</h2>}
  //       {this.state.user.following[0] && this.state.user.following.map(follow =>
  //         <Link className="column is-offset-0 is-one-fifth has-text-centered"
  //           key={follow._id}
  //           to={`/users/${follow._id}`}
  //         >
  //           <div>
  //             <figure className="image is-128x128  has-image-centered">
  //               <img className="is-rounded" src={follow.photo} />
  //             </figure>
  //             <p className="is-6 has-text-weight-semibold">{follow.name}</p>
  //           </div>
  //         </Link>
  //       )}
  //
  //     </div>
  //   )
  // }

  // getUser() {
  //   axios.get(`/api/users/${this.props.match.params.id}`)
  //     .then(res => this.setState({ user: res.data }))
  // }
  //
  // componentDidMount() {
  //   this.getUser()
  // }

  render() {


    return (
      <div>
        <LazyHero ransitionTimingFunction="ease-in-out" isFixed={true} imageSrc="https://i.imgur.com/OMLj28G.jpg" minHeight="45vh" opacity={0.8}>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <figure className="image is-128x128 has-image-centered">
                    <img className="is-rounded" src="https://i.imgur.com/edNe43L.png" />
                  </figure>
                  <h1 className="subtitle">Fearchar</h1>
                </div>
                <div className="column">
                  <figure className="image is-128x128 has-image-centered">
                    <img className="is-rounded" src="https://i.imgur.com/iwqp1nr.png" />
                  </figure>
                  <h1 className="subtitle">Alexis</h1>
                </div>
                <div className="column">
                  <figure className="image is-128x128 has-image-centered">
                    <img className="is-rounded" src="https://i.imgur.com/YO0YdZR.jpg?1" />
                  </figure>
                  <h1 className="subtitle">Lana</h1>
                </div>
                <div className="column">
                  <figure className="image is-128x128 has-image-centered">
                    <img className="is-rounded" src="https://i.imgur.com/rC7YbhX.png" />
                  </figure>
                  <h1 className="subtitle">Matthew</h1>
                </div>
              </div>
            </div>
          </section>
        </LazyHero>
        <div className="container">
          <div className="section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    )
  }

}


export default About
