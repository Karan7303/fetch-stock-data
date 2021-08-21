import React from "react";
import { LineChart, Line } from "recharts";
function chartfetch(e) {
  e.preventDefault();
  document.getElementById("chartselect").style.visibility = "visible";

  fetch(
    `https://www.alphavantage.co/query?function=${chart}&symbol=${ticker}&interval=weekly&time_period=90&series_type=open&${apkiKey}`
  )
    .then((result) => result.json())
    .then((result) => {
      setchartdata(result[`Technical Analysis: (${chart})`]);
    });
}
const chart = ({ data }) => {
  console.log(data);
  return (
    <div>
      {/* <LineChart width={400} height={400} data={tickerData}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
      ;*/}
    </div>
  );
};

export default chart;
