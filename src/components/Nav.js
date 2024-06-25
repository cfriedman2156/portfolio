// import React from 'react';

// const Header = () => {
//   return (
//     <header className="header bg-white absolute top-0 left-0 z-40 w-full flex items-center transition">
//       <div className="container">
//         <div className="flex mx-[-16px] items-center justify-between relative">
//           <div className="flex px-4 justify-between items-center w-full">
//             <div>
//               <button
//                 id="navbarToggler"
//                 name="navbarToggler"
//                 aria-label="navbarToggler"
//                 className="block absolute right-4 top-1/2 translate-y-[-50%] lg:hidden focus:ring-2 ring-primary px-3 py-[6px] rounded-lg"
//               >
//                 <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
//                 <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
//                 <span className="relative w-[30px] h-[2px] my-[6px] block bg-dark"></span>
//               </button>
//               <nav
//                 id="navbarCollapse"
//                 className="absolute py-5 lg:py-0 lg:px-4 xl:px-6 bg-white lg:bg-transparent shadow-lg rounded-lg max-w-[250px] w-full lg:max-w-full lg:w-full right-4 top-full hidden lg:block lg:static lg:shadow-none"
//               >
//                 <ul className="block lg:flex">
//                   <li className="relative group">
//                     <a href="#home" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0"> Home </a>
//                   </li>
//                   <li className="relative group">
//                     <a href="#about" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> About </a>
//                   </li>
//                   <li className="relative group">
//                     <a href="#services" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> Portfolio </a>
//                   </li>
//                   <li className="relative group">
//                     <a href="#pricing" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> Resume </a>
//                   </li>
//                   <li className="relative group">
//                     <a href="#contact" className="menu-scroll text-base text-black group-hover:text-primary py-2 lg:py-6 lg:inline-flex lg:px-0 flex mx-8 lg:mr-0 lg:ml-8 xl:ml-12"> Contact </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>
//             <div className="sm:flex justify-end hidden">
//               <a
//                 href="#contact"
//                 className="text-base font-bold text-white bg-primary rounded-full py-3 px-8 md:px-9 lg:px-8 xl:px-9 ml-auto lg:ml-12"
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;





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
        <div className="navbar bg-neutral px-10">
            <div className="flex-1">
                <a 
                    className="btn btn-ghost text-white text-3xl font-normal"
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
                                className='btn btn-ghost text-white text-xl font-extralight'
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
