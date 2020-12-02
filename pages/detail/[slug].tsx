
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

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.titleDetail}>{detailData.title}</h1>
			</header>
			<Box>
				<div className={styles.contentDetailContainerImage}>
					<img className={styles.imageDetailContainer} src={detailData._imgurl}/>
				</div>

				<div className={styles.contentDetailContainerInformation}>
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
