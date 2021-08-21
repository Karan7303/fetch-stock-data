import React from "react";
import { useState } from "react";
import "../App.css";

import { Link, useHistory } from "react-router-dom";
const Login = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function myFunc(e) {
    e.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname: name, pass }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response === "Login Successfull");
        if (response === "Login Successfull") {
          history.push("/Body");
        } else {
          var x = document.getElementById("warning");
          x.style.visibility = "visible";
          x.innerHTML = response;
        }
      });
  }

  return (
    <form class="FormLogin">
      <div class="Login center">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="string"
          class="form-control"
          id="emaillogin"
          placeholder="name@example.com"
        />
        <br />
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          type="password"
          class="form-control"
          id="passlogin"
          placeholder="password"
        />
        <button class="btn btn-dark" onClick={(e) => myFunc(e)} type="button">
          Login
        </button>
        <p class="fw-bold ">Not a Member? Sign up</p>

        <Link class="ms-3" to="/Signup" className="btn btn-primary ">
          Sign Up
        </Link>
        <br />
        <div>
          <p id="warning" class="alert alert-danger m-3">
            {" "}
            <span>close</span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
