import React, { Component } from "react";
import PhysiqueInput from "./physiqueInput.js";
import CheckBoxSection from "./checkboxSection.js";
import DropDownSection from "./dropDownSection.js"
import surveyData from "../surveyData.js";
import instructions from "./surveyInstructions.js"

class Page extends Component {

	render () {

		console.log(this.props)
		//header, columns, questions, metric, section, responses
		let sectionObject;

		if (this.props.section === "physique") {
			sectionObject = <PhysiqueInput
								questions={this.props.questions}
								section={this.props.section}
								responses={this.props.responses[this.props.section]}
								handleSubmit={this.props.handleSubmit}
								updateUnits={this.props.updateUnits}
								updateResponses={this.props.updateResponses}
								metric={this.props.metric}
							/>
		}

//render the buttons based on which section ... 1st, middle ones, last....

		return (
				<div>
				{sectionObject}
				</div>
			)

	}

}

export default Page;