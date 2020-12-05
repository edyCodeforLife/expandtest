
import styles from '../styles/Home.module.css';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { GetArticlesService, IGetArticlesService  } from './api/business/getArticles';
import { article } from './api/interface/articles';
import { Card } from '../components/pages-components/card-component/card';
import { MobileHeader } from '../components/pages-components/mobile-header-component/mobile-header';
import { MobileFooter } from '../components/static-components/mobile-footer/mobile-footer';
import Skeleton from 'react-loading-skeleton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars, faArrowAltCircleUp, faSearch } from '@fortawesome/fontawesome-free-solid';
import { useAppContext } from '../context/state';
import { getDataArticles } from '../context/action';
import { useRouter } from 'next/router';
import update from 'immutability-helper';
import { CustomBorderElement } from '../components/pages-components/custom-element/custom-border';
import { map, find, clone, debounce, filter } from 'lodash';
import * as LS from 'local-storage';

export const formattedDate = (
    _date: any,
    lang: string,
    withTime?: boolean,
    short?: boolean,
    withoutYear?: boolean
) => {
    const date = new Date(_date);

    const months: any = {
        idn: [
            'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ],
        en: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
    };

    const monthsShort: any = {
        idn: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };

    if (!isNaN(date.getTime())) {
        let year: any = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            hour = date.getHours(),
            minute = date.getMinutes();

        if (String(minute).length < 2) (minute as any) = '0' + minute;

        let monthName = months[lang][month];
        if (short) monthName = monthsShort[lang][month];
        if (lang === 'idn')
            return `${day < 10 ? '0' + day : day} ${monthName} ${withoutYear ? '' : year} ${
                withTime ? hour + ':' + minute : ''
            }`;
        else
            return `${monthName} ${day < 10 ? '0' + day : day}${withoutYear ? ' ' : ', ' + year} ${
                withTime ? hour + ':' + minute : ''
            }`;
    }
    return undefined;
};

export default function Home() {
	const router = useRouter()
	const service: IGetArticlesService = new GetArticlesService();
	const textLogoUrl = "https://learn.expandana.id/expandana-text-logo.png";
	const imageHeaderUrl = "https://learn.expandana.id/invest.webp";
	const [ articlesState, setArticlesState ] = useState<any>({});
	const [ masterArticlesState, setMasterArticlesState ] = useState<any>({});
	const [ loading, setLoading ] = useState<boolean>(true);
	const [ querySearch, setQuerySearch ] = useState("");
	const userInteraction = useRef<boolean>(false);
	const getData = () => {
		service.getDataArticles({
			Success: (res) => {
				setLoading(false);
				setArticlesState(res);
				setMasterArticlesState(res);
			}
		})
	}

	const gotoTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
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

	const filterSearchQuery = (inputValue: string) => {
		let searchValue = inputValue.toLowerCase()
		let dataSearch = clone(masterArticlesState.data);

		if (masterArticlesState && masterArticlesState.data && masterArticlesState.data.length > 0) {
			let filterData = filter(dataSearch, item => {
				return item.title.toLowerCase().includes(searchValue);
			});

			let query: any = {};
			query["data"] = {
				$set: filterData
			}

			let newArticlesState = update(articlesState,query);
			setArticlesState(newArticlesState);
		}
	}

	useEffect(() => {
		if (querySearch === "") {
			getData();
		} else {
			userInteraction.current && filterSearchQuery(querySearch);
		}
    }, [querySearch]);

	const onSearch = useCallback(debounce(( e:any ) => {
		const inputValue = e.target.value;
		userInteraction.current = true;
		setQuerySearch(inputValue);
	},250),
	[]
	);

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
							<div className={styles.tagContentText}>Invest</div>
							<div className={styles.titleContent}>{item.title}</div>
							<div className={styles.descriptionSubtitle}>{item.subtitle}</div>
							<div className={styles.dateFontStyle}>{`Expandana / ${formattedDate(item.publish_datetime, "idn")}`}</div>
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
		// <div className={styles.container}>
		// 	<main className={styles.main}>
		// 		<header className={styles.header}>
		// 			<h1 className={styles.titleDetail}>Expandana</h1>
		// 		</header>

		// 		<div className={styles.grid}>
		// 			{switchingRender(loading)}
		// 		</div>

		// 	</main>

		// 	<footer className={styles.footer}>
		// 		Copyrights © Edy Susanto
		// 	</footer>
		// </div>
		<div className={styles.containerMobileView}>
			<MobileHeader>
				<div className={styles.logoContainer}>
					<img className={styles.imageLogo} src={textLogoUrl} />
					<div>
						<FontAwesomeIcon
							icon={faBars}
							className={styles.iconMenuBar}
						/>
					</div>
				</div>
				<div className={styles.containerHeaderImage}>
					<img className={styles.imageTopHeader} src={imageHeaderUrl}/>
					<CustomBorderElement
						style={{
							background: '#E5BF86',
							position: 'absolute',
							right: 0,
						}}
					/>

					<CustomBorderElement
						style={{
							background: '#F77058',
							position: 'absolute',
							left: 0,
							bottom:0,
							height: 30,
							width: 100,
							padding: 30
						}}
					/>
				</div>
			</MobileHeader>
			<div className={styles.contentContainer}>
				<h1 className={styles.contentTextStyle}>Mau Cari Tahu Apa Hari Ini?</h1>

				<div className={styles.inputContainer}>
					<input onChange={(e) => onSearch(e)} className={styles.inputText} type="text" placeholder="Ketik Kata Kunci dan Cari" />
					<FontAwesomeIcon
						icon={faSearch}
						className={styles.searchIcon}
					/>
				</div>
			</div>
			<div className={styles.subTitle}>
				<h4>All Invest Articles</h4>
			</div>
			<div className={styles.borderLine} />
			{renderData()}
			<MobileFooter
				gotoTop={gotoTop}
				icon={<FontAwesomeIcon className={styles.arrowUpStyles} icon={faArrowAltCircleUp}/>}
				imageLogoText={textLogoUrl}
			/>
		</div>
	)
}
