import React from 'react'
import Layout from '../components/layouting/layout';
import VisionMissionContents from '../components/vision_mission_content/vision_mission_content';
import ImgContainer from '../components/image_container/image_container';
import Gap from '../components/gap/gap';

function VisionMission() {
    return (
        <Layout section='VisionMission'>
            <VisionMissionContents/>
        </Layout>
    )
}

export default VisionMission
