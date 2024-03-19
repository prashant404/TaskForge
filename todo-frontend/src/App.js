import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";
import HomePage from "./pages/HomePage";
import TasksPage from "./pages/TasksPage";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/forgot-password" component={ForgotPasswordForm} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tasks" component={TasksPage} />
        <PrivateRoute exact path="/login" component={TasksPage} />
      </Switch>
    </Router>
  );
};

export default App;
