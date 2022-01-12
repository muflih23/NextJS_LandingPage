import React from 'react';
import Image from 'next/image';
import styles from '../background/background.module.css';


function Background() {
    return (
        <div className={styles.background_rectangle}>
            <img src="/rectangle.png" alt='rectangle_bg'/>
        </div>
    )
}

export default Background
