import React from 'react';
import styles from './page.module.css';
import Link from 'next/Link';
import Image from 'next/Image';
import {items} from './data.js';
import {notFound} from 'next/navigation';

const getData = (cat) => {
	const data = items[cat];
	if(data){
		return data;
	}
	return notFound();
};

export function generateMetadata({params}){
	return {
		title: params.category,
		description: params.category
	};
}

const Category = ({params}) => {
	const data = getData(params.category);

	return (
		<div className={styles.main}>
			<h1 className={styles.category}>{params.category}</h1>
			{data.map((c) => (
				<div className={styles.item} key={c.id}>
					<div className={styles.content}>
						<h1 className={styles.title}>{c.title}</h1>
						<p className={styles.desc}>
							{c.desc}
						</p>
						<Link className={styles.btn} href='#'>See More</Link>
					</div>
					<div className={styles.imgContainer}>
						<Image className={styles.img} alt='portfolio' width={500} height={500}
						src={c.image} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;