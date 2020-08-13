import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import TVShow from "./pages/TVShow";
import "./App.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tvshow" component={TVShow}></Route>
      </Switch>
    </Router>
  );
}

export default App;
