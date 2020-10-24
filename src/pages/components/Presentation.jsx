import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Presentation.css';

const Presentation = () => {
	const [ h3, seth3 ] = useState('The only food API.');
	const [ svg, setsvg ] = useState('./assets/1.svg');
	const [ button, setbutton ] = useState('btn btn-success mt-3');
	const [ background, setBackground ] = useState({
		backgroundColor: '#e9e9f7'
	});

	useEffect(() => {
		const h3 = [ 'Contact us today.', 'The only food API.' ];
		const background = [ '#e9e9f7', '#cbcbf8' ];
		const svg = [ './assets/2.svg', './assets/1.svg' ];
		const button = [ 'btn btn-danger mt-3', 'btn btn-success mt-3' ];
		let x = 0;
		setInterval(() => {
			x++;
			if (x >= h3.length && x >= background.length && x >= svg.length && x >= button.length) {
				x = 0;
			}
			seth3(h3[x]);
			setBackground({ backgroundColor: background[x] });
			setsvg(svg[x]);
			setbutton(button[x]);
		}, 2000);
	}, []);

	return (
		<div className="presentation" style={background}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h3 className="mb-4">{h3}</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum eligendi quas quisquam
							aliquam error voluptas velit inventore facilis nesciunt.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis itaque, quidem quasi quas
							reiciendis totam facilis beatae, esse repudiandae tempora quae dolores! Tenetur suscipit
							numquam perferendis fuga accusamus blanditiis saepe.
						</p>
						<Link to="/about">
							<button className={button}>Learn more</button>
						</Link>
					</div>

					<div className="col-lg-6">
						<img src={svg} alt="hello" className="img-fluid d-block mx-auto" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
