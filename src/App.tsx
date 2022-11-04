import React from 'react';

import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NoPage from './Pages/NoPage';
import DetailsPage from './Pages/DetailsPage';
import { StyledEngineProvider } from "@mui/material";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/search" element={<HomePage/>}/>
          <Route path="/search/foo" element={<NoPage/>} />
          <Route path="/search/bar/" element={<NoPage/>} />
          <Route path="/search/details/" element={<NoPage/>} />
          <Route path="/search/details/foo" element={<DetailsPage/>} />
          <Route path="/search/details/bar" element={<DetailsPage/>} />
          <Route path="/search/details/bar/foo" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
