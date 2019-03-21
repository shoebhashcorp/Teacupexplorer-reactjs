import React, { Component } from "react";

import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Sidebar from "./Components/Layout/Sidebar";
import Content from "./Components/Layout/Content";

// import { Item } from "react-contexify";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Sidebar />
          <div className="container-fluid">
            <Navbar />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
