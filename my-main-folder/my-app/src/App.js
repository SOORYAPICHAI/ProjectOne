import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/index'
import ContentOne from './ContentOne/index'
import ContentTwo from './ContentTwo/index'
import ContentThree from './ContentThree/index'

function App() {
  return (
    <div className="App">
      <Header />
      <ContentOne />
      <ContentTwo />
      <ContentThree />

    </div>
  );
}

export default App;
