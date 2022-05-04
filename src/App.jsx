// CONFIG IMPORTS
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// CONTEXT IMPORTS
import AuthContext from './components/Context/AuthContext';
import FlashContext from './components/Context/FlashContext';

// PAGE IMPORTS
import Chat from './pages/Chat';
import ForgottenPassword from './pages/Auth/ForgottenPassword';
import Home from './pages/Home';
import MapRequests from './pages/MapRequests';
import Profile from './pages/Profile';
import ResetPassword from './pages/Auth/ResetPassword';
import Rules from './pages/Rules';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import UserRequests from './pages/UserRequests';

// COMPONENT IMPORTS
import Flash from './components/Flash';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import NewRequestModal from './components/NewRequestModal';

// REACT FONTAWESOME IMPORTS
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const App = () => { 
  const emptyFlash = {
    type: "",
    message: "",
    display: false,
  }

  const [authenticated, setAuthenticated] = useState(false);
  const [flash, setFlash] = useState(emptyFlash);

  const isUserAuthenticated = () => {
    return localStorage.getItem('jwt_token') !== null ? setAuthenticated(true) : setAuthenticated(false);
  };

  useEffect(() => {
    isUserAuthenticated();
  }, [authenticated]);

  return (
    <div className="app">
      <AuthContext.Provider value={{authenticated, setAuthenticated}}>
        <FlashContext.Provider value={{flash, setFlash}}>
          <Router>
            <Navigation />
            <Flash />
            <NewRequestModal />
            <Routes>
              <Route path="/" element={authenticated ? <MapRequests /> : <Home />} />
              <Route path="/how-it-works" exact="true" element={<Rules />} />
              <Route path="/signin" exact="true" element={authenticated ? <Navigate to="/" replace /> : <Signin />} />
              <Route path="/signup" exact="true" element={authenticated ? <Navigate to="/" replace /> : <Signup />} />
              <Route path="/forgotten-password" exact="true" element={authenticated ? <Navigate to="/my-profile" replace /> : <ForgottenPassword />} />
              <Route path="/reset-password" exact="true" element={authenticated ? <Navigate to="/my-profile" replace /> : <ResetPassword />} />
              <Route path="/my-chats" exact="true" element={authenticated ? <Chat /> : <Navigate to="/" replace />} />
              <Route path="/my-profile" exact="true" element={authenticated ? <Profile /> : <Navigate to="/" replace />} />
              <Route path="/my-requests" exact="true" element={authenticated ? <UserRequests /> : <Navigate to="/" replace />} />
            </Routes>
            <Footer />
          </Router>
        </FlashContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;