// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGE IMPORTS
import ForgottenPassword from './pages/Auth/ForgottenPassword';
import Home from './pages/Home';
import ResetPassword from './pages/Auth/ResetPassword';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';

// COMPONENT IMPORTS
import Flash from './components/Flash';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forgotten-password" exact="true" element={<ForgottenPassword />} />
          <Route path="/reset-password" exact="true" element={<ResetPassword />} />
          <Route path="/signin" exact="true" element={<Signin />} />
          <Route path="/signup" exact="true" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;