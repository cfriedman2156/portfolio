import React, { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Page from './components/Page'
import './App.css';
import './index.css';

function App() {
  
  const [pages] = useState([
    {
      name: 'About',
    },
    {
      name: 'Portfolio',
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
