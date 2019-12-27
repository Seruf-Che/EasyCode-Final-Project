import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import { HashRouter as Router } from 'react-router-dom';
import ErrorIndicator from "./components/wrappers-components/error-indicator/error-indicator";
import store from "./store/store";
import {Provider} from "react-redux";

import "./index.sass";

ReactDOM.render(
  <Provider store = {store}>
    <ErrorIndicator>
      <Router>
        <App/>
      </Router>
    </ErrorIndicator>
  </Provider>,
document.getElementById('root'));