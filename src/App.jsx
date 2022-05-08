// CONFIG IMPORTS
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// CONTEXT IMPORTS
import AuthContext from './components/Context/AuthContext';
import FlashContext from './components/Context/FlashContext';
import UserContext from './components/Context/UserContext';

// PAGE IMPORTS
import Chat from './pages/Chat';
import ForgottenPassword from './pages/Auth/ForgottenPassword';
import Home from './pages/Home';
import MapRequests from './pages/MapRequests';
import NotFound from './pages/NotFound';
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
  const [authenticated, setAuthenticated] = useState(false);
  const [flash, setFlash] = useState({});
  const [user, setUser] = useState({});
  const token = localStorage.getItem('jwt_token');

  const isUserAuthenticated = () => {
    return (token !== null ? true : false) 
  }

  const handleAuthenticationContext = () => {
    return (token !== null ? setAuthenticated(true) : setAuthenticated(false)) 
  }

  useEffect(() => {
    isUserAuthenticated();
    handleAuthenticationContext();
  }, [token]);

  useEffect(() => {
    if(localStorage.getItem('user') !== null ) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [user]);

  return (
    <div className="app">
      <AuthContext.Provider value={{authenticated, setAuthenticated}}>
        <FlashContext.Provider value={{flash, setFlash}}>
          <UserContext.Provider value={{user, setUser}}>
            <Router>
              <Navigation />
              <Flash />
              <NewRequestModal />
              <Routes>
                <Route path="/" exact="true" element={isUserAuthenticated() ? <MapRequests /> : <Home />} />
                <Route path="/how-it-works" exact="true" element={<Rules />} />
                <Route path="/signin" exact="true" element={isUserAuthenticated() ? <Navigate to="/" replace /> : <Signin />} />
                <Route path="/signup" exact="true" element={isUserAuthenticated() ? <Navigate to="/" replace /> : <Signup />} />
                <Route path="/forgotten-password" exact="true" element={isUserAuthenticated() ? <Navigate to="/my-profile" replace /> : <ForgottenPassword />} />
                <Route path="/reset-password/:tokenSlug" exact="true" element={isUserAuthenticated() ? <Navigate to="/my-profile" replace /> : <ResetPassword />} />
                <Route path="/my-chats" exact="true" element={isUserAuthenticated() ? <Chat /> : <Navigate to="/" replace />} />
                <Route path="/my-profile" exact="true" element={isUserAuthenticated() ? <Profile /> : <Navigate to="/" replace />} />
                <Route path="/my-requests" exact="true" element={isUserAuthenticated() ? <UserRequests /> : <Navigate to="/" replace />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </Router>
          </UserContext.Provider>
        </FlashContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;