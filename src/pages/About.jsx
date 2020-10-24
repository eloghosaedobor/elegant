import React from 'react';
import './About.css';

const About = (props) => {
	return (
		<div onClick={props.hideNav}>
			<div className="aboutMain">
				<div className="container">
					<h3>About Us</h3>
				</div>
			</div>
			<div className="about">
				<div className="container">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem possimus! Asperiores veniam
						excepturi dolore, fugit commodi ab vel, cum ipsam possimus ullam quos itaque nostrum iusto
						vitae. Totam, laborum dolorum minus obcaecati mollitia laudantium quidem unde in quibusdam,
						consequuntur rerum iure necessitatibus perspiciatis! Necessitatibus dolorum sequi excepturi
						dolorem doloremque!
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero itaque eaque eos aspernatur? Esse
						consectetur expedita eaque? Recusandae eligendi eveniet vero. Laborum harum asperiores aut,
						inventore totam id reiciendis, itaque atque impedit sunt amet et nisi eaque nemo? Assumenda aut
						rerum itaque praesentium at dignissimos natus iure ipsa vel similique reiciendis fuga ratione,
						illo aperiam ipsam mollitia! Aperiam sunt id enim perspiciatis? Non rerum harum vero ex nam
						molestiae aut reiciendis ipsam exercitationem aperiam consequuntur blanditiis labore a
						aspernatur commodi perspiciatis, qui mollitia, dolores eaque et expedita asperiores. Adipisci
						necessitatibus, voluptatibus consequuntur repudiandae labore incidunt omnis harum facere libero
						deserunt, eveniet accusantium reprehenderit culpa sapiente assumenda. Reiciendis iure beatae
						commodi totam exercitationem. Hic ullam sit ea iusto consequatur nulla. Cupiditate sit inventore
						quis mollitia eius molestiae nemo beatae, quod, voluptates molestias numquam, esse similique!
						Accusantium quos reiciendis a asperiores culpa earum quibusdam officia laboriosam saepe! Ullam a
						earum sint quaerat.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
