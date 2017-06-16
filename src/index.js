import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './App.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard'

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loggedIn: false
    }
  }
  render() {
    return (
      <Router history="">
        <div className="App">
          <Nav/>
          <Route exact path="/" component={Landing}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
    <App/>
  , document.getElementById('root'));
registerServiceWorker();

export default App;
