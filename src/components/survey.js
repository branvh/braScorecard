import React, { Component } from "react";
import SubHeader from "./subHeader.js";
import Footer from "./footer.js";
import PhysiqueInput from "./physiqueInput.js";
import BleedingInput from "./bleedingInput.js";
import CheckBoxSection from "./checkboxSection.js";
import surveyData from "../surveyData.js";

class Survey extends Component {
	state = {
		isComplete: false,
		currentSection: "otherIndicators",
		sections: ["physique", "diagnostic", "otherIndicators"],
		responses: {
			physique: {
				Height: false,
				Weight: false,
				Age: false
			},
			diagnostic: false,
			otherIndicators: {
				bleeding0: false,
				bleeding1: false,
				bleeding2: false,
				bleeding3: false,
				bleeding4: false,
				bleeding5: false,
				history0: false,
				history1: false,
				history2: false,
				history3: false,
				history4: false,
				history5: false
			}	
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
		//store all current questions in an array for passage to child section component
		let sectionData = [];
		for (const question in surveyData) {
			if (this.state.currentSection === surveyData[question]["section"]) {
				sectionData.push(surveyData[question]);
			} else if (this.state.currentSection === "otherIndicators") {
				if (surveyData[question]["section"] === "bleeding" || surveyData[question]["section"] === "history") {
				sectionData.push(surveyData[question]);
				}
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
		} else if (this.state.currentSection === "otherIndicators") {
			currentSection = (
				<CheckBoxSection
					title="otherIndicators"
					sectionData={sectionData}
					section={this.state.currentSection}
					sectionTitle="Bleeding Risks (Check = Yes)"
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
