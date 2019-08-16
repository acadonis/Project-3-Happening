import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {

  constructor() {
    super()
    this.state = {
      navbarOpen: false
    }
    this.logout = this.logout.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  logout() {
    Auth.removeToken()
    this.props.history.push('/')
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen})
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false})
    }
  }

  render() {
    return (
      <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <h1 className="title">Happening</h1>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}
        >
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Happenings
              </div>
              <div className="navbar-dropdown">
                <Link to="/happenings" className="navbar-item">
                  Browse Happenings
                </Link>
                <Link to="/happenings/new" className="navbar-item">
                    Create A Happnening
                </Link>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                Users
              </div>
              <div className="navbar-dropdown">
                <Link to="/users" className="navbar-item">
                    Browse Users
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!Auth.isAuthenticated() &&
                  <Link to="/register" className="button is-info">
                    <strong>Sign up</strong>
                  </Link>
                }
                {!Auth.isAuthenticated() &&
                  <Link  to="/login" className="button is-info">
                    Log in
                  </Link>
                }
                {Auth.isAuthenticated() &&
                  <Link to={`/user/${Auth.getCurrentUser()}/edit`} className="button is-dark">
                    Account
                  </Link>
                }
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)