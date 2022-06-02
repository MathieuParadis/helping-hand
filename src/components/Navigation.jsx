// CONFIG IMPORTS
import React, { useEffect, useState, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

// CONTEXT IMPORTS
import AuthContext from './Context/AuthContext';
import ChatContext from './Context/ChatContext';
import FlashContext from './Context/FlashContext';
import UserContext from './Context/UserContext';

// REACT BOOTSTRAP IMPORTS
import { DropdownButton, Dropdown } from 'react-bootstrap';

// COMPONENTS IMPORTS
import HamburgerMenu from './HamburgerMenu';

// ASSETS IMPORTS
import chat_logo from '../assets/logos/chat_logo.svg';
import chat_logo_hoovered from '../assets/logos/chat_logo_hoovered.svg';
import logo from '../assets/logos/helping_hand_logo_with_text.svg';
import logout_logo from '../assets/logos/logout_logo.svg';
import profile_round_logo from '../assets/logos/profile_round_logo.svg';

// CONSTANTS IMPORTS
import { API_ROOT } from '../constants/index';

const Navigation = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const { unreadChats, setUnreadChats } = useContext(ChatContext);
  const { flash, setFlash } = useContext(FlashContext);
  const { user } = useContext(UserContext);

  const [chats, setChats] = useState();

  const location = useLocation();
  const navigate = useNavigate()

  const refreshPage = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate("/");
    }
  }

  const openNewRequestModal = (e) => {
    const newRequestModal = document.querySelector(".new-request-modal");
    newRequestModal.style.visibility = 'visible';
    document.querySelector("body").classList.add("clicked");
  }

  const signOut = () => {
    localStorage.clear();
    setAuthenticated(false);
    setFlash({
      type: 'success',
      message: "Logged out successfully",
      display: true,
    });
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

    const interval = setInterval(() => {
      authenticated && getChats();
      console.log(chats)
    }, 3000);
    return () => clearInterval(interval);
  }, [authenticated]);


  useEffect(() => {
    const calculateUnreadChats = () => {     
      let unreadChatsArray = chats.filter((chat) => {
        return (chat.messages[chat.messages.length-1].read_status === 'unread' && chat.messages[chat.messages.length-1].user.id !== user.id)
      })
      setUnreadChats(unreadChatsArray.length)
    }

    console.log(chats);


    if (chats) {
      calculateUnreadChats();
      console.log(chats);
    }
  }, [chats, flash]);

  return (
    <>
      <HamburgerMenu />
      <div className="navigation">
        {!authenticated ? 
          (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={logo} alt="Helping Hand logo" className="logo pointer me-5" onClick={refreshPage} />
                <div className="d-none d-lg-flex">
                  <NavLink exact="true" to="/" className="navlink h4 me-4 me-xl-4 mb-0">Home</NavLink>
                  <NavLink exact="true" to="/how-it-works" className="navlink h4 mb-0">How it works</NavLink>
                </div>
              </div>
              <div className="connection-buttons d-none d-lg-flex">
                <NavLink exact="true" to="/signup" className="btn button-w150 button-primary border-radius-50 h4 me-3 mb-0">Sign up</NavLink>
                <NavLink exact="true" to="/signin" className="btn button-w150 button-outline-primary border-radius-50 h4 mb-0">Log in</NavLink>
              </div>
            </div>
          ) :
          (
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img src={logo} alt="Helping Hand logo" className="logo pointer me-5" onClick={refreshPage} />
                <div className="d-none d-lg-flex">
                  <NavLink exact="true" to="/" className="navlink h4 me-4 me-xl-4 mb-0">Home</NavLink>
                  <NavLink exact="true" to="/how-it-works" className="navlink h4 me-4 me-xl-4 mb-0">How it works</NavLink>
                  <p className="navlink h4 mb-0" onClick={() => openNewRequestModal()}>New request</p>
                </div>
              </div>    
              <div className="d-flex align-items-center">
                <NavLink exact="true" to="/my-chats" className="unread-chat d-flex align-items-center me-lg-4 pe-lg-4">
                  {
                    unreadChats > 0 && 
                    <>
                      <img src={chat_logo} alt="chat logo" className="chat-logo pointer me-2" onMouseOver={e => (e.currentTarget.src = chat_logo_hoovered)} onMouseOut={e => (e.currentTarget.src = chat_logo)}/>
                      <h4 className="m-0">{unreadChats}</h4>
                    </>
                  }

                </NavLink>
                <DropdownButton 
                  className="d-none d-lg-flex"
                  title={<img src={profile_round_logo} alt="logout logo" className="profile-logo pointer me-2" />}
                >
                  <Dropdown.Item href="/my-profile">My profile</Dropdown.Item>
                  <Dropdown.Item href="/my-requests">My requests</Dropdown.Item>
                  <Dropdown.Item href="/my-chats">My chats</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <div className="d-flex" onClick={() => signOut()}>
                      <img src={logout_logo} alt="logout logo" className="logout-logo pointer me-2" />
                      <p className="mb-0">Log out</p>
                    </div>
                  </Dropdown.Item>
                </DropdownButton>
              </div> 
            </div>
          )
        }
      </div> 
    </>
  );
};

export default Navigation;