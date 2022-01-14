import React from 'react'
import Background from '../components/background/background';
import Topbar from '../components/topnavbar/topbar';
import Title from '../components/title/title';
import Text from '../components/text_layout/text_layout';
import Gap from '../components/gap/gap';
import ImgContainer from '../components/image_container/image_container';
import Copyright from '../components/copyright/copyright';
import SideMenu from '../components/side_menu/side_menu';
import HomeContents from '../components/home_content/home_content';

function Home() {
  return (
    <div>
      <Topbar/>
      <HomeContents/>
      <Copyright/>
      <Gap type="spacer"/>
      <SideMenu section='AboutUs'/>
    </div>
  )
}

export default Home
