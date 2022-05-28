// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';
import UserContext from '../Context/UserContext';

const ChatCard = ({chat}) => {
  const { setChat } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  
  return (
    <div className="chat-card w-100 border-bottom-grey p-3 d-flex flex-column justify-content-between pointer" onClick={() => setChat(chat)}>
      <h5>{chat.request.title}</h5>
      <p className="mb-1">
        Requester: {chat.requester.first_name} {chat.requester.last_name}
        <small>{chat.requester.id === user.id && " (yourself)"}</small>
      </p>
      <p className="m-0">
        Volunteer: {chat.volunteer.first_name} {chat.volunteer.last_name}
        <small>{chat.volunteer.id === user.id && " (yourself)"}</small>        
      </p>
    </div>
  );
};

export default ChatCard;