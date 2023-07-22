import React from 'react';
import styles from './page.module.css';
import Image from 'next/Image';
import Link from 'next/Link';
import {notFound} from 'next/navigation';

export const metadata = {
	title: 'Blog Posts',
	description: 'Users Posts'
};

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts');
  
  if (!res.ok) {
    return notFound();
  }
 
  return res.json();
}

const Blog = async () => {
	const data = await getData();
	return (
		<div>
			{data.map((item) => (
				<Link href={`/blog/${item._id}`} className={styles.item} key={item._id}>
					<div className={styles.imgContainer}>
						<Image className={styles.img} alt='blog' width={300} height={200}
						src={item.img} />
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{item.title}</h1>
						<p className={styles.desc}>{item.desc}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
//'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg'