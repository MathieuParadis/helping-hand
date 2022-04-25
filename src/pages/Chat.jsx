// CONFIG IMPORTS
import React, {useEffect, useState} from 'react';

// ASSETS IMPORTS
import search_icon from '../assets/logos/search_logo.svg';

// COMPONENTS IMPORTS
import ChatBanner from '../components/ChatBanner';
import ChatCard from '../components/ChatCard';
import ShowRequestModal from '../components/ShowRequestModal';

// DATA IMPORTS
import chats from '../data/Chats';

const Chat = () => {
  const [currentChat, setCurrentChat] = useState("");

  const openChat = (chat) => {
    setCurrentChat(chat);
  }

  const openShowRequestModal = () => {
    const modal = document.querySelector(".show-request-modal");
    modal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ShowRequestModal request={currentChat} />

      <div className="chat d-flex justify-content-center">
        <div className="container d-flex justify-content-center mx-0 w-100">
          <div className="d-flex flex-column align-items-center my-3 py-3 w-100">
            <h1 className="text-primary text-center fw-bold pb-3 pb-md-4">My chats</h1>
            <div className="box box-border-grey border-radius-5 w-100 h-100">
            
              <div className="row border-bottom-grey">
                <div className="col-12 col-md-7 col-lg-8">
                <ChatBanner chat={currentChat} setOpenShowRequestModal={openShowRequestModal} />
                </div>
                <div className="col-12 col-md-5 col-lg-4 border-left-grey d-flex justify-content-center align-items-center ps-0">
                  <div className="input p-3">
                    <input type="text" className="form-control" id="first-name" aria-describedby="first_name input field" placeholder="Search chat ..." required />
                    <img src={search_icon} alt="search_icon" className="search-icon" />
                  </div>
                </div>
              </div>

              <div className="row h-100">
                <div className="col-12 col-md-7 col-lg-8">
                  request
                </div>
                
                <div className="col-12 col-md-5 col-lg-4 border-left-grey ps-0">
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
    </>
  );
};

export default Chat;