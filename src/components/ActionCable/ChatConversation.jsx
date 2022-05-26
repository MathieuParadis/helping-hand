// CONFIG IMPORTS
import React from 'react';

// COMPONENTS IMPORTS
import ChatMessage from '../ActionCable/ChatMessage';

const ChatConversation = ({currentChat}) => {
  return (
    <div className="chat-conversation h-100 p-3">
      {
        currentChat.messages && (
          currentChat.messages.map((message) => {
            return (
              <ChatMessage message={message} key={message.id} />
            )
          })
        )
      }
    </div>
  );
};

export default ChatConversation;