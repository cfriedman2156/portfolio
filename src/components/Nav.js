import React from 'react';

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

    return (
        <div className="navbar bg-neutral">
            <div className="flex-1">
                <a 
                    className="btn btn-ghost text-white text-3xl"
                    href="#About"
                    onClick={handleHomeClick}
                >
                    Chase Friedman
                </a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {pages.map((page) => (
                        <li key={page.name} className={`${currentPage.name === page.name && 'active'}`}>
                            <a 
                                href={`#${page.name}`} 
                                onClick={() => setCurrentPage(page)}
                                className='btn btn-ghost text-white text-xl'
                            >
                                {page.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Nav;
