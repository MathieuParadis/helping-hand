// CONFIG IMPORTS
import React, { useState, useContext } from 'react';

// CONTEXT IMPORTS
import UserContext from '../Context/UserContext';

// ACTION CABLE IMPORT
import { ActionCable } from 'react-actioncable-provider';

// CONSTANTS IMPORTS
import { API_ROOT } from '../../constants/index';

// import NewConversationForm from './NewConversationForm';
// import MessagesArea from './MessagesArea';
// import Cable from './Cable';

const ChatCard = ({chat, setChat}) => {
  const { user } = useContext(UserContext);
  
  return (
    <div className="chat-card w-100 border-bottom-grey p-3 d-flex flex-column justify-content-between pointer" onClick={() => setChat(chat)}>
      <h5>{chat.request.title}</h5>
      <p className="m-0">
        by {chat.requester.first_name} {chat.requester.last_name}
        {chat.requester.id == user.id && " (yourself)"}
      </p>
    </div>
  );
};

export default ChatCard;