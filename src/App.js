import React, { useState, useEffect } from 'react';
import mockTargetData from './mockTargetData.js';
import './App.scss';
// Context
import AppContext from './AppContext';
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Toast Messages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import TargetList from './components/TargetList';
import TargetDetails from './components/TargetDetails';
import TargetBuilder from './components/TargetBuilder';
import Nav from './components/Nav';

const App = () => {
  let [targets, setTargets] = useState(mockTargetData);

  // configure toast messages
  toast.configure({
    autoClose: 5000,
    draggable: false,
  });

  let toastMessage = message => {
    toast.success(message);
  };

  // set app context containing targets, function updating targets,
  // and toast message function
  let appContext = {
    targets,
    setTargets,
    toastMessage,
  };

  useEffect(() => {
    setTargets(targets);
  }, [targets]);
  return (
    <AppContext.Provider value={appContext}>
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
    </AppContext.Provider>
  );
};

export default App;
