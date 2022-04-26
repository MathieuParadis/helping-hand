// CONFIG IMPORTS
import React, {useEffect} from 'react';

const ChatConversation = ({chat}) => {
  useEffect(() => {
  }, []);

  return (
    <div className="chat-conversation d-flex justify-content-between align-items-center p-3">
      {
        chat.messages && (
          <>

          </>
        )
      }

    </div>
  );
};

export default ChatConversation;