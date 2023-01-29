import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial1 from '../../assets/Testimonial1_FordPrefect.png';
import Testimonial2 from '../../assets/Testimonial2_Trillian.png';
import Testimonial3 from '../../assets/Testimonial3_Marvin.png';
import Testimonial4 from '../../assets/Testimonial4_ZaphodBeeblebrox.png';
import './Testimonials.css';
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: Testimonial1,
        name: 'Ford Prefect',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        avatar: Testimonial2,
        name: 'Trillian',
        review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        avatar: Testimonial3,
        name: 'Marvin',
        review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
        avatar: Testimonial4,
        name: 'Zaphod Beeblebrox',
        review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className='container testimonials-container'
                modules={[ Pagination ]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className='client-avatar'>
                                    <img src={avatar} alt='Testimonial' />
                                </div>
                                <h5 className='client-name'>{name}</h5>
                                <small className='client-review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};


export default Testimonials;
