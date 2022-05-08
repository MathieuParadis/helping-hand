// CONFIG IMPORTS
import React, { useEffect } from 'react';

// DATA IMPORTS
import user from '../data/User';

const ChatMessage = ({message}) => {
  const stylingMessage = () => {
    const chatMessage = document.querySelector("#message-" + message.id);
    const chatMessageBody = document.querySelector("#message-" + message.id + "> p.message-body");

    if (message.author == user[0].first_name + " " + user[0].last_name ) {
      chatMessage.classList.add("align-items-end");
      chatMessageBody.classList.add("bg-primary", "text-white", "border-radius-50");
    } else {
      chatMessage.classList.add("align-items-start");
      chatMessageBody.classList.add("bg-grey-dark", "text-white", "border-radius-50");
    } 
  }

  useEffect(() => {
    stylingMessage();
  }, []);

  return (
    <div className="chat-message d-flex flex-column mb-2" id={`message-${message.id}`}>
      <p className="m-0">{message.author}</p>
      <p className="m-0 px-4 py-2 message-body">{message.body}</p>
    </div>
  );
};

export default ChatMessage;