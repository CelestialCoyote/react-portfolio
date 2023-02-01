import React from 'react';
import Project1 from '../../assets/Project1_PanGalacticGargleBlaster.png';
import Project2 from '../../assets/Project2_InfiniteImprobabilityDrive.png';
import Project3 from '../../assets/Project3_VogonPoetry.png';
import Project4 from '../../assets/Project4_PlanetFactory.png';
import Project5 from '../../assets/Project5_DeepThought.png';
import Project6 from '../../assets/Project6_BabelFish.png';
import './Portfolio.css';


const data = [
    {
        id: 1,
        image: Project1,
        title: 'Pan Galactic Gargle Blaster',
        github: 'http://github.com',
        demo: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
    {
        id: 2,
        image: Project2,
        title: 'Infinite Improbability Drive',
        github: 'http://github.com',
        demo: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
    {
        id: 3,
        image: Project3,
        title: 'Vogon Poetry',
        github: 'http://github.com',
        demo: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
    {
        id: 4,
        image: Project4,
        title: 'Planet Factory',
        github: 'http://github.com',
        demo: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
    {
        id: 5,
        image: Project5,
        title: 'Deep Thought',
        github: 'http://github.com',
        demo: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
    {
        id: 6,
        image: Project6,
        title: 'Babel Fish',
        github: 'http://github.com',
        demo: 'https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy'
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='portfolio-container'>
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio-item'>
                                <div className='portfolio-item-image'>
                                    <img src={image} alt='' />
                                </div>
                                <div className='portfolio-item-image'>
                                    <h3>{title}</h3>
                                    <div className='portfolio-item-cta'>
                                        <a href={github} className='btn'>GitHub</a>
                                        <a href={demo} className='btn btn-primary' target='_blank'>
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};


export default Portfolio;
