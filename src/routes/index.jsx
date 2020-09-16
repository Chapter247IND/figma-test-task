import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

// Pages
const Main = React.lazy(() => import("../Component/Registration"));
const ChildComponent = React.lazy(() =>
  import("../Component/RegistrationChild")
);
const Routes = [
  {
    exact: true,
    path: "/RegistrationForm",
    name: "MainPage",
    component: Main,
  },
  {
    exact: true,
    path: "/RegistrationChild",
    name: "Child",
    component: ChildComponent,
  },
  {
    exact: true,
    path: "/",
    name: "Main",
    component: Main,
  },
];

class AppRoutes extends Component {
  componentDidMount() {}
  render() {
    return (
     
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
               
                  <Route
                    path="/RegistrationChild"
                    component={ChildComponent}
                  ></Route>
               
              </>
            );
          })}
        </Switch>
     
    );
  }
}
export default withRouter(AppRoutes);
