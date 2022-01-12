import React, { useState, useEffect } from 'react'
import styles from './topbar.module.css';


function Topbar() {
    const [topbar, setTopbar] = useState(false);

    const changeBackground = () => {
        if(typeof window !== "undefined"){
            if(window.scrollY >= 1){
                setTopbar(true);
            } else {
                setTopbar(false);
            }
        }
        
    }

    React.useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    })

    return (
        <header className={topbar ? `${styles.active}`: `${styles.topbar}`}>
            <ul className={styles.list}>
                <li className={styles.logo}>Logo Here</li>
                <li className={styles.headertext}>Resourceful Indonesia</li>
            </ul>
        </header>
    )
}

export default Topbar
