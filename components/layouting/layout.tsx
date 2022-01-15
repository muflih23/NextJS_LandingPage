import React, { ReactNode } from 'react';
import Topbar from '../topnavbar/topbar';
import SideMenu from '../side_menu/side_menu';
import Copyright from '../copyright/copyright';
import Gap from '../gap/gap';

interface LayoutProps {
    children: ReactNode;
    section: string;
}
function Layout(props: LayoutProps) {
    const { children, section } = props;
    return (
        <div className='screen'>
            <Topbar/>
                { children }
            <Copyright/>
            <Gap type='spacer'/>
            <SideMenu section={ section }/>
        </div>
    )
}

export default Layout
