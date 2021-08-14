import React from "react";

const fetch = ({ data }) => {
  return (
    <div className="table">
      {data &&
        Object.keys(data).map((item, index) => {
          return (
            <table>
              <tr key={index}>
                <th>Time</th>
                <th>open</th>
                <th>high</th>
                <th>low</th>
                <th>close</th>
                <th>volume</th>
              </tr>
              <td>{item}</td>
              {Object.keys(data[item]).map((subitem, ind) => {
                return <td>{data[item][subitem]}</td>;
              })}
            </table>
          );
        })}
    </div>
  );
};
export default fetch;
