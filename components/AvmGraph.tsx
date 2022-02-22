import React from 'react';
import Image from 'next/image';

// @ts-ignore
import Logo from '../assets/swirb_logo.png';
// @ts-ignore
import Avm from '../assets/avm_graphic.png';

import styles from '../styles/Home.module.css';

function AvmGraph() {
	return (
		<div className={styles.avm_wrapp}>
			<span>
				Powered by <Image src={Logo} alt="logo" />
			</span>
			<div className={styles.avm}>
				<Image src={Avm} alt="avm" />
			</div>
		</div>
	);
}

export default AvmGraph;
