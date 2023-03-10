import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import ArthurDent from '../../assets/ArthurDent.png';
import './Header.css';


const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <h5>Hello I'm </h5>
                <h1>Arthur Dent</h1>
                <h5 className="text-light">Earthman</h5>

                <CTA />
                <div className='test'>
                    <HeaderSocials />

                    <div className='arthur-dent'>
                        <img src={ArthurDent} alt='Arthur Dent' />
                    </div>
                    <a href='#contact' className='scroll-down'>Scroll Down</a>
                </div>

            </div>
        </header>
    );
};


export default Header;
