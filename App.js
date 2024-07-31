import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Products from './products';
import About from './About';
import TotalPrice from './TotalPrice';
import './App.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

// Main App Component 
const App = () => {
  // State to keep track of the total price
  const [totalPrice,setTotalPrice] = useState(0);



  return (
    <Router>
      <div className="App">
        <NavBar />
        <TotalPrice totalPrice={totalPrice}/>
        {/* Defining Home, Products and About routes for the application */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/*passing totalPrice and setTotalPrice as props */}
          <Route path="/products" element={<Products totalPrice={totalPrice} setTotalPrice={setTotalPrice} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;