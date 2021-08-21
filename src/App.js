import logo from "./logo.svg";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
const alpha = require("alphavantage")({ key: "qweqweqwe" });

function App() {
  return (
    <div class="App">
      <Router>
        <Switch>
          <Route path exact="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/Body" component={Body} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
