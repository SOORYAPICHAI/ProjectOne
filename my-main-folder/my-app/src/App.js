import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/index'
import ContentOne from './ContentOne/index'
import ContentTwo from './ContentTwo/index'
import ContentThree from './ContentThree/index'
import ContentFour from './ContentFour/index'

function App() {
  return (
    <div className="App">
      <Header />
      <ContentOne />
      
      <ContentThree />
      <ContentFour />
      {/* <ContentTwo /> */}

    </div>
  );
}

export default App;
