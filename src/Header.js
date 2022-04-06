import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {
  title = "Українці в Іспанії";
  render() {
    return (
      <div className="header-wrap">
        <h3 className="header-name">{this.title}</h3>
      </div>
    );
  }
}
