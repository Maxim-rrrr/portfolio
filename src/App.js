import './css/style.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import { Home, About, Skills, MyWork, Contact } from './pages/index'

import { Nav } from './components/Nav'

const history = createBrowserHistory()

function App() {
  return (
    <>
      <Nav/>

      <Router history = { history }>
        <Switch>

          <Route exact path='/' component = { Home } />

          <Route exact path='/about' component={ About } />

          <Route exact path='/skills' component={ Skills } />

          <Route exact path='/my-work' component={ MyWork } />

          <Route exact path='/contact' component={ Contact } />

        </Switch>
      </Router>
    </>
  );
}

export default App;
