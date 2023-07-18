import React from 'react';
import styles from './page.module.css';
import Image from 'next/Image';
import Link from 'next/Link';

const Blog = () => {
	return (
		<div>
			<Link href='/blog/2'>
				<div className={styles.item}>
					<div className={styles.imgContainer}>
						<Image className={styles.img} alt='blog' width={300} height={200}
						src='https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg' />
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>Science</h1>
						<p className={styles.desc}>Our Advanced Technology and Luxuriouse life...</p>
					</div>
				</div>
			</Link>
			<Link href='#'>
				<div className={styles.item}>
					<div className={styles.imgContainer}>
						<Image className={styles.img} alt='blog' width={300} height={200}
						src='https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg' />
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>Science</h1>
						<p className={styles.desc}>Our Advanced Technology and Luxuriouse life...</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Blog;
