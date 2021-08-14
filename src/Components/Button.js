import React from "react";

const Button = ({ onClick }) => {
  return (
    <button type="submit" onClick={onClick}>
      {" "}
      Search
    </button>
  );
};

export default Button;
