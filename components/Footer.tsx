import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerDownLinks, footerUpLinks } from '../constants.ts';
import { LinkType } from '../constants.ts';

// @ts-ignore
import Facebook from '../assets/facebook.png';
// @ts-ignore
import Linkedin from '../assets/linkedin.png';
// @ts-ignore
import Youtube from '../assets/youtube.png';

import styles from '../styles/Home.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_up}>
				<h3>property xyz</h3>
				<span style={{ fontSize: '14px', marginBottom: '30px' }}>
					© 2020 Property.XYZ
				</span>
				{footerUpLinks?.map((link: LinkType) => (
					<Link key={link.id} href={link.path}>
						{link.name}
					</Link>
				))}
				<div className={styles.footer_up_social}>
					<Image width={35} height={35} src={Facebook} alt="facebook" />
					<Image width={35} height={35} src={Linkedin} alt="linkedin" />
					<Image width={35} height={35} src={Youtube} alt="youtube" />
				</div>
			</div>
			<div className={styles.footer_down}>
				<div className={styles.footer_down_list}>
					{footerDownLinks?.map((link: LinkType) => (
						<Link key={link.id} href={link.path}>
							{link.name}
						</Link>
					))}
				</div>
				<div className={styles.footer_down_social}>
					<span>Follow us on social media</span>
					<Image width={35} height={35} src={Facebook} alt="facebook" />
					<Image width={35} height={35} src={Linkedin} alt="linkedin" />
					<Image width={35} height={35} src={Youtube} alt="youtube" />
				</div>
			</div>
		</footer>
	);
}
