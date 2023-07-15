import React from 'react';
import Link from 'next/Link';
import Image from 'next/Image';
import "./components.css";

const Navbar = () => {
	return (
		<div className="navbar">
			<Link href="/"><Image width='100' height='100' src="/next.svg" /></Link>
			<div className="links">
				<Link href="/about">About</Link>
				<Link href="/contact">Contact</Link>
				<Link href="/portfolio">Portfolio</Link>
				<Link href="/blog">BlogPosts</Link>
				<Link href="/dashboard">Dashboard</Link>
				<button className="btn">Logout</button>
			</div>
		</div>
	);
};

export default Navbar;