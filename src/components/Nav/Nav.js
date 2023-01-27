import React, { useState } from 'react';
import { BiBook, BiHome, BiMessageAltCheck, BiUser } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './Nav.css';


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a
                href='#'
                className={activeNav === '#' ? 'active' : ''}
                onClick={() => setActiveNav('#')}
            >
                <BiHome />
            </a>
            <a
                href='#about'
                className={activeNav === '#about' ? 'active' : ''}
                onClick={() => setActiveNav('#about')}
            >
                <BiUser />
            </a>
            <a
                href='#experience'
                className={activeNav === '#experience' ? 'active' : ''}
                onClick={() => setActiveNav('#experience')}
            >
                <BiBook />
            </a>
            <a
                href='#services'
                className={activeNav === '#services' ? 'active' : ''}
                onClick={() => setActiveNav('#services')}
            >
                <RiServiceLine />
            </a>
            <a
                href='#contact'
                className={activeNav === '#contact' ? 'active' : ''}
                onClick={() => setActiveNav('#contact')}
            >
                <BiMessageAltCheck />
            </a>
        </nav>
    );
};


export default Nav;
