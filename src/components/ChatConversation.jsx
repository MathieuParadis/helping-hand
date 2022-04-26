// CONFIG IMPORTS
import React, {useEffect} from 'react';

// COMPONENTS IMPORTS
import ChatMessage from '../components/ChatMessage';

const ChatConversation = ({chat}) => {
  useEffect(() => {
  }, []);

  return (
    <div className="chat-conversation h-100 p-3">
      {
        chat.messages && (
          chat.messages.map((message) => {
            return (
              <ChatMessage message={message} key={message.body + message.author} />
            )
          })
        )
      }

    </div>
  );
};

export default ChatConversation;