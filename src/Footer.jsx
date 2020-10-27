import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
	return (
		<footer onClick={props.hideNav}>
			<div className="container">
				<h4>Join our newsletter to receive our best deals</h4>
				<p>You can unsubscribe at any time</p>
				<form className="mb-5">
					<input type="text" placeholder="Your email" className="p-2" />
					<button type="button" className="p-2">
						Subscribe
					</button>
				</form>
				<hr />
				<div className="row mb-5">
					<div className="col-md-4 mt-5">
						<h5 className="mb-3">About Us</h5>
						<Link to="/about" style={{ color: 'white' }}>
							How it works
						</Link>
						<Link to="/about" style={{ color: 'white' }}>
							Careers
						</Link>
						<Link to="/about" style={{ color: 'white' }}>
							Investors
						</Link>
						<Link to="/about" style={{ color: 'white' }}>
							Terms of service
						</Link>
					</div>
					<div className="col-md-4 mt-5">
						<h5>Our Services</h5>
						<Link to="/services" style={{ color: 'white' }}>
							Services
						</Link>
						<Link to="/services" style={{ color: 'white' }}>
							Support
						</Link>
						<Link to="/services" style={{ color: 'white' }}>
							Contact
						</Link>
					</div>
					<div className="col-md-4 mt-5">
						<h5>Social Media</h5>
						<a href="#" style={{ color: 'white' }}>
							Facebook
						</a>
						<a href="#" style={{ color: 'white' }}>
							Instagram
						</a>
						<a href="#" style={{ color: 'white' }}>
							Youtube
						</a>
						<a href="#" style={{ color: 'white' }}>
							Twitter
						</a>
					</div>
				</div>
				<hr />
				<div className="row">
					<div className="col-md-4 mt-2">
						LOGO <i className="fa fa-leaf" />
					</div>
					<div className="col-md-4 mt-2 social">
						<i className="fab fa-facebook" />
						<i className="fab fa-instagram" />
						<i className="fab fa-youtube" />
						<i className="fab fa-twitter" />
					</div>
					<div className="col-md-4 mt-2">Elego 2020</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
