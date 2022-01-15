import React from 'react'
import styles from '../raw_image/raw_image.module.css';

interface ImageProps {
    source: string;
}
function RawImage(props: ImageProps) {
    const {source} = props;
    return (
        <div className={styles.container}>
            <img src={source} className={styles.image}/>
        </div>
    )
}

export default RawImage
