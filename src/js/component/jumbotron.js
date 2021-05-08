import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = props => {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4">{props.title}</h1>
				<p>{props.desc} </p>
				<a className="btn btn-primary btn-lg" href="#" role="button">
					{props.btnlabel}
				</a>
			</div>
		</div>
	);
};
Jumbotron.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	btnlabel: PropTypes.string
};
