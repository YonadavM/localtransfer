import logo from './logo.svg';
import './App.css';
import Navigation from './components/NavigationBar'
import MainScreen from './components/MainScreen'
import React, { useState, useEffect } from 'react';

function App() {

  const [screenState, setScreenState] = useState(0);

  return (
    <div className="App">
      <Navigation setScreenState={setScreenState}/>
      <MainScreen screenState={screenState} setScreenState={setScreenState}/>
    </div>
  );
}

export default App;
