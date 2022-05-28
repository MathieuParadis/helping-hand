// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import FlashContext from '../Context/FlashContext';
import UserContext from '../Context/UserContext';

// CONSTANTS IMPORTS
import { API_ROOT } from '../../constants/index';

const MessageInput = ({currentChat}) => {
  const { setFlash } = useContext(FlashContext);
  const { user } = useContext(UserContext);

  const [messageText, setMessageText] = useState('');

  const createMessage = (e) => {
    e.preventDefault();

    const data = {
      content: messageText,
      chat_id: currentChat.id,
      user_id: user.id
    };

    const url = `${API_ROOT}/messages`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      // console.log(response);

      if(response.ok) {
        setMessageText('');
      } else {
        setFlash({
          type: 'danger',
          message: "An error occured, please try again",
          display: true,
        });
      }

      return response.json()
    })
    .then((response) => {
      // console.log(response);
    })
    .catch(errors => {
      console.log(errors);
      setFlash({
        type: 'danger',
        message: "An error occured, please try again",
        display: true,
      });
    })
  }

  const disableMessageArea = () => {
    const input = document.querySelector('#message-input-field');
    currentChat === '' ? input.setAttribute('disabled', true) : input.removeAttribute('disabled');
  }

  useEffect(() => {
    disableMessageArea();
  });

  return (
    <div className="message-input p-3 h-100">
      <form onSubmit={createMessage} className="h-100">
        <input type="text" className="border-0 form-control h-100" id="message-input-field" aria-describedby="message input field" value={messageText} onChange={(e) => setMessageText(e.target.value)} placeholder="Write a message..." required />
      </form>
    </div>
  );
};

export default MessageInput;