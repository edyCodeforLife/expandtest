import React, { memo } from 'react';
import styles from './mobile-header.module.css';

function _MobileHeader(props: React.HTMLProps<HTMLDivElement>) {
    const { style = {} } = props;
    return <div className={styles.mobileHeaderStyle} style={style}>{props.children}</div>
}

export default memo(_MobileHeader);
export const MobileHeader = memo(_MobileHeader);
