import React, { useEffect, useState } from "react";
import "./style.css";
import { render } from "react-dom";
import { SendMessage } from "./sendMessage/sendMessage";
import { Header } from "./header/header";
import { MessageList } from "./messageList/messageList";
import { IMessage } from "./models/IMessage";
import { getMessages } from "./service/message.service";
import { Login } from "./login/login";
import firebase from "firebase/app";

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
    getMessages().then((messages: IMessage[]) => {
      setMessages(messages);
    });
  }, []);
  const showInputValue = (inputValue: string) => {
    setMessages([
      ...messages,
      {
        content: inputValue,
        id: messages.length + 1,
        datetime: "nodate",
        isOwn: true
      }
    ]);
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
const config = {
  apiKey: "AIzaSyALCZC1URHfqXFZOwAwHVG-SvjiYHTkKSg",
  authDomain: "rbmessenger-8b744.firebaseapp.com.firebaseapp.com",
  databaseURL: "https://rbmessenger-8b744-default-rtdb.firebaseio.com/",
  storageBucket: "rbmessenger-8b744.appspot.com.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service

firebase.database();
//   .ref("users/" + 1)
//   .set({
//     username: "THE NAME",
//     email: "Mail"
//   });

render(<App />, document.getElementById("root"));
