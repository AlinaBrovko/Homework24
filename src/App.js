import { Component } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import Main from "./Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
