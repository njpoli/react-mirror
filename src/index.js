import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import "../node_modules/weather-icons/css/weather-icons.min.css";

const store = createStore(rootReducer, {}, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, 
document.getElementById('root'));
