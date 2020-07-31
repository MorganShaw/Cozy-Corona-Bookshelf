import React from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header'

class App extends React.Component {
  constructor() {
    super();
    this.state  = {
      // books: 
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
