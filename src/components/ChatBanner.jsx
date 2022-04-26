// CONFIG IMPORTS
import React, {useEffect} from 'react';

const ChatBanner = ({chat, setOpenShowRequestModal}) => {
  useEffect(() => {
  }, []);

  return (
    <div className="chat-banner d-flex flex-column flex-md-row justify-content-between align-items-md-center p-3">
      {
        chat.request && (
          <>
            <div>
              <h4>{chat.request.title}</h4>
              <p className="m-0">by {chat.requester.first_name} {chat.requester.last_name}</p>
            </div>
            <div className="pt-3 pt-md-0 ps-md-4">
              <button className="btn button-ternary button-w150 border-radius-50 p-2" onClick={() => setOpenShowRequestModal()}>See details</button>
            </div>
          </>
        )
      }

    </div>
  );
};

export default ChatBanner;