import React from "react";
import { useState } from "react";
import Button from "./Button";
import Fetch from "./Fetch";
const apkiKey = "JWANBF9FYQTE0DHA";
const alpha = require("alphavantage")({ key: "qweqweqwe" });
const Chartt = require("./chart");
const Body = () => {
  const [ticker, setticker] = useState(null);
  const [tickerData, settickerData] = useState();
  const [timeInt, settimeInt] = useState(null);
  const [chart, setchart] = useState(null);

  function fun(e) {
    e.preventDefault();
    document.getElementById("chartselect").style.visibility = "visible";

    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=${timeInt}&apikey=${apkiKey}`
    )
      .then((result) => result.json())
      .then((result) => {
        settickerData(result[`Time Series (${timeInt})`]);
      });
  }

  return (
    <div className="Body-stock">
      <h1 class="H6">Historical Stock Data</h1>
      <form>
        <div class="form-group">
          ENTER A TICKER
          <input
            type="text"
            onChange={(e) => {
              setticker(e.target.value);
            }}
            class="form-control"
            id="Ticker"
            placeholder="e.g. TSLA"
          />
          Time Interval
          <select
            class="form-control"
            onChange={(e) => {
              settimeInt(e.target.value);
            }}
          >
            <option value="1min">1min</option>
            <option value="5min">5min</option>
            <option value="15min">15min</option>
            <option value="30min">30min</option>
            <option value="60min">60min</option>
          </select>
          <div class="chartt">
            Chart
            <select
              id="chartselect"
              class="form-control "
              onClick={(e) => {
                setchart(e.target.value);
              }}
            >
              <option value="SMA">SMA</option>
              <option value="EMA">EMA</option>
            </select>
          </div>
        </div>
        <button class="btn btn-dark m-2" onClick={(e) => fun(e)}>
          Search
        </button>
      </form>
      <div class="d-flex">
        <Fetch data={tickerData} />
      </div>
    </div>
  );
};
export default Body;
