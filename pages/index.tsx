
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import { GetArticlesService, IGetArticlesService  } from './api/business/getArticles';
import { Card } from '../components/pages-components/card-component/card'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function Home() {
	const service: IGetArticlesService = new GetArticlesService();
	const [ articlesState, setArticlesState ] = useState<any>({});
	const [ loading, setLoading ] = useState<boolean>(true)

	const getData = () => {
		service.getDataArticles({
			Success: (res) => {
				setLoading(false);
				setArticlesState(res);
			}
		})
	}

	useEffect(() => {
		getData();
	}, []);

	console.log(articlesState)

	const renderLoading = () => {
		return(
			<div className={styles.containerDummyLoader}>
				<Card>
					<div className={styles.skeletonContainer}>
						<Skeleton circle={true} height={50} width={50} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
					</div>
				</Card>

				<Card>
					<div className={styles.skeletonContainer}>
						<Skeleton circle={true} height={50} width={50} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
					</div>
				</Card>

				<Card>
					<div className={styles.skeletonContainer}>
						<Skeleton circle={true} height={50} width={50} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
					</div>
				</Card>

				<Card>
					<div className={styles.skeletonContainer}>
						<Skeleton circle={true} height={50} width={50} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
					</div>
				</Card>

				<Card>
					<div className={styles.skeletonContainer}>
						<Skeleton circle={true} height={50} width={50} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
						<Skeleton width={500} height={20} duration={2} className={styles.skeleton} />
					</div>
				</Card>

			</div>
		)
	}

	const renderData = () => {
		return(
			articlesState.data && articlesState.data.map(item => {
				return(
					<Card key={item.id}>
						<div className={styles.contentCardContainer}>
							<img className={styles.imageStyle} src={item._imgurl} />
						</div>
					</Card>

				)
			})
		);
	}

	const switchingRender = (loading) => {
		switch(loading) {
			case true:
				return renderLoading();
			case false:
				return renderData();
			default:
				return renderLoading();
		}
	}


	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
				<p className={styles.description}>
					Get started by editing{' '}
					<code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					{switchingRender(loading)}
				</div>
			</main>

			<footer className={styles.footer}>
				Copyrights © Edy Susanto
			</footer>
		</div>
	)
}
