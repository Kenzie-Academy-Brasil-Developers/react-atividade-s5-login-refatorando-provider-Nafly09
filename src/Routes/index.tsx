import { Route, Switch } from "react-router";
import { Login } from "../Pages/Home";
import { Dashboard } from "../Pages/Dashboard";
import { SignUp } from "../Pages/SignIn";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
}

export default Routes;
