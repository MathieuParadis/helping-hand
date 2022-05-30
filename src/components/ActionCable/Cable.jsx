// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';

// ACTION CABLE IMPORTS
import { ActionCableConsumer } from 'react-actioncable-provider';

// COMPONENTS IMPORTS
import ChatConversation from '../ActionCable/ChatConversation';

const Cable = ({chats, handleReceivedMessage}) => {
  const { chat } = useContext(ChatContext);

  return (
    <>
      {chats.map(chatElement => {
        console.log(chatElement.messages)
        return (
          <ActionCableConsumer channel={{ channel: 'MessagesChannel', chat: chatElement.id  }} onReceived={handleReceivedMessage} key={chat.id}>
            {
              (chatElement.id === chat.id) && 
              <ChatConversation />
            }
          </ActionCableConsumer>   
        );
      })}
    </>
  );
};

export default Cable;