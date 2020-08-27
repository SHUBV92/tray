import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import User from "./containers/user/User.jsx"
import Navbar from './containers/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <User />      
    </div>
  );
}

export default App;
