// CONFIG IMPORTS
import React from 'react';

// ACTION CABLE IMPORT
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ chats, handleReceivedMessage }) => {
  return (
    <>
      {chats.map(chat => {
        return (
          <ActionCable
            key={chat.id}  
            channel={{ channel: 'MessagesChannel', chat: chat.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </>
  );
};

export default Cable;