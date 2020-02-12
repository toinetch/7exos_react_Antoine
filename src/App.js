import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Exo1 from './Exo1';
import Exo2 from './Exo2';
import Exo3 from './Exo3';
import Exo4 from './Exo4';
import Exo5 from './Exo5';
import Exo6 from './Exo6';
import Exo7 from './Exo7';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App-header'>
        <ul id='navbar'>
          <li><Link to='Exo1'>Exo 1</Link></li>
          <li><Link to='Exo2'>Exo 2</Link></li>
          <li><Link to='Exo3'>Exo 3</Link></li>
          <li><Link to='Exo4'>Exo 4</Link></li>
          <li><Link to='Exo5'>Exo 5</Link></li>
          <li><Link to='Exo6'>Exo 6</Link></li>
          <li><Link to='Exo7'>Exo 7</Link></li>
        </ul>
        <Switch>
          <Route path='/Exo1'><Exo1 /></Route>
          <Route path='/Exo2'><Exo2 /></Route>
          <Route path='/Exo3'><Exo3 /></Route>
          <Route path='/Exo4'><Exo4 /></Route>
          <Route path='/Exo5'><Exo5 /></Route>
          <Route path='/Exo6'><Exo6 /></Route>
          <Route path='/Exo7'><Exo7 /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;