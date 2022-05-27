// CONFIG IMPORTS
import React from 'react';

// ACTION CABLE IMPORT
import { ActionCable } from 'react-actioncable-provider';

import ChatConversation from '../ActionCable/ChatConversation';

const Cable = ({chats, handleReceivedMessage, currentChat}) => {
  console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
  return (
    <>
      {chats.map(chat => {
        console.log(chat.messages)
        return (
          <>
            <ActionCable channel={{ channel: 'MessagesChannel', chat: chat.id }} onReceived={handleReceivedMessage} key={chat.id} />
            {
              currentChat.id === chat.id &&          
              <ChatConversation currentChat={chat} />
            }
          </>
        );
      })}
    </>
  );
};

export default Cable;