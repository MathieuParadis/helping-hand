// CONFIG IMPORTS
import React, { useEffect, useContext } from 'react';

// COMPONENTS IMPORTS
import ChatMessage from '../ActionCable/ChatMessage';

const ChatConversation = ({currentChat}) => {
  const scrollLastMessage = () => {
    let lastMessage = currentChat.messages[currentChat.messages.length-1];
    let lastMessageTag = document.querySelector(`#message-${lastMessage.id}`);
    lastMessageTag.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollLastMessage();
  }, [currentChat, currentChat.messages]);
  
  return (
    <div className="chat-conversation h-100 p-3">
      {
        currentChat && (
          currentChat.messages.map((message, index) => {
            console.log(currentChat.messages)
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