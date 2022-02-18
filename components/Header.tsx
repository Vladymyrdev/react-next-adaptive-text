import React from 'react';
import Image from 'next/image';
// @ts-ignore
import Statistic from '../assets/arrow-chart-677.svg';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
// @ts-ignore
import Select from './common/Select.tsx';
// @ts-ignore
import Input from './common/Input.tsx';

export default function Header() {
	return (
		<header>
			<div className={styles.header}>
				<div className={styles.logo}>
					<h1>property xyz</h1>
				</div>
				<div className={styles.search_block}>
					<div className={styles.select}>
						<Image src={Statistic} alt="statistic" />
						<Select className={styles.form_select}>
							<option>Research</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Select>
					</div>

					<div className={styles.search}>
						<Input
							className={styles.search_input}
							type="search"
							placeholder="Chester, Cheshire, UK"
						/>
						<svg
							width="20"
							height="20"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
								stroke="#E4E4E4"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className={styles.feetback}>
				<span className={styles.feetback_orange}>BETA</span>
				<span>
					This is a new service. Please leave your{' '}
					<Link href="#">feedback</Link>
				</span>
			</div>
		</header>
	);
}
