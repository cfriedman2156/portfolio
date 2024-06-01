import React, { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page'
import './App.css';

function App() {
  
  const [pages] = useState([
    {
      name: 'About',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Contact',
    },
    {
      name: 'Resume',
    },
  ])
  
  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
