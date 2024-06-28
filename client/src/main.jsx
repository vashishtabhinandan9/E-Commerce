import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from "./error-page";
import {createBrowserRouter,redirect,RouterProvider,} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollectionLayoutHOC from './HOC/Collection.LayoutHOC.jsx';
import Collection from './Pages/Collection.jsx';
import HomeLayoutHOC from './HOC/Home.LayoutHOC.jsx';
import Home from './Pages/Home.jsx';
import "./index.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
)
