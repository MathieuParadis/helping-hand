// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGE IMPORTS
import Home from './pages/Home';

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
          {/* <Route path="/area" exact="true" element={<Area />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;