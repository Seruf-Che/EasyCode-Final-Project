import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorIndicator from "./components/wrappers-components/error-indicator/error-indicator";
import store from "./store/store";
import {Provider} from "react-redux";

import "./index.sass";

ReactDOM.render(
  <Provider store = {store}>
    <Router>
      <ErrorIndicator>
        <App/>
      </ErrorIndicator>
    </Router>
  </Provider>,
document.getElementById('root'));