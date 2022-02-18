import React, { useState } from 'react';
import { Button, Tab, Tabs } from 'react-bootstrap';
import Image from 'next/image';
// @ts-ignore
import Logo from '../assets/swirb_logo.png';
// @ts-ignore
import Mortgages from '../assets/mortgages.jpg';
// @ts-ignore
import Tobuy from '../assets/tobuy.jpg';
// @ts-ignore
import Tosell from '../assets/tosell.jpg';

import styles from '../styles/Home.module.css';

export default function ControlledTabs() {
	const [key, setKey] = useState('property_estimate');

	return (
		<>
			<div className={styles.tab_wrapp}>
				<Tabs
					id="controlled-tab-example"
					activeKey={key}
					onSelect={(k) => setKey(k)}
					className="mb-3"
				>
					<Tab eventKey="property_estimate" title="Property Estimate">
						<div className={styles.tabs_content}>
							<h5>ESTIMATED PRICE</h5>
							<h1>£200,000 - £230,000k</h1>
							<Button variant="outline-danger">81% Confidence Level</Button>
							<span>
								Powered by <Image src={Logo} alt="logo" />
							</span>
							<h2>So, What Next?</h2>
							<h4>Get an even more accurate valuation. Speak with a human</h4>
							<span style={{ fontSize: '18px', lineHeight: '35px' }}>
								Our partners check many datasets, property sales and recent
								valuations to create an instant estimate. This is great as a
								quick guide but shouldn&apos;t be wholly relied upon if you are
								purchasing a property, selling a property or getting finance.
								For any of these speaking with a human is always best. Please
								select from any of the below to help your next step
							</span>
						</div>
					</Tab>
					<Tab eventKey="rental_estimate" title="Rental Estimate">
						<div className={styles.tabs_content}>
							<h5>ESTIMATED PRICE</h5>
							<h1>£1000pcm</h1>
							<Button variant="outline-danger">81% Confidence Level</Button>
						</div>
						<div
							style={{
								maxWidth: '770px',
								display: 'flex',
								flexDirection: 'column',
								margin: '20px auto',
							}}
						>
							<span
								style={{
									fontSize: '14px',
									lineHeight: '25px',
									color: '#8D8D8D',
								}}
							>
								Our partners check many datasets, property sales and recent
								valuations to create an instant estimate. This is great as a
								quick guide but shouldn&apos;t be wholly relied upon if you are
								purchasing a property, selling a property or getting finance.
								For any of these speaking with a human is always best. Please
								select from any of the below to help your next step
							</span>
							<span style={{ marginTop: '15px' }}>
								Powered by <Image src={Logo} alt="logo" />
							</span>
						</div>
					</Tab>
				</Tabs>
			</div>
			<div className={styles.tabs_image_wrapp}>
				<Image src={Tosell} alt="sell" />
				<Image src={Mortgages} alt="mortgages" />
				<Image src={Tobuy} alt="buy" />
				<div className={styles.tabs_image}>
					<div className={styles.tabs_image_block}>
						<h3>Looking to sell?</h3>
						<span>Sell any UK residential property in just 7-28 days</span>
						<Button variant="danger">Sell Property</Button>
					</div>
					<div className={styles.tabs_image_block}>
						<h3>How much can I borrow?</h3>
						<span>Work out how much you can borrow for your next property</span>
						<Button variant="danger">Sell Property</Button>
					</div>
					<div className={styles.tabs_image_block}>
						<h3>Buying property?</h3>
						<span>
							Sign up to receive alerts about the UK’s best buy-to-let
							properties.
						</span>
						<Button variant="danger">Sell Property</Button>
					</div>
				</div>
			</div>
		</>
	);
}
