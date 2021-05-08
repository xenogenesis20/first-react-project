import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div>
			<div className="card text-center " style={{ width: "15rem" }}>
				<img
					src={props.imgUrl}
					className="card-img-top img-fluid w-100"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.desc}</p>
				</div>
				<div className="card-footer">
					<a href={props.btnUrl} className="btn btn-primary">
						{props.btnLabel}
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.string,
	btnUrl: PropTypes.string,
	btnLabel: PropTypes.string
};
