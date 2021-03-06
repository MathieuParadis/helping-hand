// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

// CONTEXT IMPORTS
import ChatContext from '../components/Context/ChatContext';
import FlashContext from '../components/Context/FlashContext';
import UserContext from './Context/UserContext';

// ASSETS IMPORTS
import expired_banner from '../assets/images/expired_banner.svg';
import fulfilled_banner from '../assets/images/fulfilled_banner.svg';

// CONSTANTS IMPORTS
import { API_ROOT } from '../constants/index';

const ShowRequestModal = ({request, setOpenEditModal, setMarkRequestAsFulfilled, setRepublishRequest}) => {
  const { chat, setChat } = useContext(ChatContext);
  const { flash, setFlash } = useContext(FlashContext);
  const { user } = useContext(UserContext);

  const [volunteered, setVolunteered] = useState(false);
  const [chats, setChats] = useState();

  const closeShowRequestModal = () => {
    const showRequestModal = document.querySelector(".show-request-modal");
    showRequestModal.style.visibility = "hidden";
    document.querySelector("body").classList.remove("clicked");
  }

  const compareChatRequetsToCurrentRequest = () => {
    let filteredChat = chats.filter((chat) => {
      return chat.request.id === request.id &&
            chat.volunteer.id === user.id && 
            chat.requester.id === request.user.id
    })

    if (filteredChat.length !== 0) {
      setVolunteered(true);
      setChat(filteredChat[0]);
    } else {
      setVolunteered(false);
    }
  }

  const createChat = () => {
    const data = {
      request_id: request.id,
      requester_id: request.user.id, 
      volunteer_id: user.id,
    };

    const url = `${API_ROOT}/chats`;
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
      return response.json();
    })
    .then(response => {
      // console.log(response);
      closeShowRequestModal();
      setChat(response);
      setFlash({});
    })
    .catch(errors => {
      // console.log(errors);
      setFlash({
        type: 'danger',
        message: "An error occured, please try again",
        display: true,
      });
    })
  }

  const scrollTopComponent = () => {
    const modalTitle = document.querySelector(".show-request-modal-title");
    modalTitle.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const getChats = () => {
      const url = `${API_ROOT}/chats`;
      const token = localStorage.getItem('jwt_token');
  
      fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
      })
      .then(response => {
        // console.log(response);
        return response.json()
      })
      .then(response => {
        // console.log(response);
        setChats(response);
      })
      .catch(errors => {
        // console.log(errors);
        setFlash({
          type: 'danger',
          message: "An error occured, please try again",
          display: true,
        });
      })
    }

    getChats();
  }, [flash]);

  useEffect(() => {
    if (request && request !== '') {
      scrollTopComponent();
    }
  }, [request]);

  useEffect(() => {
    if (chats && request) {
      compareChatRequetsToCurrentRequest();
    }
  }, [chats, request, volunteered]);

  return (
    <div className="show-request-modal">
      <div className="show-request-modal-overlay"></div>
      <div className="show-request-modal-white-bg">
        <p className="close-button pointer h4 text-secondary" onClick={() => closeShowRequestModal()}>x</p>
        {request && (
            <div className="show-request-modal-content d-flex flex-column justify-content-between w-100 p-4 p-md-5">
              <div className="d-flex flex-column">
                <h2 className="show-request-modal-title text-primary text-center fw-bold mb-5">{request.title}</h2>
                <p className="mb-4">
                  <strong>Requester: </strong>
                  {request.user.first_name} {request.user.last_name}
                  { user.id === request.user.id && (" (yourself)") }
                </p>
                <p className="mb-4"><strong>Type: </strong>{request.request_type}</p>
                <p className="mb-4"><strong>Location: </strong>{request.location}</p>
                <p className="mb-4"><strong>Description: </strong>{request.description}</p>
                <p className="mb-4"><strong>Status: </strong>{request.status}</p>

                { request.status === 'expired' && (<img src={expired_banner} alt="expired banner" className="banner align-self-center" />) }
                { request.status === 'fulfilled' && (<img src={fulfilled_banner} alt="fulfilled banner" className="banner align-self-center" />) }
              </div>
              {
                user.id === request.user.id ? 
                ( 
                  request.status !== 'fulfilled' ? 
                  (
                    <div className="d-flex flex-column flex-md-row mt-4">
                      <button className="btn button-primary button-modal me-0 me-md-2 mb-2 mb-md-0 p-1" onClick={() => setOpenEditModal(request)}>Edit request</button>
                      <button className="btn button-outline-primary button-modal mx-0 mx-md-2 p-1" onClick={() => setMarkRequestAsFulfilled(request)}>Mark as fulfilled</button>
                      {
                        request.status === 'expired' && 
                        <button className="btn button-outline-primary button-modal ms-0 ms-md-2 p-1" onClick={() => setRepublishRequest(request)}>Republish request</button>
                      }
                    </div>
                  ) : 
                  (
                    <div className="d-flex flex-column flex-md-row mt-4">
                      <button className="btn button-primary button-modal me-0 me-md-2 mb-2 mb-md-0 p-1" disabled>Edit request</button>
                      <button className="btn button-outline-primary button-modal ms-0 ms-md-2 p-1" disabled>Mark as fulfilled</button>
                    </div>
                  )
                ) :
                (
                  volunteered && chat !== '' ? 
                    <div className="d-flex flex-column flex-md-row mt-4">
                      <NavLink exact="true" to="/my-chats" className="btn button-primary button-modal me-0 me-md-2 mb-2 mb-md-0 p-1" onClick={() => closeShowRequestModal()}>Open chat</NavLink>
                      {
                        request.status !== 'fulfilled' ? 
                        <button className="btn button-outline-primary button-modal mx-0 mx-md-2 p-1" onClick={() => setMarkRequestAsFulfilled(request)}>Mark as fulfilled</button> :
                        <button className="btn button-outline-primary button-modal ms-0 ms-md-2 p-1" disabled>Mark as fulfilled</button>
                      }
                    </div>
                    :
                  <NavLink exact="true" to="/my-chats" className="btn button-primary button-modal mt-4 p-1" onClick={() => createChat()}>Volunteer</NavLink>
                )
              }
            </div>
          )}
      </div>
    </div>
  );
};

export default ShowRequestModal;