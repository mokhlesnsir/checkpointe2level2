import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Header from "./components/Header";
import  Main from "./components/Main";
import  Footer from "./components/Footer";
import tswira from "./testme.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <Header/>
        <Main/>
        <Footer/>
        <img src={tswira} /> 
      </header>
    </div>
  );
}

export default App;
