import React from 'react'
import Title from '../title/title';
import Text from '../text_layout/text_layout';
import Gap from '../gap/gap';
import ImgContainer from '../image_container/image_container';

function HomeContents() {
    return (
    <div className='content_container'>
        <Title title='About Us'/>
        <Gap type='large'/>
        <Text type='reg' text='Spanning from East to West. With 54,000 km Coastline and 17,500 Islands'/>
        <Gap type="medium"/>
        <Text type='bold' text='INDONESIA, a resourceful land. Rich of flavors, natural beauties, and biodiversity.'/>
        <Gap type="medium"/>
        <Text type='reg' text='62trade.com ready to take important role to empower international trades between Indonesia and the rest of the world'/>
        <Gap type="medium"/>
        <Text type='reg' text='Ready to be a digital gateway for everyone, at any level of bussiness'/>
        <Gap type="medium"/>
        <Text type='reg' text='Let us walk together, hand in hand for a better future'/>
        <Gap type="large"/>
        <div className='row'>
          <ImgContainer source='/indo_spices.png'/>
        </div>
      </div>
    )
}

export default HomeContents
