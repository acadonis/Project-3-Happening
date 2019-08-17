import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'

class HappeningEdit extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      error: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleArrayChange = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/happenings/${this.props.match.params.id}`, this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/happenings/${this.props.match.params.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData })
  }

  handleArrayChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value.split(',') }
    this.setState({ formData })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Event Name</label>
              <input
                className="input"
                name="name"
                placeholder="eg: End of Summer Party"
                value={this.state.formData.name || ''}
                onChange={this.handleChange}
              />
              {this.state.errors.name && <small className="help is-danger">{this.state.errors.name}</small>}
            </div>
            <div className="field">
              <label className="venue">Venue</label>
              <input
                className="input"
                name="venue"
                placeholder="The Queen's Head Pup"
                value={this.state.formData.venue || ''}
                onChange={this.handleChange}
              />
              {this.state.errors.venue && <small className="help is-danger">{this.state.errors.venue}</small>}
            </div>
            <div className="field">
              <label className="label">Date</label>
              <input
                className="input"
                name="local_date"
                placeholder="eg: 2019-08-31"
                value={this.state.formData.local_date || ''}
                onChange={this.handleChange}
              />
              {this.state.errors.local_date && <small className="help is-danger">{this.state.errors.local_date}</small>}
            </div>
            <div className="field">
              <label className="label">Time</label>
              <input
                className="input"
                name="local_time"
                placeholder="Must be in 24hour format, eg: 20:30"
                value={this.state.formData.local_time || ''}
                onChange={this.handleChange}
              />
              {this.state.errors.local_time && <small className="help is-danger">{this.state.errors.local_time}</small>}
            </div>
            <div className="field">
              <label className="label">Photo</label>
              <input
                className="input"
                name="photo"
                placeholder="url link eg: http://me.com/myawesomephoto.jpg"
                value={this.state.formData.photo || ''}
                onChange={this.handleChange}
              />
              {this.state.errors.photo && <small className="help is-danger">{this.state.errors.photo}</small>}
            </div>
            <div className="field">
              <label className="label">Description</label>
              <input
                className="textarea"
                name="description"
                placeholder="Come celebrate the end of the summer with like minded people... "
                value={this.state.formData.description || ''}
                onChange={this.handleChange}
              />
              {this.state.errors.description && <small className="help is-danger">{this.state.errors.description}</small>}
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default HappeningEdit
