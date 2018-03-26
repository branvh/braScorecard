import React, { Component } from "react";
import SubHeader from "./subHeader.js";
import Footer from "./footer.js";
import PhysiqueInput from "./physiqueInput.js";
import BleedingInput from "./bleedingInput.js";
import surveyData from "../surveyData.js";

class Survey extends Component {
	state = {
		isComplete: false,
		currentSection: "bleeding",
		sections: ["physique", "diagnostic", "bleeding", "history"],
		responses: {
			physique: {
				Height: false,
				Weight: false,
				Age: false
			},
			diagnostic: false,
			bleeding: {
				bleeding0: false,
				bleeding1: false,
				bleeding2: false,
				bleeding3: false,
				bleeding4: false,
				bleeding5: false
			},
			history: false
		}
	};

	handleSubmit = (section, data) => {
		let newResponses = Object.assign({}, this.state.responses);
		newResponses[section] = data;
		this.setSection(section);
	};

	setSection = lastSection => {
		//figure out if we are done or what the next section will be
		if (
			lastSection === this.state.sections[this.state.sections.length - 1]
		) {
			this.setState({ isComplete: true });
		} else {
			//move to next section...
		}
		console.log(lastSection);
	};

	render() {
		//store all current questions in an array for passage to child section componetn
		let sectionData = [];
		for (const question in surveyData) {
			if (this.state.currentSection === surveyData[question]["section"]) {
				sectionData.push(surveyData[question]);
			}
		}

		let currentSection;
		//determine which survey section to display
		if (this.state.currentSection === "physique") {
			currentSection = (
				<PhysiqueInput
					sectionData={sectionData}
					section={this.state.currentSection}
					defaults={this.state.responses[this.state.currentSection]}
					handleSubmit={this.handleSubmit}
				/>
			);
		} else if (this.state.currentSection === "bleeding") {
			currentSection = (
				<BleedingInput
					sectionData={sectionData}
					section={this.state.currentSection}
					defaults={this.state.responses[this.state.currentSection]}
					handleSubmit={this.handleSubmit}
				/>
			);
		}

		return (
			<div className="surveySectionContainer">
				<SubHeader />
				<div className="surveyContainer">{currentSection}</div>
				<Footer />
			</div>
		);
	}
}

export default Survey;
