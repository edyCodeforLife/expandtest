import React, { memo } from 'react';
import styles from './card.module.css';

function _Card(props: React.HTMLProps<HTMLDivElement>) {
    const { style = {} } = props;
    return <div className={styles.cardStyle} style={style}>{props.children}</div>
}

export default memo(_Card);
export const Card = memo(_Card);
