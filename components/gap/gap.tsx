import React from 'react'
import styles from '../gap/gap.module.css';

interface GapProps {
    type: string;
}
function Gap(props: GapProps) {
    const { type } = props;
    return (
        <div className={type == 'small' ? `${styles.small}`: type == 'medium' ? `${styles.medium}` : type == 'large' ? `${styles.large}` : `${styles.spacer}`}></div>
    )
}

export default Gap
