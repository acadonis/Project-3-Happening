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
    this.handleDelete = this.handleDelete.bind(this)
    this.getHappeningsById = this.getHappeningsById.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .then(() => {
        axios.get('/api/happenings')
          .then(res => this.setState({ happenings: this.getHappeningsById(res.data) }))
          .then(() => {
            this.state.user.happenings.push(this.state.happenings[0])
          })
      })
  }

  handleChange(e) {
    const formData = {...this.state.formData, [e.target.name]: e.target.value}
    this.setState({formData})
  }
  handleDelete () {
    const token = Auth.getToken()
    axios.delete(`/api/users/${this.props.match.params.id}`, {
      headers: { 'Authorization': `Bearer ${token}`}}
    )
      .then(() => this.props.history.push('/'))
  }

  getHappeningsById(happenings) {
    const listOfHappenings =[]
    for(let i = 0; i<happenings.length; i++) {
      const happening = happenings[i]
      console.log(this.state.user.happenings)
      if(this.state.user.happenings.includes(happening._id)) {
        listOfHappenings.push(1)
      }
    }
    // console.log(listOfHappenings)
    return listOfHappenings
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
    console.log()
    return (
      <section className="section">
        <div className="container">

          {!this.state.user && <h2 className="title is-2">Loading...</h2>}

          {this.state.user && <div>
            <div className="columns">
              <div className="column">
                <figure className="image" style={{ backgroundImage: `url(${this.state.user.photo})` }}/>
              </div>
              <div className="column">
                <h1 className="title is-2">{this.state.user.name}</h1>
                <h2 className="title is-4">{this.state.user.city}</h2>
                <hr />
                <h2 className="subtitle is-4" >About me:</h2>
                <p>{this.state.user.bio}</p>
              </div>
            </div>
            {Auth.isAuthenticated() && <div className="buttons">
              <Link
                className="button"
                to={`/users/${this.state.user._id}/edit`}
              >Edit</Link>

              <button onClick={this.handleDelete} className="button is-danger">Delete</button>
            </div>}
            <hr />
            <div className="container">
              {this.state.user.categories.map(cat =>
                <span key={cat}
                  className={`tag is-${cat.split(' ')[0].toLowerCase()}`}
                >{cat}</span>
              )}
            </div>
            <hr />
            <div className="container">

            </div>
          </div>}

        </div>
      </section>
    )
  }
}

export default Show
