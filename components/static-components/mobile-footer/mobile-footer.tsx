import React, { memo, SVGProps } from 'react';
import styles from './footer.module.css';

export interface IMobileFooter {
	imageLogoText: string;
	icon: any;
	gotoTop():void
}

function _MobileFooter(props: IMobileFooter) {

	const { imageLogoText, icon, gotoTop } = props;

    return(
		<div className={styles.mobileFooter}>
			<div className={styles.containerSectionFooter}>
				<img className={styles.logoStyle} src={imageLogoText} />
			</div>
			<div className={styles.containerSectionFooter}>
				<h4>Tentang Expandana</h4>
				<div className={styles.textStyle}>Tentang Kami</div>
				<div className={styles.textStyle}>Karir</div>
				<div className={styles.textStyle}>Hubungi Kami</div>
			</div>
			<div className={styles.containerSectionFooter}>
				<h4>Lainnya</h4>
				<div className={styles.textStyle}>Kebijakan Privasi</div>
				<div className={styles.textStyle}>Syarat & Ketentuan</div>
				<div className={styles.textStyle}>Tanya Jawab</div>
			</div>
			<div className={styles.containerSectionFooter}>
				<h4>Dukungan Bantuan</h4>
				<div className={styles.textStyle}>hello@expandana.id</div>
				<div className={styles.textStyle}>{"(+62) 898 555 6000"}</div>
				<div className={styles.textStyle}>{"(+62) 898 555 6000"}</div>
			</div>
			<div className={styles.containerSectionFooter}>
				<h4>Ikuti Kami</h4>
				<div className={styles.contentLastSection}>
					<div>
						<div className={styles.textStyle}>Linkedin</div>
						<div className={styles.textStyle}>Facebook</div>
					</div>

					<div className={styles.buttonContainer}>
						<button onClick={gotoTop} className={styles.buttonNavtoTopStyle}>
							{icon}
						</button>
					</div>
				</div>

			</div>
		</div>
	)
}

export default memo(_MobileFooter);
export const MobileFooter = memo(_MobileFooter);
