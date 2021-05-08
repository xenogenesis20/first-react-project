import React from "react";
import PropTypes from "prop-types";

export const Navbar = props => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					{props.brand}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								{props.home}{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.about}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								{props.services}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};
Navbar.propTypes = {
	brand: PropTypes.string,
	services: PropTypes.string,
	about: PropTypes.string,
	home: PropTypes.string
};
