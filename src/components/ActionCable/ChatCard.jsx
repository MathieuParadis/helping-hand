// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../Context/ChatContext';
import UserContext from '../Context/UserContext';

// CONSTANTS IMPORTS
import { API_ROOT } from '../../constants/index';

const ChatCard = ({chatEl}) => {
  const { chat, setChat } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  const [unreadMessages, setUnreadMessages] = useState([]);

  const getUnreadMessages = (chatEl) => {     
    let unreadMessagesArray = chatEl.messages.filter((message) => {
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

  const markAllMessagesAsRead = (chatElement) => {
    getUnreadMessages(chatElement);
    unreadMessages.map((message) => {
      return (markMessageAsRead(message))
    })
  }

  useEffect(() => {
    getUnreadMessages(chatEl);
  }, [chatEl, chatEl.messages]);

  useEffect(() => {
    if (chat.id === chatEl.id && unreadMessages.length > 0) {
      markAllMessagesAsRead(chatEl);
      setUnreadMessages([]);
    }
  }, [chatEl, chatEl.messages, unreadMessages]);

  return (
    <div className="chat-card w-100 border-bottom-grey p-3 d-flex flex-column justify-content-between pointer" onClick={() => {markAllMessagesAsRead(chatEl); setChat(chatEl)}}>
      <h4 className={(chat && chat.id === chatEl.id) ? 'text-primary mb-4' : 'mb-4'}>{chatEl.request.title}</h4>
      <h5 className={unreadMessages.length > 0 ? 'text-ternary' : 'd-none'}>{unreadMessages.length} new {unreadMessages.length === 1 ? 'message' : 'messages'}</h5>
      <p className="mb-1">
        Requester: {chatEl.requester.first_name} {chatEl.requester.last_name}
        <small>{chatEl.requester.id === user.id && " (yourself)"}</small>
      </p>
      <p className="m-0">
        Volunteer: {chatEl.volunteer.first_name} {chatEl.volunteer.last_name}
        <small>{chatEl.volunteer.id === user.id && " (yourself)"}</small>        
      </p>
    </div>
  );
};

export default ChatCard;