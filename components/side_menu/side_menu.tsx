import React from 'react'
import styles from '../side_menu/side_menu.module.css';
import Button from '../image_button/image_button';

interface PropsSection {
    section: string;
}
function SideMenu(props: PropsSection) {
    const { section } = props
    return (
        <div className={styles.container}>
            <div className={styles.button_menus}>
                <Button 
                type = {section == 'AboutUs' ? 'active' : 'inactive' }
                source = {section == 'AboutUs' ? '/smile_active.png' : '/smile_deactive.png'}
                val='About Us'/>
                <Button 
                type = {section == 'VisionMission' ? 'active' : 'inactive' }
                source = {section == 'VisionMission' ? '/pen-tool_active.png' : '/pen-tool_deactive.png'}
                val='Vission Mission'/>
                <Button 
                type = {section == 'Contact' ? 'active' : 'inactive' }
                source = {section == 'Contact' ? '/phone-call_active.png' : '/phone-call_deactive.png'}
                val='Contact'/>
            </div>
        </div>
    )
}

export default SideMenu
