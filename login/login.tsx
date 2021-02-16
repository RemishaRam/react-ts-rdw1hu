import React, { useState } from "react";
import "./login.style.css";

export function Login(props) {
  return (
    <div className={"loginMain"}>
      <div className={"login"}>Login</div>
      <div className={"userName"}>
        <input className={"userInput"} placeholder="UserName" />
      </div>
      <div className={"password"}>
        <input
          className={"passwordInput"}
          placeholder="Password"
          type="password"
        />
      </div>
      <div
        className={"continue"}
        onClick={() => {
          props.fun(true);
          props.fun1(false);
        }}
      >
        Continue
      </div>
    </div>
  );
}
