import React from 'react'
import Background from '../components/background/background';
import Topbar from '../components/topnavbar/topbar';
import Title from '../components/title/title';
import Text from '../components/text_layout/text_layout';
import Gap from '../components/gap/gap';

function Home() {
  return (
    <div>
      <Background/>
      <Topbar/>
      <Title title='About Us'/>
      <div className='content_container'>
        <Text type='reg' text='Spanning from East to West.'/>
        <Text type='reg' text='With 54,000 km Coastline and 17,500 Islands'/>
        <Gap type="medium"/>
        <Text type='bold' text='INDONESIA, a resourceful land.'/>
        <Text type='bold' text='Rich of flavors, natural beauties, and'/>
        <Text type='bold' text='biodiversity.'/>
        <Gap type="medium"/>
        <Text type='reg' text='62trade.com ready to take important role to empower international trades between Indonesia and the rest of the world'/>
        <Gap type="medium"/>
        <Text type='reg' text='Ready to be a digital gateway for everyone, at any level of bussiness'/>
        <Gap type="medium"/>
        <Text type='reg' text='Let us walk together, hand in hand for a better future'/>
      </div>
    </div>
  )
}

export default Home
