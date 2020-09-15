import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

// Pages
const Main = React.lazy(() => import("../Component/Registration"));
const Routes = [
  {
    exact: false,
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    exact: true,
    path: "/RegistrationForm/#number",
    name: "MainPage",
    component: Main,
  },
];

class AppRoutes extends Component {
  componentDidMount() {}
  render() {
    return (
      <>
        <Switch>
          {Routes.map((route, index) => {
            return (
              <>
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  name={route.name}
                  render={(props) => (
                    <route.component {...props} {...this.props} />
                  )}
                />
                <Route exact path="/" component={Main}>
                  {" "}
                  <Redirect to="/Registrationform/#1" />{" "}
                </Route>
              </>
            );
          })}
        </Switch>
      </>
    );
  }
}
export default withRouter(AppRoutes);
