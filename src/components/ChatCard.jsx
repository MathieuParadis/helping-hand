import React from 'react';

const ChatCard = ({chat, setChat}) => {
  return (
    <div className="chat-card w-100 border-bottom-grey p-3 d-flex flex-column justify-content-between pointer" onClick={() => setChat(chat)}>
      <h5>{chat.request.title}</h5>
      <p className="m-0">by {chat.requester.first_name} {chat.requester.last_name}</p>
    </div>
  );
};

export default ChatCard;