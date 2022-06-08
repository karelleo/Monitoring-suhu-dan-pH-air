/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sistem from './components/Sistem';
import React, { useState } from "react";


function App() {
  return (

    

<div>
    <div>
  <div className="jumbotron">
           <img src="https://i.ibb.co/cLqJNZH/HIDROPONIK-KRL.png"className="image"/> <h1 className="h1-header">Client Web  Tugas Akhir Karel Leo Rivaldo</h1>
           <p className="p-header">"Sistem Monitoring Suhu dan Pengendali PH Air Untuk Tanaman Hidroponik Berbasis IoT (INTERNET OF THINGS)"</p>
       </div>
       </div>
       <br></br>
    
  
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Sistem />} />
          </Routes>
        </Router>
      </div>

      <footer className='footer-bottom'>
            <p>copyright &copy; Teknik Informatika 2022 -- Client Web </p>

      </footer>
  </div>
  );
}

export default App;
