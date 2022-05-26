// CONFIG IMPORTS
import React, { useContext } from 'react';

// CONTEXT IMPORTS
import UserContext from '../Context/UserContext';

const ChatBanner = ({currentChat, setOpenShowRequestModal}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="chat-banner">
      {
        currentChat.request && (
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center p-3">
            <div>
              <h5 className="text-center text-lg-start">{currentChat.request.title}</h5>
              <div className="d-flex flex-column flex-md-row">
                <p className="m-1 text-center text-lg-start">
                  Requester: {currentChat.requester.first_name} {currentChat.requester.last_name} 
                  <small>{currentChat.requester.id === user.id && " (yourself)"}</small>
                </p>
                <p className="d-none d-md-block m-1">&nbsp; | &nbsp;</p>
                <p className="m-1 text-center text-lg-start">
                  Volunteer: {currentChat.volunteer.first_name} {currentChat.volunteer.last_name}
                  <small>{currentChat.volunteer.id === user.id && " (yourself)"}</small>
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