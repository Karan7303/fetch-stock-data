import React from "react";
import { useState } from "react";
import Button from "./Button";
import Fetch from "./Fetch";
//const apkiKey = "JWANBF9FYQTE0DHA";
const alpha = require("alphavantage")({ key: "qweqweqwe" });

const Body = () => {
  const [ticker, setticker] = useState(null);
  const [col, setcol] = useState(null);
  const onClick = () => {
    alpha.data.intraday(ticker).then((data) => {
      setcol(data["Time Series (1min)"]);
      fethcData();
    });
  };
  const fethcData = () => {
    return;
  };
  return (
    <div>
      <br />
      Enter a ticker{" "}
      <input
        type="text"
        name="ticker"
        onChange={(event) => setticker(event.target.value)}
      />
      <Button onClick={onClick} />
      <Fetch data={col} />
    </div>
  );
};
export default Body;
