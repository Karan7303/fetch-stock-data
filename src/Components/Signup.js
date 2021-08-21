import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const Signup = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Age, setAge] = useState("");

  function myFunc(e) {
    fetch("http://localhost:5000/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname: name, email, Age, pass }),
    })
      .then((response) => response.json())
      .then((response) => {
        history.push(308, "/Login");
      });
  }

  return (
    <form
      className="container"
      class="position-absolute top-50 start-50 translate-middle border p-5 d-grid gap-2"
    >
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="string"
        class="form-control"
        name="firstname"
        placeholder="Name"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        class="form-control"
        name="email"
        placeholder="name@example.com"
      />
      <input
        onChange={(e) => {
          setPass(e.target.value);
        }}
        type="password"
        class="form-control"
        name="password"
        placeholder="password"
      />
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        type="string"
        class="form-control"
        name="Age"
        placeholder="Age"
      />
      <button onClick={(e) => myFunc(e)} class="btn btn-primary" type="button">
        Submit
      </button>
      <span>
        Already a Member?
        <Link to="/Login" className="btn btn-outline-primary">
          Login In
        </Link>
      </span>
    </form>
  );
};

export default Signup;
