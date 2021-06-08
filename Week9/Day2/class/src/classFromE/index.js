import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import reportWebVitals from './reportWebVitals';
import {reducer} from "./redux/reducer";
// import CounterXp from "./Counter-xp";
// import AppDailychallenge from "./App-Dailychallenge";
const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
          {/*<CounterXp/>*/}
          {/* <AppDailychallenge/> */}
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
