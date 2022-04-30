// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

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

  const isUserAuthenticated = () => {
    return localStorage.getItem('jwt_token') !== null ? true : false
  };


  return (
    <div className="app">
      <Router>
        <Navigation />
        <Flash />
        <NewRequestModal />
        <Routes>
          <Route path="/" element={isUserAuthenticated() ? <MapRequests /> : <Home />} />
          <Route path="/how-it-works" exact="true" element={<Rules />} />
          <Route path="/signin" exact="true" element={isUserAuthenticated() ? <Navigate to="/" replace /> : <Signin />} />
          <Route path="/signup" exact="true" element={isUserAuthenticated() ? <Navigate to="/" replace /> : <Signup />} />
          <Route path="/forgotten-password" exact="true" element={isUserAuthenticated() ? <Navigate to="/my-profile" replace /> : <ForgottenPassword />} />
          <Route path="/reset-password" exact="true" element={isUserAuthenticated() ? <Navigate to="/my-profile" replace /> : <ResetPassword />} />
          <Route path="/my-chats" exact="true" element={isUserAuthenticated() ? <Chat /> : <Navigate to="/" replace />} />
          <Route path="/my-profile" exact="true" element={isUserAuthenticated() ? <Profile /> : <Navigate to="/" replace />} />
          <Route path="/my-requests" exact="true" element={isUserAuthenticated() ? <UserRequests /> : <Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;