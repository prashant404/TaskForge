import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordForm from "./pages/ForgotPasswordForm";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/forgot-password" component={ForgotPasswordForm} />
      </Switch>
    </Router>
  );
};

export default App;
