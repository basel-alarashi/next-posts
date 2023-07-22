"use client"
import React from 'react';
import Link from 'next/Link';
import Image from 'next/Image';
import "./components.css";
import DarkLightToggle from './DarkLightToggle';
import {signOut, useSession} from 'next-auth/react';

const Navbar = () => {
	const session = useSession();
	return (
		<div className="navbar">
			<Link href="/">
				<Image priority={true} alt='logo' width='100' height='100' src="/next.svg" />
			</Link>
			<div className="links">
				<DarkLightToggle />
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
				<Link href="/portfolio">Portfolio</Link>
				<Link href="/blog">BlogPosts</Link>
				<Link href="/dashboard">Dashboard</Link>
				{session.status === "authenticated" && (
					<button onClick={signOut} className="btn">
						Logout
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;