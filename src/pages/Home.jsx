import React from 'react';
import Cards from './components/Cards.jsx';
import Imago from './components/Imago.jsx';
import Presentation from './components/Presentation.jsx';
import Slider from './components/Slider.jsx';
import Map from './components/Map.jsx';

const Home = (props) => {
	return (
		<div onClick={props.hideNav}>
			<Presentation />
			<Cards />
			<Slider />
			<Imago />
			<Map />
		</div>
	);
};

export default Home;
