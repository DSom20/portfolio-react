import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../Nav';
import Routes from '../Routes';
import Footer from '../Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
