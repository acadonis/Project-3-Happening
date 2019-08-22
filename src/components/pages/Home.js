import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LazyHero from 'react-lazy-hero'
import Promise from 'bluebird'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'


class Homepage extends React.Component {

  constructor() {
    super()

    this.state = {}
    this.getMainEvent = this.getMainEvent.bind(this)
    this.getAttendees = this.getAttendees.bind(this)
  }

  componentDidMount(){
    Promise.props({
      happenings: axios.get('/api/happenings/').then(res => res.data),
      users: axios.get('/api/users/').then(res => res.data)
    })
      .then(data => this.setState(data))

  }

  getMainEvent () {
    const fiveHappenings = [ ...this.state.happenings.slice(1, 5) ]

    return (
      <div className="columns is-multiline">
        {!this.state.happenings[0] && <h2 className="subtitle is-6">No events</h2>}
        {this.state.happenings[0] && fiveHappenings.map(hap =>
          <Link className="column"
            key={hap._id}
            to={`/happenings/${hap._id}`}
          >
            <div>
              <figure className="image">
                <img src={hap.photo} />
              </figure>
              <p className="is-6 is-transparent">{hap.name}</p>
            </div>
          </Link>
        )}

      </div>
    )
  }

  getAttendees() {
    const showAttandees = this.state.happenings[0].attendees.slice(0, 5)
    console.log(showAttandees)
    return (
      <div className="columns is-multiline">
        {!this.state.happenings[0].attendees && <h2 className="subtitle is-4">Not following</h2>}
        {this.state.happenings[0].attendees && showAttandees.map(att =>
          <Link className="column is-offset-0 is-one-fifth has-text-centered"
            key={att._id}
            to={`/users/${att._id}`}
          >
            <div>
              <figure className="image is-64x64 has-image-centered">
                <img className="is-rounded" src={att.photo} />
              </figure>
              <p className="is-6 has-text-weight-semibold">{att.name}</p>
            </div>
          </Link>
        )}

      </div>
    )
  }

  render() {
    
    console.log(this.state.users)
    if(!this.state.happenings) return <h1>Loading...</h1>
    return (
      <div>

        <LazyHero ransitionTimingFunction="ease-in-out" isFixed={true} imageSrc="https://i.imgur.com/OMLj28G.jpg" minHeight="45vh" opacity={0.7}>
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column" align-items="center" >
                <h1 className="title is-1">Happening</h1>
              </div>
              <div className="column">
                <div className="section has-text-left">
                  <div>
                    <p>Find events. Meet new friends. Go to the events with your new friends.</p>
                    <br></br>
                    <p>It&apos;s all Happening. </p>
                  </div>
                </div>
                <div className="section">
                  <Link
                    className="button is-primary is-outlined"
                    to={'/register'}
                  >Sign up<
                  /Link>
                </div>
              </div>
            </div>
          </div>
        </LazyHero>

        <div className="container">
          <div className="section">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
              <div className="section container">
                <div className="columns">
                  <div className="column is-half">
                    <Link
                      to={`/happenings/${this.state.happenings[0]._id}`}
                    >
                      <figure className="image has-image-centered image-user" style={{ backgroundImage: `url(${this.state.happenings[0].photo})` }} />
                      <div className="section">
                        <h1 className="title is-6">{this.state.happenings[0].name}</h1>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-half">
                    <p>{this.state.happenings[0].description}</p>
                    <br />
                    <div className="container">
                      <h1 className="subtitle is-4">Attendees: </h1>
                    </div>
                    <br />
                    <div className="container">
                      {this.getAttendees()}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="columns">
                  <div className="column is-half">
                    <Link
                      to={`/happenings/${this.state.happenings[1]._id}`}
                    >
                      <figure className="image has-image-centered image-user" style={{ backgroundImage: `url(${this.state.happenings[1].photo})` }} />
                      <div className="section">
                        <h1 className="title is-6">{this.state.happenings[1].name}</h1>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-half">
                    <p>{this.state.happenings[1].description}</p>
                    <br />
                    <div className="container">
                      <h1 className="subtitle is-4">Attendees: </h1>
                    </div>
                    <br />
                    <div className="container">
                      {this.getAttendees()}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <img src="" />
                <div className="columns">
                  <div className="column is-half">
                    <Link
                      to={`/happenings/${this.state.happenings[2]._id}`}
                    >
                      <figure className="image has-image-centered image-user" style={{ backgroundImage: `url(${this.state.happenings[2].photo})` }} />
                      <div className="section">
                        <h1 className="title is-6">{this.state.happenings[2].name}</h1>
                      </div>
                    </Link>
                  </div>
                  <div className="column is-half">
                    <p>{this.state.happenings[2].description}</p>
                    <br />
                    <div className="container">
                      <h1 className="subtitle is-4">Attendees: </h1>
                    </div>
                    <br />
                    <div className="container">
                      {this.getAttendees()}
                    </div>
                  </div>
                </div>
              </div>

            </Carousel>

          </div>
        </div>

        <LazyHero ransitionTimingFunction="ease-in-out" isFixed={true} imageSrc="https://i.imgur.com/OMLj28G.jpg" minHeight="10vh" >
          <Link
            className="button is-primary is-outlined"
            to={'/happenings'}
          >Browse all happenings<
          /Link>
        </LazyHero>

        <div className="container">
          <div className="section">
            <div className="columns is-multiline">
              {this.getMainEvent()}
            </div>
          </div>
        </div>

        <LazyHero ransitionTimingFunction="ease-in-out" isFixed={true} imageSrc="https://i.imgur.com/OMLj28G.jpg" minHeight="10vh">
          <div className="columns is-offset-0">
            <div className="column">
              <Link
                className="button is-primary is-outlined"
                to={'/happenings'}
              >Find happening<
              /Link>
            </div>
            <div className="column">
              <Link
                className="button is-primary is-outlined"
                to={'/happenings/new'}
              >Create happening<
              /Link>
            </div>
          </div>

        </LazyHero>

        <div className="container">
          <div className="section">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </div>
        </div>

      </div>

    )
  }
}




export default Homepage
