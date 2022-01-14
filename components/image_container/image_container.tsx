import React from 'react';
import styles from '../image_container/image_container.module.css';

interface ImageProps {
    source: string;
}
function ImgContainer(props: ImageProps) {
    const { source } = props
    return (
        <div className={styles.container}>
            <img src={source} className={styles.image}/>
        </div>
    )
}

export default ImgContainer
