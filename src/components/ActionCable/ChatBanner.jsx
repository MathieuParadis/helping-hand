// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import UserContext from '../Context/UserContext';
import ChatContext from '../Context/ChatContext';

const ChatBanner = ({setOpenShowRequestModal}) => {
  const { chat } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  console.log(chat)

  return (
    <div className="chat-banner">
      {
        chat.request && (
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center p-3">
            <div>
              <h5 className="text-center text-lg-start">{chat.request.title}</h5>
              <div className="d-flex flex-column flex-md-row">
                <p className="m-1 text-center text-lg-start">
                  Requester: {chat.requester.first_name} {chat.requester.last_name} 
                  <small>{chat.requester.id === user.id && " (yourself)"}</small>
                </p>
                <p className="d-none d-md-block m-1">&nbsp; | &nbsp;</p>
                <p className="m-1 text-center text-lg-start">
                  Volunteer: {chat.volunteer.first_name} {chat.volunteer.last_name}
                  <small>{chat.volunteer.id === user.id && " (yourself)"}</small>
                </p>
              </div>
            </div>
            <div className="pt-3 pt-lg-0 ps-lg-5">
              <button className="btn button-ternary button-w150 border-radius-50 p-2" onClick={() => setOpenShowRequestModal()}>See details</button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ChatBanner;