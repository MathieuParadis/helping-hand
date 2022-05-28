// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';

// ACTION CABLE IMPORT
import { ActionCable } from 'react-actioncable-provider';

import ChatConversation from '../ActionCable/ChatConversation';

const Cable = ({chats, handleReceivedMessage}) => {
  const { chat } = useContext(ChatContext);

  console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
  return (
    <>
      {chats.map(chatElement => {
        console.log(chatElement)
        return (
          <>
            <ActionCable channel={{ channel: 'MessagesChannel', chat: chatElement.id }} onReceived={handleReceivedMessage} key={chatElement.id} />
            {
              chat.id === chatElement.id &&          
              <ChatConversation />
            }
          </>
        );
      })}
    </>
  );
};

export default Cable;