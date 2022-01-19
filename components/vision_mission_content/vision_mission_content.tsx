import React from 'react'
import Title from '../title/title';
import Text from '../text_layout/text_layout';
import Gap from '../gap/gap';
import ImgContainer from '../image_container/image_container';
import RawImage from '../raw_image/raw_image';

function VisionMissionContents() {
    return (
        <div className='content_container'>
            <div className='content'>
                <Title title='Vision Mission'/>
                <Gap type='large'/>
                <Text type='subtitle' text='Our Vision'/>
                <Gap type='small'/>
                <Text type='reg' text='Becoming number one preferred digital platform of international trades for Indonesia and the world'/>
                <Gap type='large'/>
                <Text type='subtitle' text='Our Mission'/>
                <Gap type='small'/>
                <Text type='reg' text='Empowering Indonesia&sbquo;s MSME nationwide to go international, collaboration with all supporting function such as financial, supply chain and logistic, and expanding international network by building partnership with overseas well known digital platform.'/>
                <Gap type='large'/>
                <Text type='subtitle' text='Values'/>
                <Gap type='small'/>
                <Text type='reg' text={`1. Simple \n 2. Trustworthy \n 3. Problem Solver`}/>
                <Gap type='large'/>
                <div className='pict'>
                    <RawImage source='/indo_map_large.png'/>
                </div>
            </div>
            <div className='row'>
                <ImgContainer source='/illustration_batik.png'/>
            </div>
        </div>
    )
}

export default VisionMissionContents
