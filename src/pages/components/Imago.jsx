import React, { useState, useEffect } from 'react';
import './Imago.css';

const Imago = () => {
	const [ image, setimage ] = useState('assets/1.jpg');
	const [ count, setcount ] = useState(0);

	const images = [ 'assets/2.jpg', 'assets/3.jpg', 'assets/1.jpg' ];
	const increment = () => {
		setcount(count + 1);
		setimage(images[count]);
	};
	const decrement = () => {
		setcount(count - 1);
		setimage(images[count]);
	};
	if (count >= images.length) {
		setcount(0);
	}
	if (count < 0) {
		setcount(images.length - 1);
	}

	return (
		<div className="imago">
			<div className="container">
				<div className="row">
					<div className="col-md-6 img">
						<img src={image} className="img-fluid d-block mx-auto" />
						<i className="fa fa-angle-left previous" onClick={decrement} />
						<i className="fa fa-angle-right next" onClick={increment} />
					</div>
					<div className="col-md-6">
						<img src="assets/hello.svg" alt="" className="img-fluid d-block mx-auto" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Imago;
