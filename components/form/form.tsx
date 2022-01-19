import React from 'react'
import styles from '../form/form.module.css';
import TextInput from '../text_input/text_input';
import TextArea from '../text_area/textarea';
import ReCAPTCHA from 'react-google-recaptcha';
import Gap from '../gap/gap';

function Form() {
    return (
        <form className={styles.container}>
            <TextInput placeholder='Full Name'/>
            <TextInput placeholder='Email Address'/>
            <TextArea placeholder='Your Message Here'/>
            <ReCAPTCHA size='normal' sitekey='6LdyYyEeAAAAAKk3VCUzQlnkQDrP5M_5C2uo0RqR'/>
            <Gap type='small'/>
            <button type='submit' className={styles.submitButton}>Send Message</button>
        </form>
    )
}

export default Form
