/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from './components/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import LihatProduct from './components/LihatProduct';
import UpdateTesting from './components/UpdateTesting';
import Sistem from './components/Sistem';
import React, { useState } from "react";
import { Navbar } from 'react-bootstrap'
import BarChart from './components/BarChart';
import Fuzzy from './components/Fuzzy';


function App() {
  return (

    

<div>
  <div>
  <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src="https://i.ibb.co/cLqJNZH/HIDROPONIK-KRL.png" width="60px" height="60px" />{' '}
          <a className="navbar-brand" href="/">Sistem Hidroponik</a>
        </Navbar.Brand>

        <Navbar.Toggle  className="coloring"/>
        <Navbar.Collapse>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" aria-current="page" href="/sistem">Sistem</a>
                </li>
                <li className="nav-item nav_posisi">
                  <a className="nav-link active" aria-current="page" href="/admin">Data</a>
                </li>
              </ul>
        </Navbar.Collapse>

      </Navbar>
  </div>
    <div>
  <div className="jumbotron">
           <img src="https://i.ibb.co/cLqJNZH/HIDROPONIK-KRL.png"className="image"/> <h1 className="h1-header">Server Tugas Akhir Karel Leo Rivaldo</h1>
           <p className="p-header">"Sistem Monitoring Suhu dan Pengendali PH Air Untuk Tanaman Hidroponik Berbasis IoT (INTERNET OF THINGS)"</p>
       </div>
       </div>
       <br></br>
    
  
      <div className="container">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin" element={<ProductList />} />
            <Route exact path="/add" element={<AddProduct />} />
            <Route exact path="/edit/:id" element={<EditProduct />} />
            <Route exact path="/lihat/:id" element={<LihatProduct />} />
            <Route exact path="/sistem" element={<Sistem />} />
            <Route exact path="/editdht11/:id" element={<UpdateTesting />} />
            <Route exact path="/barchart" element={<BarChart />} />
            <Route exact path="/Fuzzy" element={<Fuzzy />} />
          </Routes>
        </Router>
      </div>

      <footer>
        <div class="footer-content">
            <h3>Tanaman Hidroponik</h3>
            <p>Tanaman hidroponik merupakan cara bercocok tanam dengan tidak
menggunakan tanah sebagai media tanam, melainkan menggunakan air sebagai
media utama dalam proses pertumbuhan tanaman yang digunakan dalam website ini berisi mengenai monitoring sensor pH air, suhu air, suhu ruangan, dan kelembapan untuk pertumbuhan tanaman hidroponik.</p>
        </div>
        <div class="footer-bottom">
            <p>copyright &copy; Teknik Informatika 2022 </p>
        </div>
      </footer>
  </div>
  );
}

export default App;
