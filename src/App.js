import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Home/>
    </div>
  );
}

export default App;
