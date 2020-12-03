import React, { memo } from 'react';
import styles from './border.module.css';

function _CustomBorderElement(props: React.HTMLProps<HTMLDivElement>) {
    const { style = {} } = props;
    return <div className={styles.customBorder} style={style}/>
}

export default memo(_CustomBorderElement);
export const CustomBorderElement = memo(_CustomBorderElement);
