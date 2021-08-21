const { response } = require("express");
const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const key = "JWANBF9FYQTE0DHA";

function reqData(req) {
  fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${req.body.ticker}&interval=${req.body.timeInt}&apikey=${key}`
  )
    .then((result) => result.json())
    .then((result) => {
      data = result[`Time Series (${req.body.timeInt})`];
      return data;
    });
}
router.post("/", (req, res) => {
  const data = reqData(req);
  console.log(data);
  res.json(data);
});

module.exports = router;
