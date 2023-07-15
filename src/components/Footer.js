import React from 'react';
import "./components.css";
import Image from 'next/Image';

const Footer = () => {
	return (
		<div className="footer">
			<div>©2023 Next BlogPosts all right are reserved.</div>
			<div className="social">
				<Image className="icon" src="/1.png" width='25' height='25' />
				<Image className="icon" src="/2.png" width='25' height='25' />
				<Image className="icon" src="/3.png" width='25' height='25' />
				<Image className="icon" src="/4.png" width='25' height='25' />
			</div>
		</div>
	);
};

export default Footer;