import React, { Component } from "react";
import "./App.css";
import FilmDisplay from "./Component/filmDisplay";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <table className="titlebar">
          <tbody>
            <tr>
              <td>
                <img />
              </td>
              <td>
                <h1>Studio Ghibli</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input placeholder="Enter search term" />
        <FilmDisplay />
      </div>
    );
  }
}
export default App;
