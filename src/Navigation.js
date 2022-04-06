import React, { Component } from "react";
import "./navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <li>Головна</li>
        <li>Про нас</li>
        <li>Контакти</li>
      </nav>
    );
  }
}
