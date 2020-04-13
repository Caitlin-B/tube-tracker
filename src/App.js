import React, { Component } from "react";
import { Router } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import * as api from "./api";
import "./App.css";
import AllLines from "./components/AllLines";
import SingleLine from "./components/SingleLine";
import { formatDate } from "./utils";

class App extends Component {
  state = { lines: {}, isLoading: true };

  render() {
    const { lines, isLoading } = this.state;

    return (
      <div className="App">
        <h1 className="appHeader">Travel Widget</h1>
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
  }

  componentDidMount() {
    api.fetchStatus().then(lines => {
      this.setState({ lines, isLoading: false });
    });
  }
}

export default App;
