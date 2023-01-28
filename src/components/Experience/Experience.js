import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './Experience.css';


const Experience = () => {
    return (
        <section id='experience'>
            <h5>What skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience-container'>

                <div className='experience-frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience-content'>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>jQuery</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>React</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>

                <div className='experience-backend'>
                    <h3>Backend Development</h3>
                    <div className='experience-content'>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>Node JS</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>MongoDB</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className='experience-details'>
                            <BsPatchCheckFill />
                            <h4>mySQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Experience;
