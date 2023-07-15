import React from 'react';
import styles from './page.module.css';
import Image from 'next/Image';
import Link from 'next/Link';

const About = () => {
	return (
		<div className={styles.main}>
			<div className={styles.imgContainer}>
				<Image className={styles.img}
				src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg"
				width={1200} height={400}
				alt="about" />
				<div className={styles.textContainer}>
					<h1>About us</h1>
					<p>Our Website's Information</p>
				</div>
			</div>
			<div className={styles.flexible}>
				<div className={styles.who}>
					<h1>Who Are We?</h1>
					<p>We are a team of creative engineers exists of four Programmers:<br/><br/>
						- Basel Alarashi<br/>
						- Abdulmajeed Tawfeeq<br/>
						- Mohammad Hamra<br/>
						- Ali Abu Oun<br/><br/>
						and our leader Baraa Alarashi.
					</p>

				</div>
				<div className={styles.what}>
					<h1>What We Do?</h1>
					<p>
						We are a very pasion skill team in Programming.
						We present many products and projects such as:<br/><br/>
						- Web apps.<br/>
						- Desktop apps.<br/>
						- Android apps.<br/>
						- IOS apps.<br/>
					</p>
					<Link href="/contact" className={styles.btn}>Contact Us</Link>
				</div>
			</div>
		</div>
	);
};

export default About;
