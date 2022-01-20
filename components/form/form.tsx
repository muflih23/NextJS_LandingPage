import React from 'react'
import styles from '../form/form.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Gap from '../gap/gap';
import { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const data = {
            name,
            email,
            message,
        };
        console.log(data);

        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
        });
    };
    
    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Full Name' 
            id = 'name'
            onChange={e => setName(e.target.value)}
            required
            className={styles.textinput}/>
            <input 
            type='text' 
            placeholder='Email Address' 
            id = 'email'
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.textinput}/>
            <textarea
            placeholder='Your Message Here'
            id = 'message'
            onChange={e => setMessage(e.target.value)}
            className={styles.textarea}
            required/>
            <ReCAPTCHA size='normal' sitekey='6LdyYyEeAAAAAKk3VCUzQlnkQDrP5M_5C2uo0RqR'/>
            <Gap type='small'/>
            <button type='submit' className={styles.submitButton}>Send Message</button>
        </form>
    )
}

export default Form
