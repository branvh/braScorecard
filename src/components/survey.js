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
		currentSection: "diagnostic",
		sections: ["physique", "otherIndicators", "diagnostic"],
		metric: false, //indicates NOT metric
		responses: {
			physique: {
				Height: false,
				Weight: false,
				Age: false
			},
			diagnostic: {
				diagnostic0: false,
				diagnostic1: false,
				diagnostic2: false,
				diagnostic3: false,
				diagnostic4: false
			},
			diagnosticDD: {
				diagnosticDD0: false,
				diagnosticDD1: false,
				diagnosticDD2: false,
				diagnosticDD3: false,
				diagnosticDD4: false
			},
			bleeding: {
				bleeding0: false,
				bleeding1: false,
				bleeding2: false,
				bleeding3: false,
				bleeding4: false,
				bleeding5: false
			},
			history: {
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
		this.setState({ responses: newResponses });
		this.setSection(this.state.currentSection);
	};

	updateCheckBox = (section, element, value) => {
		let newState = Object.assign({}, this.state);
		newState["responses"][section][element] = value;
		this.setState({ newState });
	};

	goForward = () => {
		let sectionNum = this.state.sections.indexOf(
			this.state["currentSection"]
		);
		let priorNum = sectionNum + 1;
		let nextSection = this.state.sections[priorNum];
		this.setState({ currentSection: nextSection });
	};

	goBackward = () => {
		let sectionNum = this.state.sections.indexOf(
			this.state["currentSection"]
		);
		let priorNum = sectionNum - 1;
		let nextSection = this.state.sections[priorNum];
		this.setState({ currentSection: nextSection });
	};

	setSection = lastSection => {
		//figure out if we are done or what the next section will be
		if (
			lastSection === this.state.sections[this.state.sections.length - 1]
		) {
			this.setState({ isComplete: true });
		} else {
			//move to next section...
			let sectionNum = this.state.sections.indexOf(
				this.state["currentSection"]
			);
			let nextNum = sectionNum + 1;
			let nextSection = this.state.sections[nextNum];
			this.setState({ currentSection: nextSection });
		}
		console.log(lastSection);
	};

	updateUnits = checked => {
		this.setState({ metric: checked });
	};

	runAnalysis = () => {

		alert(this.state.responses)

	}

	render() {
		//store all current questions in an array for passage to child section component
		let sectionData = [];
		for (const question in surveyData) {
			if (this.state.currentSection === surveyData[question]["section"]) {
				sectionData.push(surveyData[question]);
			} else if (this.state.currentSection === "otherIndicators") {
				if (
					surveyData[question]["section"] === "bleeding" ||
					surveyData[question]["section"] === "history"
				) {
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
					updateUnits={this.updateUnits}
					metric={this.state.metric}
				/>
			);
		} else if (this.state.currentSection === "otherIndicators") {
			let bleedingQuestions = sectionData.filter(
				question => question["section"] === "bleeding"
			);
			let historyQuestions = sectionData.filter(
				question => question["section"] === "history"
			);

			currentSection = (
				<div className="wrapper">
					<div className="col-sm-6">
						<CheckBoxSection
							title="bleeding"
							updateCheckBox={this.updateCheckBox}
							sectionData={bleedingQuestions}
							section={this.state.currentSection}
							sectionTitle="Bleeding Risk:"
							defaults={
								this.state.responses[this.state.currentSection]
							}
							handleSubmit={this.handleSubmit}
							values={this.state.responses["bleeding"]}
						/>
					</div>
					<div className="col-sm-6">
						<CheckBoxSection
							title="history"
							updateCheckBox={this.updateCheckBox}
							sectionData={historyQuestions}
							section={this.state.currentSection}
							sectionTitle="Your History:"
							defaults={
								this.state.responses[this.state.currentSection]
							}
							handleSubmit={this.handleSubmit}
							values={this.state.responses["history"]}
						/>
					</div>
					<div className="forwardBackwardBtnContainer">
						<button
							className="btn btn-success"
							onClick={this.goBackward}
							id="priorButton"
						>
							Prior Section
						</button>
						<button
							className="btn btn-success"
							onClick={this.goForward}
							id="nextButton"
						>
							Next Section
						</button>
					</div>
				</div>
			);
		} else if (this.state.currentSection === "diagnostic") {
			let yesNoQuestions = sectionData.filter(
				question => question["section"] === "diagnostic"
			);
			let dropDownQuestions = sectionData.filter(
				question => question["section"] === "diagnosticDD"
			);

			currentSection = (
				<div className="wrapper">
					<div className="col-sm-6">
						<CheckBoxSection
							title="diagnostic"
							updateCheckBox={this.updateCheckBox}
							sectionData={yesNoQuestions}
							section={"diagnostic"}
							sectionTitle="Medical History:"
							defaults={this.state.responses["diagnostic"]}
							handleSubmit={this.handleSubmit}
							values={this.state.responses["diagnostic"]}
						/>
					</div>
					<div className="col-sm-6" />
					<div className="forwardBackwardBtnContainer">
						<button
							className="btn btn-success"
							onClick={this.goBackward}
							id="priorButton"
						>
							Prior Section
						</button>
						<button
							className="btn btn-success"
							onClick={this.runAnalysis}
							id="runAnaylsisButton"
						>
							Run Analysis
						</button>
					</div>
				</div>
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
