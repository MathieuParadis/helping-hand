// CONFIG IMPORTS
import React, { useEffect, useState } from 'react';

// ASSETS IMPORTS
import search_icon from '../assets/logos/search_logo.svg';

// COMPONENTS IMPORTS
import ChatBanner from '../components/ChatBanner';
import ChatCard from '../components/ChatCard';
import ChatConversation from '../components/ChatConversation';
import EditRequestModal from '../components/EditRequestModal';
import ShowRequestModal from '../components/ShowRequestModal';

// DATA IMPORTS
import chats from '../data/Chats';

const Chat = () => {
  const [currentChat, setCurrentChat] = useState("");

  const openChat = (chat) => {
    setCurrentChat(chat);
  }

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

  useEffect(() => {
    responsiveChat();
  }, [currentChat]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowRequestModal request={currentChat} setOpenEditModal={openEditRequestModal} setMarkRequestAsFulfilled={markRequestAsFulfilled} />
      <EditRequestModal request={currentChat} />
      <div className="chat d-flex justify-content-center">
        <div className="d-flex justify-content-center mx-0 w-100">
          <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
            <h1 className="text-primary text-center fw-bold pb-3 pb-lg-4">My chats</h1>
            <p className="back text-secondary align-self-start" onClick={() => setCurrentChat("")}>&#8592; Back</p>
            <div className="box box-border-grey d-flex flex-column border-radius-5 w-100 h-100">
              <div className="top-section row border-bottom-grey">
                <div className="selected-chat-section col-12 col-lg-8 pe-lg-0 ">
                  <div className="selected-chat-section-content">
                    <ChatBanner chat={currentChat} setOpenShowRequestModal={openShowRequestModal} />
                  </div>
                </div>
                <div className="search-chat-section col-12 col-lg-4 border-left-grey justify-content-center align-items-center ps-lg-0">
                  <div className="search-chat-section-content w-100">
                    <div className="input p-3">
                      <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="Search chat ..." required />
                      <img src={search_icon} alt="search_icon" className="search-icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-section row flex-grow-1">
                <div className="chat-message-section col-12 col-lg-8 pe-lg-0 h-100">
                  <div className="chat-message-section-content h-100">
                    <ChatConversation chat={currentChat} />
                  </div>
                </div>
                <div className="chat-index-section col-12 col-lg-4 border-left-grey ps-lg-0 h-100">
                  <div className="chat-index-section-content h-100">
                  {
                    chats && (
                      chats.map((chat) => {
                        return (
                          <ChatCard chat={chat} setChat={openChat} key={chat.request.title} />
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