import React from "react";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === 'About') {
            return <About/>
        } else if (currentPage.name === 'Portfolio') {
            return <Portfolio/>
        } else if (currentPage.name === 'Resume') {
            return <Resume/>
        } else {
            return <About/>
        }
    }

    return <section>
        {renderPage()}
    </section>
}

export default Page;