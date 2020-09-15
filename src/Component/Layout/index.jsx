// import React,{ Suspense } from "react";
// import Header from "./header";
// import { Route, Switch } from "react-router-dom";
// import routes from "../../routes"
// import Loader from "../../Common/Loader/Loader.jsx";

// const Layout = () => {
//   console.log("routesroutes",routes);
//   return (  
//     <>
//       <Header />
//       <div className="container">
//       <Suspense fallback={<Loader fullLoader={true} />}>
//         <Switch>
//           {routes.map((route, idx) => {
//             return route.component ? (
//               <Route
//                 key={idx}
//                 path={route.path}
//                 exact={route.exact}
//                 name={route.name}
//                 render={(props) => (
//                   <route.component {...props} {...this.props} />
//                 )}
//               />
//             ) : null;
//           })}
//         </Switch>
//       </Suspense>
//       </div>
//     </>
//   );
// };
// export default Layout;


export * from "./header"