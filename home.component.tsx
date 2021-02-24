import React, { useState, useEffect } from "react";
import { Header } from "./header/header";
import { MessageList } from "./messageList/messageList";
import { SendMessage } from "./sendMessage/sendMessage";
import { IMessage } from "./models/IMessage";
import { MessageService } from "./service/message.service";

export function Home() {
  const [messages, setMessages] = useState<IMessage[]>([]);
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

  const onLogout = () => {};

  return (
    <div>
      <Header onLogout={onLogout} />
      <MessageList messages={messages} />
      <SendMessage />
    </div>
  );
}
