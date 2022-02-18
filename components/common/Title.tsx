import React from 'react';
import styles from '../../styles/Home.module.css';

export default function Title() {
	return (
		<div className={styles.content_title}>
			<h1>
				Check your free instant property valuation in less than 30 seconds
			</h1>
			<p>
				Whether you are looking to buy a property, sell your property or
				considering getting a mortgage, a quick check on your property value can
				help you see what is possible
			</p>
		</div>
	);
}
