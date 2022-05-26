// CONFIG IMPORTS
import React, { useState } from 'react';

// COMPONENTS IMPORTS
import ChatMessage from '../ActionCable/ChatMessage';

const ChatConversation = ({currentChat}) => {
  return (
    <div className="chat-conversation h-100 p-3">
      {
        currentChat.messages && (
          currentChat.messages.map((message, index) => {
            return (
              <ChatMessage message={message} previousMessage={index - 1 < 0 ? '' : currentChat.messages[index-1]} key={message.id} />
            )
          })
        )
      }
    </div>
  );
};

export default ChatConversation;