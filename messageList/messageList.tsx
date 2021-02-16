import React, { useState, useEffect } from "react";
import { IMessage } from "../models/IMessage";
import "./messageList.style.css";

export function MessageList(props: { messages: IMessage[] }) {
  const { messages } = props;
  return (
    <div className={"messageList"}>
      {messages &&
        messages.map((message: IMessage) => (
          <div
            key={message.id}
            className={"message-item" + (message.isOwn ? " own" : "")}
          >
            {message.content}
          </div>
        ))}
    </div>
  );
}
