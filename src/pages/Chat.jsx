// CONFIG IMPORTS
import React, {useEffect} from 'react';

const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chat">
      <h1>My chats</h1>
    </div>
  );
};

export default Chat;