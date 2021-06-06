import logo from './logo.svg';
import './App.css';
import React from 'react'
import Form from './Form'
import ErrorBoundary from './ErrorBoundary.JS';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";


const App = () => (
  <BrowserRouter>
    <NavBar exact className="nav-link" activeClassName="active" to="/">
          Home
    </NavBar>
  </BrowserRouter>

)


{/* <ErrorBoundary> */}




export default App;
