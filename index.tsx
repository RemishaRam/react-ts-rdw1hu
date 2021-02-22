import React, { useEffect, useState } from "react";
import "./style.css";
import { render } from "react-dom";
import { SendMessage } from "./sendMessage/sendMessage";
import { Header } from "./header/header";
import { MessageList } from "./messageList/messageList";
import { IMessage } from "./models/IMessage";
import { MessageService } from "./service/message.service";
import { Login } from "./login/login";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [home, setHome] = useState(false);
  const [login, setLogin] = useState(true);
  const showUserPage = value => {
    setHome(value);
  };
  const hideLoginPage = val => {
    setLogin(val);
  };
  useEffect(() => {
    MessageService.subscribeMessages(messageMap => {
      const messages: IMessage[] = Object.keys(messageMap)
        .map(key => messageMap[key])
        .filter(message => !!message);
      setMessages(messages);
    });
  }, []);
  const showInputValue = (inputValue: string) => {
    MessageService.sendMessage({
      content: inputValue,
      id: messages.length + 1,
      datetime: "nodate",
      isOwn: true
    });
  };
  return (
    <div className={"main"}>
      {login ? <Login fun={showUserPage} fun1={hideLoginPage} /> : null}
      {home ? <Header fun={showUserPage} fun1={hideLoginPage} /> : null}
      {home ? <MessageList messages={messages} /> : null}
      {home ? <SendMessage fun={showInputValue} /> : null}
    </div>
  );
}

console.log(123);

// Get a reference to the database service

render(<App />, document.getElementById("root"));
