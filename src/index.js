import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Root, Route } from "react-router-dom";
import "./styles.css";

class Home extends React.Component {
  render() {
    return <h1>khello ghassen</h1>;
  }
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/index">
            <button>home</button>
          </Link>
          <button>profile</button>
          <button>friends</button>
        </nav>
        <Route path="/index" component={Home} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
