"use client"
import React from 'react';
import {signIn, useSession} from 'next-auth/react';
import styles from './page.module.css';
import Link from 'next/Link';
import Image from 'next/Image';
import {useRouter} from 'next/navigation';

const Login = () => {
	const session = useSession();
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", {email, password});
	};

	if(session.status === "loading"){
		return (<p>Loading...</p>);
	} else if(session.status === "authenticated"){
		router?.push("/dashboard");
	} else{
		return (
			<div className={styles.main}>
				<form className={styles.form} onSubmit={e => handleSubmit(e)}>
					<input autoComplete='off' type='email' placeholder='Email' className={styles.input} required />
					<input autoComplete='off' type='password' placeholder='Password' className={styles.input} required />
					<button className={styles.btn}>Login</button>
				</form>
				
				<Link className={styles.lnk} href='/dashboard/register'>Don't have an account?</Link>
				<button className={styles.github} onClick={() => signIn("github")}>
					<Image src='/github.png' alt='github' width='50' height='50' />
					Login with Github
				</button>
			</div>
		);
	}
};

export default Login;
//{error && "Some thing went wrong!"}
