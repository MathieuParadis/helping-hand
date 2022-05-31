// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';

// COMPONENTS IMPORTS
import ChatMessage from '../ActionCable/ChatMessage';

const ChatConversation = ({currentChat}) => {
  // const { chat } = useContext(ChatContext);
  
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