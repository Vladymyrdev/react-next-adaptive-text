import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
				<Link href="#">Property investors sing up</Link>
				<Link href="#">Sell your property</Link>
				<Link href="#">About</Link>
				<Link href="#">Contsct Us</Link>
				<Link href="#">Feedback</Link>
			</div>
			<div className={styles.footer_down}>
				<div className={styles.footer_down_list}>
					<Link href="#">Sitemap</Link>
					<Link href="#">Privacy policy</Link>
					<Link href="#">Terms of use</Link>
					<Link href="#">Cookie policy</Link>
					<Link href="#">Data sourses</Link>
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
