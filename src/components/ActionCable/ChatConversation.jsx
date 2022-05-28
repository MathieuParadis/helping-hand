// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';

// COMPONENTS IMPORTS
import ChatMessage from '../ActionCable/ChatMessage';

const ChatConversation = () => {
  const { chat } = useContext(ChatContext);
  
  return (
    <div className="chat-conversation h-100 p-3">
      {
        chat.messages && (
          chat.messages.map((message, index) => {
            return (
              <ChatMessage message={message} previousMessage={index - 1 < 0 ? '' : chat.messages[index-1]} key={message.id} />
            )
          })
        )
      }
    </div>
  );
};

export default ChatConversation;