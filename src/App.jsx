// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
import NewUserRequestModal from './components/NewUserRequestModal';

// REACT FONTAWESOME IMPORTS
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Flash />
        <NewUserRequestModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-chats" element={<Chat />} />
          <Route path="/forgotten-password" exact="true" element={<ForgottenPassword />} />
          <Route path="/all-requests" element={<MapRequests />} />
          <Route path="/my-profile" exact="true" element={<Profile />} />
          <Route path="/reset-password" exact="true" element={<ResetPassword />} />
          <Route path="/how-it-works" exact="true" element={<Rules />} />
          <Route path="/signin" exact="true" element={<Signin />} />
          <Route path="/signup" exact="true" element={<Signup />} />
          <Route path="/my-requests" exact="true" element={<UserRequests />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;