import React from "react";
import { AppRoutes } from "./config/AppRoutes";

const Step2Component = React.lazy(() => import("./Component/Registration/Step2"));
const MainComponent =  React.lazy(() => import("./Component/Registration"));

const routes = [
  {
    path: AppRoutes.STEP2.url,
    exact: AppRoutes.STEP2.exact,
    name: AppRoutes.STEP2.name,
    component: Step2Component
  },
  {
    path: AppRoutes.MAIN.url,
    exact: AppRoutes.MAIN.exact,
    name: AppRoutes.MAIN.name,
    component: MainComponent
  },
];

export default routes;
