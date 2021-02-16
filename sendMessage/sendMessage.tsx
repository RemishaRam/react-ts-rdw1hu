import React,{useState} from "react";
import "./sendMessage.style.css";

export function SendMessage(props) {
  const[inputValue, setInputValue] = useState("");
  return(
    <div className={"sendMessage"}>
      <input 
      value = {inputValue}
      className={"input"}
      placeholder="Enter your message here!"
      onChange={event=>setInputValue(event.target.value)}
    />
    <i className={"send"}
    onClick={()=>{
      props.fun(inputValue);
      setInputValue("");
    }}
    >
    Send
    </i>
    </div>
  ); 
}
