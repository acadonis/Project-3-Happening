import React from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

import Auth from '../../lib/Auth'
// import Comment from '../common/Comment'

class Show extends React.Component {

  constructor() {
    super()
    this.state = {
      // formData: {rating: 1, content: ""}
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({formData})
  }

  // handleSubmit(e) {
  //   e.preventDefault()
  // axios.post(`/api/users/${this.props.match.params.id}/comments`, this.state.formData, {
  //   headers: {Authorization: `Bearer ${Auth.getToken()}`}
  // })
  //   .then(res => this.setState({user: res.data, formData: {rating: 1, content:""}}))
  // }

  // handleDelete (e) {
  //   console.log(e.target.id)
  //   axios.delete(`http://localhost:4000/users/${this.props.match.params.id}/comments/${e.target.id}`, {
  //     headers: {Authorization: `Bearer ${Auth.getToken()}`}
  //   })
  //     .then(res => this.setState({user: res.data}))
  // }

  render() {
    console.log(this.props.match.params.id)
    return (
      <section className="section">
        <div className="container">

          {!this.state.user && <h2 className="title is-2">Loading...</h2>}

          {this.state.user && <div>
            <header>
              <div className="columns">
                <div className="column">
                  <h1 className="title is-2">{this.state.user.name}</h1>
                  <h2 className="title is-4">{this.state.user.city}</h2>
                </div>
                <div className="column">
                  <div className="buttons">
                    <Link
                      className="button"
                      to={`/users/${this.state.user._id}/edit`}
                    >Edit</Link>

                    <button className="button is-danger">Delete</button>
                  </div>
                </div>
              </div>

            </header>
            <hr />

            <div className="columns">
              <div className="column">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={this.state.user.photo} />
                </figure>
              </div>

              <div className="column">
                <h2>About me:</h2>
                <p>{this.state.user.bio}</p>




              </div>
            </div>
          </div>}

        </div>
      </section>
    )
  }
}

export default Show
