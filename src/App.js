import React, { Component } from 'react';

import './App.css';
import countries from './countries';
import AutoCompleteText from './AutoCompleteText';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-component">
        <div className="App-Component">
        <AutoCompleteText items ={countries}/>
        </div>
      
          
        
        </div>
      </div>
    );
  }
}

export default App;
