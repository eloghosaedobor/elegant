import React from 'react';
import './Footer.css';

const Footer = (props) => {
	return (
		<footer onClick={props.hideNav}>
			<div className="container">Footer</div>
		</footer>
	);
};

export default Footer;
