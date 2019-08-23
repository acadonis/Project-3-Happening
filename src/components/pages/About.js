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
                  <a href="https://github.com/Fearchar">
                    <figure className="image is-128x128 has-image-centered">
                      <img className="is-rounded" src="https://i.imgur.com/fheb1Qv.png" />
                    </figure>
                    <h1 className="subtitle">Fearchar</h1>
                  </a>
                </div>
                <div className="column">
                  <a href="https://github.com/acadonis">
                    <figure className="image is-128x128 has-image-centered">
                      <img className="is-rounded" src="https://i.imgur.com/iwqp1nr.png" />
                    </figure>
                    <h1 className="subtitle">Alexis</h1>
                  </a>
                </div>
                <div className="column">
                  <a href="https://github.com/DucanKir">
                    <figure className="image is-128x128 has-image-centered">
                      <img className="is-rounded" src="https://i.imgur.com/xesuYxK.png" />
                    </figure>
                    <h1 className="subtitle">Lana</h1>
                  </a>
                </div>
                <div className="column">
                  <a href="https://github.com/mtcolvard">
                    <figure className="image is-128x128 has-image-centered">
                      <img className="is-rounded" src="https://i.imgur.com/rC7YbhX.png" />
                    </figure>
                    <h1 className="subtitle">Matthew</h1>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </LazyHero>
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column has-text-centered">
              </div>
              <div className="column has-text-centered">
              </div>
              <div className="column has-text-centered">
                <i className="fab fa-react fa-5x"></i>
              </div>
              <div className="column has-text-centered">
                <i className="fab fa-js-square fa-5x"></i>
              </div>
              <div className="column has-text-centered">
                <i className="fab fa-node-js  fa-5x"></i>
              </div>
              <div className="column has-text-centered">
                <i className="fab fa-html5 fa-5x"></i>
              </div>
              <div className="column has-text-centered">
                <i className="fab fa-css3-alt fa-5x"></i>
              </div>
              <div className="column has-text-centered">
                <i className="fab fa-sass fa-5x"></i>
              </div>
              <div className="column has-text-centered">
              </div>
              <div className="column has-text-centered">
              </div>
            </div>
            <div className="container">
              <div className="section">
                <h1 className="title is-4">About</h1>
                <p><span className="title is-6">HAPPENING</span> is a project created by <a href="https://github.com/Fearchar">Fearchar</a>, <a href="https://github.com/DucanKir">Lana</a>, <a href="https://github.com/acadonis">Alexis</a> and <a href="https://github.com/mtcolvard">Matthew</a> on the General Assembly Sofware Engineering Immersive course in London.</p>
                <br />
                <p>Tasked with creating a full-stack web application, we used</p>
                <br />
                <ul>
                  <li> - React</li>
                  <li> - Javascript</li>
                  <li> - Node.js</li>
                  <li> - HTML5</li>
                  <li> - CSS3</li>
                  <li> - Sass</li>
                  <li> - Bulma</li>
                  <li> - Express</li>
                  <li> - MongoDB</li>
                </ul>
                <br />
                <p>to build a events website which allows users to find and attend events and people to attend them with.</p>
                <br />
                <p>Over the 7 day timeframe we scoped the concept for the project and divided up workflow using Trello, allowing us to work collaboratively in the most efficient way. We then built the application to MVP before expanding it with more advanced features.</p>
                <br />
                <p>We learned to work effectively as a team, and how to manage version control using Git and GitHub. The project improved our understanding of the development of full-stack web applications and the underlying technologies used to build these.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


export default About
