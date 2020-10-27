import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Presentation.css';

const Presentation = () => {
	const [ h3, seth3 ] = useState('Because you’re worth it.');
	const [ svg, setsvg ] = useState('./assets/1.svg');
	const [ background, setBackground ] = useState({
		backgroundColor: '#cbcbf8'
	});

	useEffect(() => {
		const h3 = [ 'Brutal simplicity of thought.', 'Because you’re worth it.' ];
		const background = [ '#e9e9f7', '#cbcbf8' ];
		const svg = [ './assets/2.svg', './assets/1.svg' ];
		let x = 0;
		setInterval(() => {
			x++;
			if (x >= h3.length && x >= svg.length) {
				x = 0;
			}
			seth3(h3[x]);

			setsvg(svg[x]);
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
							<button className="btn btn-success">Learn more</button>
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
