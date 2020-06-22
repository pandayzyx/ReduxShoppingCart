import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from  "./Components/Navbar"
import PublicRouter from "./Router/PublicRouter"

function App() {
  return (
    <div className="App">
    rdux shopping cart
    <Navbar/>
    <PublicRouter/>
    </div>
  );
}

export default App;
