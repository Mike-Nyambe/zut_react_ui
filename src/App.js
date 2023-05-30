import React from 'react';
import './App.css';

import { Blog, Features, Footer, Header, Possibility, StudentStatus, } from './container';
import { Brand, CTA, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <StudentStatus />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;
