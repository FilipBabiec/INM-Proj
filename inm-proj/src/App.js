import React from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import { FooterContainer } from './containers/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router> */}
      <FooterContainer />
    </div>
  );
}

export default App;
