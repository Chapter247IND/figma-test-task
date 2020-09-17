import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// Pages
const Main = React.lazy(() => import('../Component/Registration'));
const ChildComponent = React.lazy(() =>
  import('../Component/RegistrationChild')
);

const Routes = [
  {
    exact: true,
    path: '/Registrationform',
    name: 'MainPage',
    component: Main,
  },
  {
    exact: true,
    path: '/RegistrationChild',
    name: 'Child',
    component: ChildComponent,
  },
  {
    exact: true,
    path: '/',
    name: 'Main',
    component: Main,
  },
];

const AppRoutes = (props) => {
  // state object to store user information
  const [infoData, setinfoData] = React.useState({
    numValue: '',
    name: 'Joe Doe',
    email: '',
    contact: '',
    country: 'India',
    duration: 'Daily',
    password: '',
    cardNumber: '',
    expireDate: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    promo:''
  });
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
              render={(renderProps) => (
                <route.component
                  {...renderProps}
                  {...props}
                  infoData={infoData}
                  setinfoData={setinfoData}
                />
              )}
            />

            <Route exact path='/' component={Main}>
              {' '}
              <Redirect to='/Registrationform/#1' />{' '}
            </Route>

            <Route path='/RegistrationChild' component={ChildComponent}></Route>
          </>
        );
      })}
    </Switch>
  );
  // }
};
export default withRouter(AppRoutes);
