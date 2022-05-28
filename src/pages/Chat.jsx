// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';

// CONTEXT IMPORTS
import ChatContext from '../components/Context/ChatContext';
import FlashContext from '../components/Context/FlashContext';

// ACTION CABLE IMPORT
import { ActionCable } from 'react-actioncable-provider';

// ASSETS IMPORTS
import search_icon from '../assets/logos/search_logo.svg';

// COMPONENTS IMPORTS
import Cable from '../components/ActionCable/Cable';
import ChatBanner from '../components/ActionCable/ChatBanner';
import ChatCard from '../components/ActionCable/ChatCard';
import ChatConversation from '../components/ActionCable/ChatConversation';
import EditRequestModal from '../components/EditRequestModal';
import MessageInput from '../components/ActionCable/MessageInput';
import ShowRequestModal from '../components/ShowRequestModal';

// CONSTANTS IMPORTS
import { API_ROOT } from '../constants/index';

const Chat = () => {
  const { chat, setChat } = useContext(ChatContext);
  const { setFlash } = useContext(FlashContext);

  const [keyword, setKeyword] = useState('');
  const [chats, setChats] = useState();
  const [filteredChats, setFilteredChats] = useState();
  const [currentChat, setCurrentChat] = useState(chat ? chat : '');

  const openChat = (chat) => {
    setCurrentChat(chat);
    setChat(chat);
  }

  // ACTION CABLE
  const handleReceivedChat = (response) => {
    const chat = response;
    setChats([...chats, chat]);
  };

  const handleReceivedMessage = (response) => {
    const message = response;
    const userChats = [...chats];
    const chat = currentChat;
    chat.messages = [...chat.messages, message];
    setFilteredChats(userChats);
  };
  // ACTION CABLE

  const openShowRequestModal = () => {
    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'visible';
    editRequestModal.style.visibility = 'hidden';
    document.querySelector("body").classList.add("clicked");
  }

  const openEditRequestModal = () => {
    const newRequestModal = document.querySelector(".new-request-modal");
    const showRequestModal = document.querySelector(".show-request-modal");
    const editRequestModal = document.querySelector(".edit-request-modal");

    newRequestModal.style.visibility = 'hidden';
    showRequestModal.style.visibility = 'hidden';
    editRequestModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const markRequestAsFulfilled = () => {
    alert(currentChat.request.title + " marked as fulfilled");
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
        })
      })
    }

    getChats();
  }, []);

  useEffect(() => {
    const filterChats = () => {
      if (keyword === '') {
        setFilteredChats(chats);
      }
      else {
        let filtered = chats.filter((chat) => {
          return chat.request.title.toLowerCase().includes(keyword.toLowerCase()) || 
                chat.request.request_type.toLowerCase().includes(keyword.toLowerCase()) ||
                chat.requester.first_name.toLowerCase().includes(keyword.toLowerCase()) ||
                chat.requester.last_name.toLowerCase().includes(keyword.toLowerCase()) ||
                chat.volunteer.first_name.toLowerCase().includes(keyword.toLowerCase()) ||
                chat.volunteer.last_name.toLowerCase().includes(keyword.toLowerCase()) 
        })
        setFilteredChats(filtered);
      }    
    }

    filterChats();
  }, [chats]);

  useEffect(() => {
    const responsiveChat = () => {
      const back = document.querySelector(".back");
      const selectedChatSection = document.querySelector(".selected-chat-section");
      const searchChatSection = document.querySelector(".search-chat-section");
      const chatMessageSection = document.querySelector(".chat-message-section");
      const chatIndexSection = document.querySelector(".chat-index-section");
  
      if (currentChat === "") {
        back.classList.remove("d-block", "d-lg-none");
        back.classList.add("d-none");
  
        selectedChatSection.classList.remove("d-block");
        selectedChatSection.classList.add("d-none", "d-lg-block");
  
        searchChatSection.classList.remove("d-none", "d-lg-flex");
        searchChatSection.classList.add("d-flex");
        
        chatMessageSection.classList.remove("d-block");
        chatMessageSection.classList.add("d-none", "d-lg-block");
  
        chatIndexSection.classList.remove("d-none", "d-lg-block");
        chatIndexSection.classList.add("d-block");
      } else {
        back.classList.remove("d-none");
        back.classList.add("d-block", "d-lg-none");
  
        selectedChatSection.classList.remove("d-none", "d-lg-block");
        selectedChatSection.classList.add("d-block");
  
        searchChatSection.classList.remove("d-flex");
        searchChatSection.classList.add("d-none", "d-lg-flex");
  
        chatMessageSection.classList.remove("d-none", "d-lg-block");
        chatMessageSection.classList.add("d-block");
  
        chatIndexSection.classList.remove("d-block");
        chatIndexSection.classList.add("d-none", "d-lg-block");
      }
    }

    responsiveChat();
  }, [currentChat, chat]);

  useEffect(() => {
    if (chat) {
      setCurrentChat(chat);
    };
  }, [chat]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowRequestModal request={currentChat.request} setOpenEditModal={openEditRequestModal} setMarkRequestAsFulfilled={markRequestAsFulfilled} />
      <EditRequestModal request={currentChat.request} />
      <div className="chat d-flex justify-content-center">
        <div className="d-flex justify-content-center mx-0 w-100">
          <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
            <h1 className="text-primary text-center fw-bold pb-3 pb-lg-4">My chats</h1>
            <p className="back text-secondary align-self-start" onClick={() => setCurrentChat("")}>&#8592; Back</p>
            <div className="box box-border-grey d-flex flex-column border-radius-5 w-100 h-100">
              <div className="top-section row border-bottom-grey">
                <div className="selected-chat-section col-12 col-lg-8 pe-lg-0 ">
                  <div className="selected-chat-section-content">
                    <ChatBanner currentChat={currentChat} setOpenShowRequestModal={openShowRequestModal} />
                  </div>
                </div>
                <div className="search-chat-section col-12 col-lg-4 border-left-grey justify-content-center align-items-center ps-lg-0">
                  <div className="search-chat-section-content w-100">
                    <div className="input p-3">
                      <input type="text" className="form-control" id="search-keyword" aria-describedby="search input field" value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Search chat..." required />
                      <img src={search_icon} alt="search_icon" className="search-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-section row flex-grow-1">
                <div className=" d-flex flex-column chat-message-section col-12 col-lg-8 pe-lg-0 h-100">
                  <div className="chat-message-section-content flex-grow-1">
                    {/* <ChatConversation currentChat={currentChat} /> */}

                    {/* {
                      chats && 
                        <>                       
                          <ActionCable channel={{ channel: 'ChatsChannel' }} onReceived={handleReceivedChat} />
                          <Cable chats={chats} handleReceivedMessage={handleReceivedMessage} currentChat={currentChat}/>
                        </>
                    } */}


                  </div>
                  <div className="chat-message-section-input">
                    <MessageInput currentChat={currentChat} handleReceivedMessage={handleReceivedMessage} />
                  </div>
                </div>
                <div className="chat-index-section col-12 col-lg-4 border-left-grey ps-lg-0 h-100">
                  <div className="chat-index-section-content h-100">









                    {
                      filteredChats && (
                        filteredChats.map((chat) => {
                          return (
                            <ChatCard chat={chat} setChat={openChat} key={chat.id} />
                          )
                        })
                      )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
