import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CorkEdge from '../CorkEdge';
import WhiteboardXl from '../WhiteboardXl';
import Nav from '../Nav';
import Routes from '../Routes';
import Footer from '../Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <CorkEdge>
          <Nav />
        </CorkEdge>

        <WhiteboardXl>
          <Routes />
        </WhiteboardXl>
        

        <CorkEdge>
          <Footer />
        </CorkEdge>

      </div>
    </BrowserRouter>
  );
}

export default App;
