import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	return (
		<nav>
			<h5>
				<NavLink to="/elegant" className="logo">
					LOGO
				</NavLink>
			</h5>
			<i className={props.click ? 'fa fa-bars' : 'fa fa-times'} onClick={props.handleClick} id="click" />
			<ul className={props.click ? 'unshow' : 'show'}>
				<li>
					<NavLink
						exact
						to="/elegant"
						className="link"
						onClick={props.hideNav}
						activeStyle={{ color: ' #5CB85C' }}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/elegant/about"
						className="link"
						onClick={props.hideNav}
						activeStyle={{ color: ' #5CB85C' }}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/elegant/services"
						className="link"
						onClick={props.hideNav}
						activeStyle={{ color: ' #5CB85C' }}
					>
						Services
					</NavLink>
				</li>
				<li>
					<NavLink
						exact
						to="/elegant/team"
						className="link"
						onClick={props.hideNav}
						activeStyle={{ color: ' #5CB85C' }}
					>
						Team
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
