import React from 'react'
import styles from '../image_button/image_button.module.css';
import IconText from '../icon_text/icon_text';

interface PropsButton {
    type: string;
    source : string;
    val: string;
}
function Button(props: PropsButton) {
    const { type, source, val } = props;
    return (
        <div className={type == 'active' ? `${styles.active}` : `${styles.inactive}`}>
            <img src={source} className={styles.icon_button}/>
            <IconText val={ val } type={ type }/>
        </div>
    )
}

export default Button
