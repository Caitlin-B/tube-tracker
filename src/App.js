import React, { Component, useState, useEffect } from "react";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from "./api";
import "./App.css";
import AllLines from "./components/AllLines";
import SingleLine from "./components/SingleLine";
import { formatDate } from "./utils";

const useLines = () => {
  const [lines, setLines] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchStatus().then(lines => {
      setLines(lines);
      setIsLoading(false)
    })
  }, [])

  return {lines, setLines, isLoading, setIsLoading};
}

const App = () => {
  const {lines, isLoading} = useLines()

  return (
    <div className="App">
      <h1 className="appHeader">Tube Tracker</h1>
      <div className="appBody">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <div className="lastUpdated">
              <p>Last Updated </p>
              <p className="date">{formatDate(lines[0].modified)}</p>
            </div>
            <Router>
              <AllLines path="/travel" lines={lines} />
              <SingleLine path="/travel/:line" lines={lines} />
            </Router>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
