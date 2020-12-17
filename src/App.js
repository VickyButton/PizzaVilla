import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import About from './components/About'
import Home from './components/Home'
import Menu from './components/Menu'

window.siteInfo = require('./restaurant-information.json');
window.primary = window.siteInfo.colors.primary || 'rgb(46,54,60)';
window.secondary = window.siteInfo.colors.secondary || 'rgb(231,223,213)';

function App() {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/about' component={About}/>
    </Router>
  );
}

export default App;