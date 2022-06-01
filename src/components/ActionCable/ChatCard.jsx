// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';
import UserContext from '../Context/UserContext';

// CONSTANTS IMPORTS
import { API_ROOT } from '../../constants/index';

const ChatCard = ({chat}) => {
  const { setChat } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  const [unreadMessages, setUnreadMessages] = useState([]);

  const getUnreadMessages = (chat) => {     
    let unreadMessagesArray = chat.messages.filter((message) => {
      return (message.read_status === 'unread' && message.user.id !== user.id)
    })
    setUnreadMessages(unreadMessagesArray);
  }

  const markMessageAsRead = (message) => {
    const { id } = message
    const data = {
      read_status: "read",
      chat_id: message.chat_id
    };

    const url = `${API_ROOT}/messages/${id}`;
    const token = localStorage.getItem('jwt_token');

    fetch(url, {
      method: "PUT",
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const markAllMessagesAsRead = (chat) => {
    getUnreadMessages(chat);
    unreadMessages.map((message) => {
      return (markMessageAsRead(message))
    })
  }

  useEffect(() => {
    getUnreadMessages(chat);
  }, []);
  
  return (
    <div className="chat-card w-100 border-bottom-grey p-3 d-flex flex-column justify-content-between pointer" onClick={() => {markAllMessagesAsRead(chat); setChat(chat)}}>
      <h5>{chat.request.title}</h5>
      <h5>{unreadMessages.length}</h5>
      <p className="mb-1">
        Requester: {chat.requester.first_name} {chat.requester.last_name}
        <small>{chat.requester.id === user.id && " (yourself)"}</small>
      </p>
      <p className="m-0">
        Volunteer: {chat.volunteer.first_name} {chat.volunteer.last_name}
        <small>{chat.volunteer.id === user.id && " (yourself)"}</small>        
      </p>
    </div>
  );
};

export default ChatCard;