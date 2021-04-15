import React from "react";
import "./App.css";
import AnimeDisplay from "./component/AnimeDisplay";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <NavBar />
            <h1>search</h1>
          </Route>
          <Route exact path="/">
            <AnimeDisplay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
