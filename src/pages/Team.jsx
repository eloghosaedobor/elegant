import React from 'react';
import './Team.css';

const Team = (props) => {
	return (
		<div onClick={props.hideNav}>
			<div className="team">
				<h3 className="mb-2">Our Team</h3>
				<div className="container">
					<div className="row">
						<div className="col-md-6 mt-3">
							<img
								src="./assets/male.png"
								alt="img"
								className="img-fluid d-block mx-auto rounded-circle"
							/>
							<p>John Doe (CEO)</p>
						</div>
						<div className="col-md-6 mt-3">
							<img
								src="./assets/download.png"
								alt="img"
								className="img-fluid d-block mx-auto rounded-circle"
							/>
							<p>Mary Jane (CFO)</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mt-3">
							<img
								src="./assets/male.png"
								alt="img"
								className="img-fluid d-block mx-auto rounded-circle"
							/>
							<p>John Doe (Accountant)</p>
						</div>
						<div className="col-md-6 mt-3">
							<img
								src="./assets/download.png"
								alt="img"
								className="img-fluid d-block mx-auto rounded-circle"
							/>
							<p>Mary Jane (Marketer)</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mt-3">
							<img
								src="./assets/male.png"
								alt="img"
								className="img-fluid d-block mx-auto rounded-circle"
							/>
							<p>John Doe (Secretary)</p>
						</div>
						<div className="col-md-6 mt-3">
							<img
								src="./assets/download.png"
								alt="img"
								className="img-fluid d-block mx-auto rounded-circle"
							/>
							<p>Mary Jane (Intern)</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
