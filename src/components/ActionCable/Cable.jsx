// CONFIG IMPORTS
import React, { useContext } from 'react';

// ACTION CABLE IMPORTS
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({chats, handleReceivedMessage}) => {
  return (
    <>
      {chats.map(chat => {
        console.log(chat.messages)
        return (
          <ActionCableConsumer channel={{ channel: 'MessagesChannel', chat: chat.id  }} onReceived={handleReceivedMessage} key={chat.id}>
          </ActionCableConsumer>   
        );
      })}
    </>
  );
};

export default Cable;