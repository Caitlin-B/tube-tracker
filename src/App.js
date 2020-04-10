import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "./api";
import "./App.css";
import AllLines from "./components/AllLines";
import SingleLine from "./components/SingleLine";

class App extends Component {
  state = { lines: {}, isLoading: true };

  render() {
    const { lines, isLoading } = this.state;

    return (
      <div className="App">
        <h1>Travel Widget</h1>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <Router>
            <AllLines path="/" lines={lines} />
            <SingleLine path="/:line" lines={lines} />
          </Router>
        )}
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
