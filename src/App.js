import React, {Component} from 'react';
// import { ToastContainer, toast, Zoom } from "react-toastify";
import { Router } from "react-router-dom";
import AppRoutes from "./routes/";
import { createBrowserHistory } from "history";
import './App.css';
import Loader from './Common/Loader/Loader';
const history = createBrowserHistory({ basename: "/" });
class App extends Component {
  render() {
  return (
    <>
      <Router history={history}>
        <React.Suspense fallback={<Loader fullLoader={true} />}>
          <AppRoutes />
        </React.Suspense>
      </Router>
      {/* <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        autoClose={8000}
        hideProgressBar
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        transition={Zoom}
      /> */}
      </>
  );
}
}
export default App;
