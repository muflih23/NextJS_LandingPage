import React from 'react'
import styles from '../text_input/text_input.module.css';

interface TextInputProps {
    placeholder: string;
}
function TextInput(props: TextInputProps) {
    const { placeholder } = props;
    return (
        <input 
        type='text' 
        placeholder={ placeholder } 
        required
        className={styles.textinput}/>
    )
}

export default TextInput
