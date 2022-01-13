import React from 'react'
import styles from '../title/title.module.css';

interface TitleProps {
    title: string;
}
function Title(props: TitleProps) {
    const { title } = props
    return (
        <div className={styles.title}>
            {title}
        </div>
    )
}

export default Title
