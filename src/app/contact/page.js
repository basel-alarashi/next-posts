import React from 'react';
import Image from 'next/Image';
import styles from './page.module.css';
// import Link from 'next/Link';

export const metadata = {
	title: 'Contact our team',
	description: 'Our support team'
};

const Contact = () => {
	return (
		<div>
			<h1 className={styles.title}>Let's keep in touch</h1>
			<div className={styles.main}>
				<div className={styles.imgContainer}>
					<Image width='450' height='500' alt="contact"
					src="/contact.png" />
				</div>
				<form className={styles.form}>
					<input type="text" placeholder="Name" className={styles.input} />
					<input type="text" placeholder="Email" className={styles.input} />
					<textarea className={styles.input} placeholder="Message" cols="30" rows="10"></textarea>
					<button href="#" className={styles.btn}>Send</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
