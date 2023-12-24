import React from 'react';
import { Brand, Cta, Navbar } from './Components';
import { Blog, Footer, Possibility, WhatGPT, Header, Features } from './Container';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
