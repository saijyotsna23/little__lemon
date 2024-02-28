
import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import Reservations from "./components/Reservations";


function App() {
  return (
    <>
    <div className="app-grid">
      <div className="header-nav">
      <Header/>
        
      <Nav/>
      </div > 
      
      <Routes>
        <Route path='/' element={<Main/>}>HomePage</Route>
        <Route path='/menu' element={<Menu/>}>Menu</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path="/reservations" element={<Reservations/>}></Route>
        </Routes>
      

      <Footer/>
      </div>
      
    </>
  );
}

export default App;
