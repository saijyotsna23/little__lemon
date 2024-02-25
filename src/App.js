
import React from "react";
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <div className="app-grid">
      <div className="header-nav">
      <Header/>
        
      <Nav/>
       </div > 
      <Main/>
        
      <Footer/>
      </div>
      
    </>
  );
}

export default App;
