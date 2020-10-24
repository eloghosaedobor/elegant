import React from 'react';
import './Cards.css';

const Cards = () => {
	return (
		<div className="cards">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="cardo shadow-sm">
							<i className="fa fa-home mb-3" />
							<h5>Recipes</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis
								exercitationem delectus id quaerat necessitatibus non numquam quod nobis totam.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="cardo shadow-sm">
							<i className="fa fa-home mb-3" />
							<h5>Recipes</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis
								exercitationem delectus id quaerat necessitatibus non numquam quod nobis totam.
							</p>
						</div>
					</div>
					<div className="col-md-4">
						<div className="cardo shadow-sm">
							<i className="fa fa-home mb-3" />
							<h5>Recipes</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, corporis
								exercitationem delectus id quaerat necessitatibus non numquam quod nobis totam.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
