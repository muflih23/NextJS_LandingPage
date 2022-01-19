import React from 'react'
import styles from '../text_area/textarea.module.css'

interface TextAreaProps {
    placeholder: string;
}
function TextArea(props: TextAreaProps) {
    const { placeholder } = props;
    return (
        <textarea
        placeholder={ placeholder }
        className={styles.textarea}
        required/>
    )
}


export default TextArea
