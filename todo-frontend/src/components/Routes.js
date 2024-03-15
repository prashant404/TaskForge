// Routes.js

import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Login from './Login';
import Registration from './Registration';
import Home from './Home';

const Routes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Registration} />
        <Route path="/" component={user ? Home : Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
