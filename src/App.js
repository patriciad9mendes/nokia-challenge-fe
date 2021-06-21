import React from 'react';
import ReactDOM from 'react-dom';

//Style
import './App.css';

//Components
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';

class App extends React.Component {
  render() {
    return (
        <div className="flex-contaier">
          <Header/>
          <Navbar/>
        </div>
    );
  }
}

export default App;
