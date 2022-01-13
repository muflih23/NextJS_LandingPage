import React from 'react'
import styles from '../text_layout/text_layout.module.css';

interface TextProps {
    text: string;
    type: string;
}
function Text(props: TextProps) {
    const { type, text } = props;
    return (
        <div className={type == 'reg' ? `${styles.regular}` : type == 'bold' ? `${styles.bold}` : `${styles.subtitle}`}>
            {text}
        </div>
    )
}

export default Text
