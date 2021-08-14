import logo from "./logo.svg";
import Header from "./Components/Header";
import Body from "./Components/Body";
import "./App.css";
import { useEffect } from "react";
const alpha = require("alphavantage")({ key: "qweqweqwe" });

/* const onClick = ( data  => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data);
  };"
  */
function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
