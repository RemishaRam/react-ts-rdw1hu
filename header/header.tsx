import React from "react";
import "./header.style.css";

export function Header(props) {
  return (
    <div className={"header"}>
      Chat here!
      <div
        className={"logout"}
        onClick={() => {
          props.fun(false);
          props.fun1(true);
        }}
      >
        Logout
      </div>
    </div>
  );
}
