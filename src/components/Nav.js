import React from 'react';
import { useEffect } from 'react';

function Nav(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    const handleHomeClick = () => {
        const aboutPage = pages.find(page => page.name === 'About');
        if (aboutPage) {
            setCurrentPage(aboutPage);
        }
    };

    useEffect(() => {
        const navContent = document.getElementById('nav-content');
        const header = document.getElementById('header');

        const handleScroll = () => {
            const scrollpos = window.scrollY;

            if (scrollpos > 10) {
                header.classList.add('bg-white');
                header.classList.remove('gradient');
                header.classList.add('shadow-lg');
                header.classList.remove('text-white');
                header.classList.add('text-black');
            } else {
                header.classList.remove('text-black');
                header.classList.remove('shadow-lg');
                header.classList.add('text-white');
                header.classList.add('gradient');
                header.classList.remove('bg-white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="navbar fixed gradient px-10 z-30 text-white" id='header'>
            <div className="flex-1">
                <a 
                    className="btn btn-ghost text-3xl font-normal"
                    id='chase'
                    href="#About"
                    onClick={handleHomeClick}
                >
                    Chase Friedman
                </a>
            </div>
            <div className="flex-none nav-content" id="nav-content">
                <ul className="menu menu-horizontal px-1">
                    {pages.map((page) => (
                        <li key={page.name} className={`${currentPage.name === page.name ? 'active' : ''}`}>
                            <a 
                                href={`#${page.name}`} 
                                onClick={() => setCurrentPage(page)}
                                className='text-xl font-extralight'
                            >
                                {page.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
