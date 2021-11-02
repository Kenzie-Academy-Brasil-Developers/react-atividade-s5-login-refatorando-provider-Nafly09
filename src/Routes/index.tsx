import { Route, Switch } from "react-router";
import { Login } from "../Pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/dashboard"></Route>
    </Switch>
  );
}

export default Routes;
