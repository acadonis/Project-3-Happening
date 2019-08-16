import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
//
// import Select from 'react-select'

class Edit extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleArrayChange = this.handleArrayChange.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ formData: res.data }))
      console.log(this.state.formData)
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/users/${this.props.match.params.id}`, this.state.formData
    //   , {
    //   headers: { Authorization: `Bearer ${Auth.getToken()}`}
    // }
    )
      .then(() => this.props.history.push(`/users/${this.props.match.params.id}`))
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

  handleCheckbox(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.checked }
    this.setState({ formData })
  }

  render() {

    const selectedBio = (this.state.formData.bio || [])
    const selectedInterests = (this.state.formData.categories || []).map(cat => ({label: cat, value: cat}))
    const selectedName = (this.state.formData.name || [])
    const selectedGender = (this.state.formData.gender || [])
    const selectedDob = (this.state.formData.birthday || [])
    const selectedCity = (this.state.formData.city || [])
    const selectedPhoto = (this.state.formData.photo || [])
    return (
      <section className="section">
        <div className="container">

          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                name="name"
                placeholder="eg"
                value={selectedName}
                onChange={this.handleChange}
              />
              {this.state.errors.name && <small className="help is-danger">{this.state.errors.name}</small>}
            </div>

            <div className="field">
              <label className="label">Date of birth</label>
              <input
                className="input"
                name="birthday"
                type="date"
                placeholder="eg: 51.515"
                value={selectedDob}
                onChange={this.handleChange}
              />
              {this.state.errors.birthday && <small className="help is-danger">{this.state.errors.birthday}</small>}
            </div>

            <div className="field">
              <label className="label">Gender</label>
              <input
                className="input"
                name="gender"
                placeholder="eg: -0.07"
                value={selectedGender}
                onChange={this.handleChange}
              />
              {this.state.errors.gender && <small className="help is-danger">{this.state.errors.gender}</small>}
            </div>

            <div className="field">
              <label className="label">City</label>
              <input
                className="input"
                name="city"
                placeholder="eg: -0.07"
                value={selectedCity}
                onChange={this.handleChange}
              />
              {this.state.errors.city && <small className="help is-danger">{this.state.errors.city}</small>}
            </div>

            <div className="field">
              <label className="label">Photo</label>
              <input
                className="input"
                name="photo"
                type="url"
                placeholder="eg: -0.07"
                value={selectedPhoto}
                onChange={this.handleChange}
              />
              {this.state.errors.photo && <small className="help is-danger">{this.state.errors.photo}</small>}
            </div>

            <div className="field">
              <label className="label">About me</label>
              <textarea
                className="input"
                name="bio"
                placeholder="eg: -0.07"
                value={selectedBio}
                onChange={this.handleChange}
              />
              {this.state.errors.bio && <small className="help is-danger">{this.state.errors.bio}</small>}
            </div>


            <button className="button">Submit</button>
          </form>

        </div>
      </section>
    )
  }
}

export default Edit
