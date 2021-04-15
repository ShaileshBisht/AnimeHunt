import React from "react";
import "./App.css";
import AnimeDisplay from "./component/AnimeDisplay";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <AnimeDisplay />
    </div>
  );
}

export default App;
