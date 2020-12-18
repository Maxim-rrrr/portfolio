import './css/style.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, About, Skills, MyWork, Contact } from './pages/index'

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/' component = { Home } />

        <Route exact path='/about' component={ About } />

        <Route exact path='/skills' component={ Skills } />

        <Route exact path='/my-work' component={ MyWork } />

        <Route exact path='/contact' component={ Contact } />

      </Switch>
    </Router>
  );
}

export default App;
