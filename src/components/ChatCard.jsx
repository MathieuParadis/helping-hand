import React from 'react';

const ChatCard = ({chat}) => {
  return (
    <div className="chat-card w-100 border-bottom-grey p-3">
      <h4>{chat.request.title}</h4>
      <p className="m-0">by {chat.request.requester.first_name} {chat.request.requester.last_name}</p>
    </div>
  );
};

export default ChatCard;