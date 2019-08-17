import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
// import SecureRoute from './components/common/SecureRoute'
// import Navbar from './components/common/Navbar'

// import HappeningIndex from './components/happenings/HappeningIndex'

import HappeningShow from './components/happenings/HappeningShow'
import HappeningCard from './components/happenings/HappeningCard'

// import HappeningEdit from './components/happenings/HappeningEdit'
// import HappeningNew from './components/happenings/HappeningNew'
import UserIndex from './components/users/UserIndex'


import UserShow from './components/users/UserShow'
import UserEdit from './components/users/UserEdit'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

// import '@fortawesome/fontawesome-free/js/all.js'
import 'react-toastify/dist/ReactToastify.css'
import 'bulma'
import './style.scss'

class App extends React.Component {

  render() {
    return (
<<<<<<< HEAD
      <div>
        <HappeningCard
          name="jo" local_date="je" local_time="ja" photo="js" venue="jn" description="jp"
        />
        <HashRouter>
          <Navbar />
          <ToastContainer position="bottom-right" hideProgressBar={true} />
          <Switch>

            <Route path="/happenings/:id" component={HappeningShow} />
            <Route path="/users/:id/edit" component={UserEdit} />
            <Route path="/users/:id" component={UserShow} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />

          </Switch>
        </HashRouter>
      </div>
=======
      <HashRouter>
        <Navbar />
        <ToastContainer position="bottom-right" hideProgressBar={true} />
        <Switch>

          <Route path="/happenings/:id" component={HappeningShow} />
          <Route path="/users/:id/edit" component={UserEdit} />
          <Route path="/users/:id" component={UserShow} />
          <Route path="/users" component={UserIndex} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

        </Switch>
      </HashRouter>
>>>>>>> c414a7a624794a405528fc676d7e8de01223807d
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
