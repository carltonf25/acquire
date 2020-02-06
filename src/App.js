import React, { useState, useEffect } from 'react';
import mockTargetData from './mockTargetData.js';
import './App.scss';
// Context
import TargetContext from './TargetContext';
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Components
import TargetList from './components/TargetList';
import TargetDetails from './components/TargetDetails';
import TargetBuilder from './components/TargetBuilder';
import Nav from './components/Nav';

const App = () => {
  let [targets, setTargets] = useState([]);

  useEffect(() => {
    setTargets({ mockTargetData });
  }, []);

  return (
    <TargetContext.Provider value={targets}>
      <Router>
        <div className="App">
          <Nav />
          <div className="route-container">
            <Switch>
              <Route exact path="/targets">
                <TargetList />
              </Route>
              <Route path="/targets/:id/">
                <TargetDetails />
              </Route>
              <Route path="/create">
                <TargetBuilder />
              </Route>
              <Route path="/edit">
                <TargetBuilder />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </TargetContext.Provider>
  );
};

export default App;
