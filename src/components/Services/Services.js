import React from 'react';
import { BsCheckLg } from 'react-icons/bs';
import './Services.css';


const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container services-container'>
                <article className='service'>
                    <div className='service-head'>
                        <h3>UI/ UX Design</h3>
                    </div>

                    <ul className='service-list'>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Elit, sed do eiusmod tempor incididunt ut labore et</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Dolore magna aliqua. Ut enim ad minim veniam, quis</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </li>
                    </ul>

                </article>

                <article className='service'>
                    <div className='service-head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service-list'>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </li>
                    </ul>
                </article>

                <article className='service'>
                    <div className='service-head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service-list'>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Elit, sed do eiusmod tempor incididunt ut labore et</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        </li>
                        <li>
                            <BsCheckLg className='service-list-icon' />
                            <p>Exercitation ullamco laboris nisi ut aliquip ex ea</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    );
};


export default Services;
