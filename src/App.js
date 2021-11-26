import logo from './logo.svg';
import './App.css';
import React from "react";
// import Webcam from "react-webcam";

// const WebcamComponent = () => <webcam />

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hello
        </a>
      </header>
    </div>
  );
}

export default App;
