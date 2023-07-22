import React from 'react';
import Link from 'next/Link';
import styles from './page.module.css';

export const metadata = {
	title: 'Portfolio',
	description: 'Our works'
};

const Portfolio = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.header}>Choose a gallery:</h1>
			<div className={styles.items}>
				<Link href="/portfolio/illustrations" className={styles.item}>
					<span className={styles.title}>Illustrations</span>
				</Link>
				<Link href="/portfolio/websites" className={styles.item}>
					<span className={styles.title}>Websites</span>
				</Link>
				<Link href="/portfolio/applications" className={styles.item}>
					<span className={styles.title}>Applications</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
