// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';

// CONTEXT IMPORTS
import UserContext from '../Context/UserContext';

const ChatMessage = ({message}) => {
  const { user } = useContext(UserContext);

  const stylingMessage = () => {
    const chatMessage = document.querySelector("#message-" + message.id);
    const chatMessageBody = document.querySelector("#message-" + message.id + "> p.message-body");

    if (message.user.id === user.id ) {
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
      <p className="m-0 pb-2">{message.user.first_name}</p>
      <p className="m-0 px-4 py-2 message-body">{message.content}</p>
    </div>
  );
};

export default ChatMessage;