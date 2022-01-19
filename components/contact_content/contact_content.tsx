import React from 'react'
import Title from '../title/title';
import Text from '../text_layout/text_layout';
import Gap from '../gap/gap';
import ImgContainer from '../image_container/image_container';
import Form from '../form/form';

function ContactContent() {
    return (
        <div className='content_container'>
            <div className='content'>
                <Title title='Contact'/>
                <Gap type='large'/>
                <Text type='subtitle' text='Location'/>
                <Gap type='small'/>
                <Text type='reg' text={`Sona Topas Tower, \n Jl. Jend. Sudirman No Kav 26, RT.4/RW.2, Karet, \n Jakarta Selatan, 12920.`}/>
                <Gap type='large'/>
                <Text type='subtitle' text='Email'/>
                <Gap type='small'/>
                <Text type='reg' text='info@62trade.com'/>
                <Gap type='large'/>
                <Form/>
            </div>
            <div className='row'>
                <ImgContainer source='/bali.png'/>
            </div>
        </div>
    )
}

export default ContactContent
