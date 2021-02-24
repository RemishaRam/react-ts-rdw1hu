import React from "react";
import "./header.style.css";

export function Header(props: { onLogout: () => void }) {
  return (
    <div className={"header"}>
      Chat here!
      <div
        className={"logout"}
        onClick={() => {
          props.onLogout();
        }}
      >
        Logout
      </div>
    </div>
  );
}
