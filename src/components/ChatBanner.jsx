import React from 'react';

const ChatBanner = ({chat}) => {
  return (
    <div className="chat-banner d-flex justify-content-between align-items-center p-3">
      {
        chat.request && (
          <>
            <div>
              <h4>{chat.request.title}</h4>
              <p className="m-0">by {chat.request.requester.first_name} {chat.request.requester.last_name}</p>
            </div>
            <div>
              <button className="btn button-ternary button-w150 border-radius-50 p-2">See details</button>
            </div>
          </>
        )
      }

    </div>
  );
};

export default ChatBanner;