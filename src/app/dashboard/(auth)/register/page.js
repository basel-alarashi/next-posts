"use client"
import React, {useState} from 'react';
import styles from './page.module.css';
import Link from 'next/Link';
import {useRouter} from 'next/navigation';

const Register = () => {
	const [error, setError] = useState(false);

	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		try{
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({name, email, password})
			});
			res.status === 201 && router.push('/dashboard/login?success=Account has been created');
		} catch(error){
			setError(true);
			console.log('Register Error', error);
		}
	};

	return (
		<div className={styles.main}>
			<form className={styles.form} onSubmit={e => handleSubmit(e)}>
				<input autoComplete='off' type='text' placeholder='User Name' className={styles.input} required />
				<input autoComplete='off' type='email' placeholder='Email' className={styles.input} required />
				<input autoComplete='off' type='password' placeholder='Password' className={styles.input} required />
				<button className={styles.btn}>Register</button>
			</form>
			{error && "Some thing went wrong!"}
			<Link className={styles.lnk} href='/dashboard/login'>Already have an account?</Link>
		</div>
	);
};

export default Register;