import React, { memo } from 'react';
import styles from './box.module.css';

function _Box(props: React.HTMLProps<HTMLDivElement>) {
    const { style = {} } = props;
    return <div className={styles.boxStyle} style={style}>{props.children}</div>
}

export default memo(_Box);
export const Box = memo(_Box);
