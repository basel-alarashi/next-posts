import React from 'react';
import styles from './page.module.css';
import Link from 'next/Link';
import Image from 'next/Image';

const Category = ({params}) => {
	console.log(params);
	return (
		<div className={styles.main}>
			<h1 className={styles.category}>{params.category}</h1>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Creative Portfolio</h1>
					<p className={styles.desc}>
						We always look for creativity and don't accept less than the best.
					</p>
					<Link className={styles.btn} href='#'>See More</Link>
				</div>
				<div className={styles.imgContainer}>
					<Image className={styles.img} alt='portfolio' width={500} height={500}
					src='https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg' />
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Creative Portfolio</h1>
					<p className={styles.desc}>
						We always look for creativity and don't accept less than the best.
					</p>
					<Link className={styles.btn} href='#'>See More</Link>
				</div>
				<div className={styles.imgContainer}>
					<Image className={styles.img} alt='portfolio' width={500} height={500}
					src='https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg' />
				</div>
			</div>
		</div>
	);
};

export default Category;