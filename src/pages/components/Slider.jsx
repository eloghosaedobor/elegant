import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
	const [ slido, setslido ] = useState({
		left: ''
	});

	useEffect(() => {
		let x = 0;
		setInterval(() => {
			x--;
			if (x === -2700) {
				x = 0;
			}
			setslido({ left: x });
		}, 10);
	}, []);

	return (
		<div className="slider">
			<div className="container">
				<div className="slide" style={slido}>
					<div>
						<img src="./assets/rice.jpg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/1.jpg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/2.jpg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/soup.jpg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/3.jpg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/spag.jpg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/burger.png" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/3.svg" className="img-fluid d-block mx-auto" alt="" />
					</div>
					<div>
						<img src="./assets/hello.svg" className="img-fluid d-block mx-auto" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slider;
