// CONFIG IMPORTS
import React from 'react';

// ACTION CABLE IMPORT
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ chats }) => {
  return (
    <>
      {chats.map(chat => {
        return (
          <ActionCable channel={{ channel: 'MessagesChannel', chat: chat.id }} key={chat.id} />
        );
      })}
    </>
  );
};

export default Cable;