import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Map = () => {
	const GoogleMapExample = withGoogleMap((props) => (
		<GoogleMap defaultCenter={{ lat: 6.335, lng: 5.6037 }} defaultZoom={15} />
	));
	return (
		<div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
			<div className="container">
				<GoogleMapExample
					containerElement={<div style={{ height: `500px`, width: '100%' }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		</div>
	);
};

export default Map;
