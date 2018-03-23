import React, { Component } from "react";
import SubHeader from "./subHeader.js";
import Footer from "./footer.js";

class Survey extends Component {
	state = {};

	render() {
		return (
			<div className="surveySectionContainer">
				<SubHeader />
				<div className="surveyContainer" />
				<Footer />
			</div>
		);
	}
}

export default Survey;
