import React from 'react'
import axios from 'axios'

import { categories } from '../../lib/Categories'
import Auth from '../../lib/Auth'


import Select from 'react-select'

class HappeningNew extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
  }

  handleChange(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ formData, errors })
  }

  handleSubmit(e) {

    e.preventDefault()

    axios.post('/api/happenings', this.state.formData, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => {
        this.props.history.push('/happenings/')
      })
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleCategoryChange(selectedCategories) {
    const formData = { ...this.state.formData, categories: selectedCategories.map(option => option.value) }
    this.setState({ formData })
  }

  render() {

    const selectedCategories = (this.state.formData.categories || [ ]).map(categories => ({ label: categories, value: categories }))
    return (
      <section className="section">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.name && <small className="help is-danger">{this.state.errors.name}</small>}
            </div>
            <div className="field">
              <label className="label">City</label>
              <div className="control">
                <input
                  className="input"
                  name="city"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.city && <small className="help is-danger">{this.state.errors.city}</small>}
            </div>
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input
                  className="input"
                  name="local_date"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.local_date && <small className="help is-danger">{this.state.errors.local_date}</small>}
            </div>
            <div className="field">
              <label className="label">Time</label>
              <div className="control">
                <input
                  className="input"
                  name="local_time"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.local_time && <small className="help is-danger">{this.state.errors.local_time}</small>}
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  name="description"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.description && <small className="help is-danger">{this.state.errors.description}</small>}
            </div>
            <div className="field">
              <label className="label">Category</label>
              <Select
                value= {selectedCategories}
                options={categories}
                isMulti
                onChange={this.handleCategoryChange}
              />
              {this.state.errors.categories && <small className="help is-danger">{this.state.errors.categories}</small>}
            </div>
            <div className="field">
              <label className="label">Photo</label>
              <div className="control">
                <input
                  className="input"
                  name="photo"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.photo && <small className="help is-danger">{this.state.errors.photo}</small>}
            </div>
            <div className="field">
              <label className="label">Venue</label>
              <div className="control">
                <input
                  className="input"
                  name="venue"
                  placeholder="eg"
                  onChange={this.handleChange}
                />
              </div>
              {this.state.errors.venue && <small className="help is-danger">{this.state.errors.venue}</small>}
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}

export default HappeningNew
