// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';

// ACTION CABLE IMPORTS
import { ActionCableConsumer } from 'react-actioncable-provider';

const Cable = ({chats, handleReceivedMessage}) => {
  const { chat } = useContext(ChatContext);

  return (
    <>
      {chats.map(chat => {
        return (
          <ActionCableConsumer channel={{ channel: 'MessagesChannel', chat: chat.id  }} onReceived={handleReceivedMessage} key={chat.id}>
          </ActionCableConsumer>                          
        );
      })}
    </>
  );
};

export default Cable;