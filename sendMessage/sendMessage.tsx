import React, { useState } from "react";
import "./sendMessage.style.css";

export function SendMessage() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={"sendMessage"}>
      <input
        value={inputValue}
        className={"input"}
        placeholder="Enter your message here!"
        onChange={event => setInputValue(event.target.value)}
      />
      <i
        className={"send"}
        onClick={() => {
          setInputValue("");
        }}
      >
        Send
      </i>
    </div>
  );
}
