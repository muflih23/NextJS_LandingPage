import React from 'react'
import styles from '../icon_text/icon_text.module.css';

interface IconTextProps {
    val: string
    type: string
}
function IconText(props: IconTextProps) {
    const { val, type } = props;
    return (
        <div className={type == 'active' ? `${styles.tiny_active}` : type == 'inactive' ? `${styles.tiny_inactive}` : `${styles.med}`}>
            { val }
        </div>
    )
}

export default IconText
