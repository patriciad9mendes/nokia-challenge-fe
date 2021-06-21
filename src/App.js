import React from 'react';
import ReactDOM from 'react-dom';

//Style
import './App.css';

//Components
import Header from './components/Header.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
