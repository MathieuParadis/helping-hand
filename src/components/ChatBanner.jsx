// CONFIG IMPORTS
import React, {useEffect} from 'react';

const ChatBanner = ({chat, setOpenShowRequestModal}) => {
  useEffect(() => {
  }, []);

  return (
    <div className="chat-banner">
      {
        chat.request && (
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center p-3">
            <div>
              <h5 className="text-center">{chat.request.title}</h5>
              <p className="m-0 text-center text-lg-start">by {chat.requester.first_name} {chat.requester.last_name}</p>
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