import React from 'react'
import Layout from '../components/layouting/layout';
import ContactContent from '../components/contact_content/contact_content';
import ImageContainer from '../components/image_container/image_container';
import Gap from '../components/gap/gap';

function Contact() {
    return (
        <Layout section='Contact'>
            <ContactContent/>
        </Layout>
    )
}

export default Contact
