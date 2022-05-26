// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';

// MOMENT INPORTS
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';

// CONTEXT IMPORTS
import UserContext from '../Context/UserContext';

const ChatMessage = ({message, previousMessage}) => {
  const { user } = useContext(UserContext);

  const userTZ = moment.tz.guess();
  const previousMessageDate = moment(previousMessage.created_at).tz(userTZ).format("MMM Do YY");
  const messageDate = moment(message.created_at).tz(userTZ).format("MMM Do YY");

  const stylingMessage = () => {
    const chatMessage = document.querySelector("#message-" + message.id);
    const chatMessageBody = document.querySelector("#message-" + message.id + "> .message-body");
    const chatMessageTime = document.querySelector("#message-" + message.id + "> .message-body" + "> .message-time");

    if (message.user.id === user.id ) {
      chatMessage.classList.add("align-items-end");
      chatMessageBody.classList.add("bg-primary", "pe-5");
      chatMessageTime.classList.add("right");
    } else {
      chatMessage.classList.add("align-items-start");
      chatMessageBody.classList.add("bg-grey-dark", "ps-5");
      chatMessageTime.classList.add("left");
    } 
  }

  useEffect(() => {
    stylingMessage();
  }, []);

  return (
    <div className="chat-message d-flex flex-column mb-2" id={`message-${message.id}`}>
      {
        (previousMessage === '' || previousMessageDate !== messageDate) &&
        <Moment tz={userTZ} format="LL" className="message-date h5 pb-2 text-center w-100">{message.created_at}</Moment>
      }
      {
        (previousMessage === '' || previousMessage.user.id !== message.user.id) &&
        <p className="m-0 pb-2">
          {message.user.id === user.id ? "You" : message.user.first_name} said:
        </p>
      }
      <div className="m-0 px-4 py-2 message-body text-white border-radius-8">
        <p className="m-0">{message.content}</p>
        <Moment tz={userTZ} format="HH:mm" className="message-time">{message.created_at}</Moment>
      </div>
    </div>
  );
};

export default ChatMessage;