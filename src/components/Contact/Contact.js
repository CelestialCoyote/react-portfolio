import React, { useRef } from 'react';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './Contact.css';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // email.js not added to projecdt.
        //emailjs.sendForm('YOUR_SERVICE_ID, 'YOUR_TEMPLATE_ID, form.current, 'YOUR_USER_ID);
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact-container'>
                <div className='contact-options'>
                    <article className='contact-option'>
                        <MdOutlineEmail className='contact-option-icon' />
                        <h4>Email</h4>
                        <h5>arthurdent@gmail.com</h5>
                        <a href='mailto:arthurdent@gmail.com' target='_blank'> Send a message.</a>
                    </article>

                    <article className='contact-option'>
                        <RiMessengerLine className='contact-option-icon'  />
                        <h4>Messenger</h4>
                        <h5>arthurdent-earthman</h5>
                        <a href='https://m.me/arthur.dent.earthman' target='_blank'> Send a message.</a>
                    </article>

                    <article className='contact-option'>
                        <BsWhatsapp className='contact-option-icon'  />
                        <h4>WhatsApp</h4>
                        <h5>+123456789</h5>
                        <a href='https://api.whatsapp.com/send?phone=+123456789' target='_blank'> Send a message.</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name.' required />
                    <input type='email' name='email' placeholder='Your Email.' required />
                    <textarea name='message' rows='7' placeholder='Your Message.' required></textarea>
                    <button type='submit' className='btn btn-primary'> Send Message</button>
                </form>

            </div>
        </section>
    );
};


export default Contact;
