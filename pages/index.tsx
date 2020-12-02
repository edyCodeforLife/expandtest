
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
import { GetArticlesService, IGetArticlesService  } from './api/business/getArticles';
import { article } from './api/interface/articles';
import { Card } from '../components/pages-components/card-component/card'
import Skeleton from 'react-loading-skeleton';
import { useAppContext } from '../context/state';
import { getDataArticles } from '../context/action';
import { useRouter } from 'next/router';
import { map, find } from 'lodash';
import * as LS from 'local-storage';

export default function Home() {
	const router = useRouter()
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

	const setDetailtoLS = (id: number) => {
		let selectedData = find(articlesState.data, {id});
		LS.set("detailSelected",selectedData);
	}

	useEffect(() => {
		getData();
	}, []);


	const gotoDetail = ( id:number, slug: string) => {
		setDetailtoLS(id);
		router.push({
			pathname: '/detail/[slug]',
			query: { slug },
		});
	}

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
		const { data } = articlesState;
		return(
			articlesState && data && map(data,(item:article) => {
				return(
					<Card key={item.id} >
						<div onClick={() => gotoDetail(item.id, item.slug)} className={styles.contentCardContainer}>
							<img className={styles.imageStyle} src={item._imgurl} />
							<p className={styles.titleContent}>{item.title}</p>
						</div>
					</Card>
				)
			})
		);
	}

	const switchingRender = (loading:boolean) => {
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
				<header className={styles.header}>
					<h1 className={styles.titleDetail}>Expandana</h1>
				</header>

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
