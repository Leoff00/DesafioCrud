import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";

import Table from "./components/Table/Table";
import Update from "./components/Table/Update";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/users" component={Table} />
      <Route path="/update/:_id" component={Update} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
