// CONFIG IMPORTS
import React from 'react';

const MessageInput = () => {
  return (
    <div className="message-input p-3 h-100">
      <textarea type="text" className="border-0 form-control h-100" id="" aria-describedby="message input field" placeholder="Write a message..." required />
    </div>
  );
};

export default MessageInput;