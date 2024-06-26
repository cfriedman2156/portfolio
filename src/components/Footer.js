import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const icons = [
        {
            name: faGithub,
            link: 'https://github.com/cfriedman2156',
        },
        {
            name: faLinkedin,
            link: 'https://www.linkedin.com/in/chase-friedman-a20372133/',
        },
        {
            name: faInstagram,
            link: 'https://www.instagram.com/chaseunfiltered/?hl=en',
        },
        {
            name: faTiktok,
            link: 'https://www.tiktok.com/@chasegetsbetter?lang=en',
        }
    ];

    return (
        <footer className="footer footer-center p-5 gradient1 text-neutral-content">
            <nav>
                <p className="text-white font-semibold text-lg">Get in Contact</p>
                <p className="text-white font-semibold">(619) 866-8663 | chaseafriedman@gmail.com</p>

                <div className="grid grid-flow-col gap-4">
                    {icons.map((icon, index) => (
                        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className='btn btn-square'>
                            <FontAwesomeIcon icon={icon.name} size="2x" />
                        </a>
                    ))}
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
