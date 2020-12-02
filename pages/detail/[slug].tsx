
import styles from '../../styles/detail.module.css';
import React, { useEffect, useState } from 'react';
import * as LS from 'local-storage';
import { isEmpty } from 'lodash';
import { Box } from '../../components/pages-components/big-box-component/box';
export default function Detail() {
	const [ detailData, selectedDetailData ] = useState<any>({});

	useEffect(() => {
		const getSelectedDatafromLS = LS.get("detailSelected");
		if(!isEmpty(getSelectedDatafromLS)) {
			selectedDetailData(getSelectedDatafromLS);
		}
	}, []);

	const customStyle ={
		borderRadius: 12,
		border: '5px solid white',
		boxShadow: '0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2)',
		background: '#eedfcc'
	}

	const informationBox = {
		boxShadow: '0 0.1875rem 1.5rem rgba(0, 0, 0, 0.2)',
		background: '#fff',
		marginLeft: 10,
		borderRadius: 12,
		padding: '0 20px',
		maxWidth: 500,
		overflowY: 'scroll'
	}
	
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.titleDetail}>{detailData.title}</h1>
			</header>
			<Box>
				<div style={customStyle} className={styles.contentDetailContainer}>
					<img className={styles.imageDetailContainer} src={detailData._imgurl}/>
				</div>

				<div style={informationBox} className={styles.contentDetailContainer}>
					<h2 className={styles.titleDetail}>Taukah Anda?</h2>
					<div
						className={styles.description}
						dangerouslySetInnerHTML={{ __html: detailData.content}}
					/>
				</div>
			</Box>

			<footer className={styles.footer}>
				Copyrights © Edy Susanto
			</footer>
		</div>
	)
}
