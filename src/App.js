import React from "react";
import "./App.css";
import AnimeDisplay from "./component/AnimeDisplay";
import NavBar from "./component/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./component/Search";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/search">
            <NavBar />
            <Search />
          </Route>
          <Route exact path="/">
            <NavBar />
            <AnimeDisplay />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
