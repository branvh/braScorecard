import React, { Component } from "react";
import SubHeader from "./subHeader.js";
import Footer from "./footer.js";
import Page from "./page.js"
import surveyData from "../surveyData.js";
import instructions from "./surveyInstructions.js"

class Survey extends Component {
	state = {
		isComplete: false,
		currentSection: '',
		sections: '',
		metric: false, //indicates NOT metric
		responses: ''
	};

	componentWillMount () {

		let blankResponses = this.createDefaultAnswers(surveyData)

		this.setState({
			currentSection: 'procedures', //instructions['sequence'][0],
			sections: instructions['sequence'],
			responses: blankResponses
		});

	}

	createDefaultAnswers = (sourceData) => {

		let responses = {};
		//take questions from survey, parse into sections and create an object that conntains an object for each sequence which contains the corresponding sections
		//loop through the sequence key - these are the high level sections - create an set of unique question ids per section
		instructions['sequence'].forEach((section, secIndex) => {

			let sectionObj = {}
			let i = 0;
			//loop through ALL questions and append questions which map to a given section to the section object, they will be id'ed as they appear in sequence in the q data object
			for (const question in sourceData) {

				if (sourceData[question]['section'] === section) {

					let id = section + i;
					i++;
					sectionObj[id] = false

				}

			} // then we will append this subset of questions to the main response object outside of the outer loop
			responses[section] = sectionObj;

		} );

		return responses;

	}

	updateResponses = (id, response) => { 

		let newResponses = Object.assign({}, this.state.responses);
		newResponses[this.state.currentSection][id] = response;
		this.setState({response: newResponses});

	}

	handleSubmit = (section, id, data) => {
		let newResponses = Object.assign({}, this.state.responses);
		newResponses[section][id] = data;
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

	updateUnits = () => {
		this.setState({ metric: !this.state.metric });
	};

	runAnalysis = () => {

		alert(this.state.responses)

	}

	updateDDResponse = (target, val, section) => {

		let newValues = Object.assign({}, this.state.responses);
		newValues[section][target] = val;
		this.setState({responses: newValues})

	}

	render() {

		//store all current questions in an array for passage to child section component
		let sectionData = [];
		for (const question in surveyData) {
			if (this.state.currentSection === surveyData[question]["section"]) {
				sectionData.push(surveyData[question]);
			} 
		}

		//next we pass down our current section, section headers to be rendered on page, and the section data in order to generate a page
		let currentPage = <Page 
							header={instructions['sections'][this.state.currentSection]['headers']}
							columns={instructions['sections'][this.state.currentSection]['col']}
							questions={sectionData}
							metric={this.state.metric}
							section={this.state.currentSection}
							updateUnits={this.updateUnits}
							responses={this.state.responses}
							updateResponses={this.updateResponses}
							handleSubmit={this.handleSubmit}
						/>

		/*let currentSection;
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
							sectionTitle="Do You Have Any of These?"
							values={this.state.responses["bleeding"]}
						/>
					</div>
					<div className="col-sm-6">
						<CheckBoxSection
							title="history"
							updateCheckBox={this.updateCheckBox}
							sectionData={historyQuestions}
							section={this.state.currentSection}
							sectionTitle="Have You Had Any Of These?"
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

			//we can only display the run analysis section if ALL medical history questions are answered in the drop down to the right
			let sectionComplete = true;

			for (const answer in this.state.responses["diagnosticDD"]) {
				sectionComplete = (!this.state.responses["diagnosticDD"][answer]) ? false : true;
				if (sectionComplete	=== false) break; //otherwise, we could reset to true if a subsequent answer is true
			}


			currentSection = (
				<div className="wrapper">
					<div className="row">
					<h3 id="lastQuestions">Please Answer the Following</h3>
					</div>
					<div className="col-sm-6">
						<CheckBoxSection
							title="diagnostic"
							updateCheckBox={this.updateCheckBox}
							sectionData={yesNoQuestions}
							section={"diagnostic"}
							sectionTitle={false}
							values={this.state.responses["diagnostic"]}
						/>
					</div>
					<div className="col-sm-6" >
						<DropDownSection
							title="diagnosticDD"
							sectionData={dropDownQuestions}
							section={"diagnostic"}
							sectionTitle={false}
							handleSubmit={this.handleSubmit}
							updateDDResponse={this.updateDDResponse}
							values={this.state.responses["diagnosticDD"]}
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
						{(sectionComplete) ? <button
							className="btn btn-success"
							onClick={this.runAnalysis}
							id="runAnaylsisButton"
						>
							Run Analysis
						</button> : false}
					</div>
				</div>
			);
		}
*/
		return (
			<div className="surveySectionContainer">
				<SubHeader />
				<div className="surveyContainer">{currentPage}</div>
				<Footer />
			</div>
		);
	}
}

export default Survey;
/*
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
											<div className="arrowContainer">
					<i 
					className="arrow left"
					onClick={this.goBackward}
					id="priorButton"
					/>
					</div>
					<div className="arrowContainer">
					<i 
					className="arrow right"
					onClick={this.goForward}
					id="nextButton"
					/>
					</div>
*/