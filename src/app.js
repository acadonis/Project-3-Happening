import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'

import 'react-toastify/dist/ReactToastify.css'
import 'bulma'
import './style.scss'

import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/common/Navbar'
import SecureRoute from './components/common/SecureRoute'


import HappeningIndex from './components/happenings/happeningIndex/HappeningIndex'

import HappeningShow from './components/happenings/happeningShow/HappeningShow'



import HappeningNew from './components/happenings/HappeningNew'


import HappeningEdit from './components/happenings/HappeningEdit'
import HappeningSearch from './components/happenings/happeningsearch/HappeningSearch'
import UserIndex from './components/users/UserIndex'



import UserShow from './components/users/UserShow'
import FollowingAll from './components/users/FollowingAll'
import UserEdit from './components/users/UserEdit'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Home from './components/pages/Home'


import 'react-toastify/dist/ReactToastify.css'
import 'bulma'
import './style.scss'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar />
        <ToastContainer position="bottom-right" hideProgressBar={true} />
        <Switch>
          <SecureRoute path="/happenings/new" component={HappeningNew} />
          <Route path="/happenings/search" component={HappeningSearch} />
          <SecureRoute path="/happenings/:id/edit" component={HappeningEdit} />
          <Route path="/happenings/:id" component={HappeningShow} />
          <Route path="/happenings" component={HappeningIndex} />
          <SecureRoute path="/users/:id/edit" component={UserEdit} />
          <SecureRoute path="/users/:id/followingAll" component={FollowingAll} />
          <Route path="/users/:id" component={UserShow} />
          <Route path="/users" component={UserIndex} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
