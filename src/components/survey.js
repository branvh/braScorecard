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
		responses: '',
		backwardButton: false,
		forwardButton: false,
		finishButton: false
	};

	componentWillMount () {

		let blankResponses = this.createDefaultAnswers(surveyData)

		this.setState({
			currentSection: instructions['sequence'][0],
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

		let isComplete = false;
		let showForward = true;
		//if we are on the last section, determine if we must show the finish button
		if (this.state.isComplete) {
			isComplete = true //this way we don't override an already completed form - which can't be uncompleted since final drop down selects prevent this
		} else if (this.state.currentSection === this.state.sections[this.state.sections.length - 1]) {
			showForward = false;
			for (const q in this.state.responses[this.state.currentSection]) {

				if (this.state.responses[this.state.currentSection][q] === false) {
					isComplete = false;
					break;
				} else {
					isComplete = true;
				}

			}

		}

		let physiqueComplete = false;
		//don't show forward button on physique page if all responses aren't populated
		if (this.state.currentSection === 'physique') {

			for (const q in this.state.responses[this.state.currentSection]) {

				if (this.state.responses[this.state.currentSection][q] === false || this.state.responses[this.state.currentSection][q] === '') {
					physiqueComplete = false;
					showForward = false;
					break;
				} else {
					showForward = true;
					physiqueComplete = true;
				}

			}

		} 

		let showFinish = (this.state.currentSection === this.state.sections[this.state.sections.length - 1] && isComplete)

		this.setState({response: newResponses, isComplete: isComplete, finishButton: showFinish, forwardButton: showForward});

	}

	goForward = () => {
		let sectionNum = this.state.sections.indexOf(
			this.state["currentSection"]
		);

		let priorNum = sectionNum + 1;
		let nextSection = this.state.sections[priorNum];
		let showForwardButton = (this.state.currentSection === this.state.sections[this.state.sections.length - 2]) ? false : true;
		let showBackwardButton = true;
		let finishButton = (this.state.isComplete && this.state.currentSection === this.state.sections[this.state.sections.length - 2]) ? true : false;

		this.setState({ currentSection: nextSection, forwardButton: showForwardButton, backwardButton: showBackwardButton, finishButton: finishButton });
	};

	goBackward = () => {
		let sectionNum = this.state.sections.indexOf(
			this.state["currentSection"]
		);

		let priorNum = sectionNum - 1;
		let nextSection = this.state.sections[priorNum];
		let showForwardButton = true;
		let showBackwardButton = (this.state.currentSection === this.state.sections[1]) ? false : true;
		let finishButton = false;

		this.setState({ currentSection: nextSection, forwardButton: showForwardButton, backwardButton: showBackwardButton, finishButton: finishButton });

	};

	updateUnits = () => {
		this.setState({ metric: !this.state.metric });
	};

	finish = () => {

		alert(this.state.responses)

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

		return (
			<div className="surveySectionContainer">
				<SubHeader />
				<div className="surveyContainer">{currentPage}</div>
				<Footer 
					showForward = {this.state.forwardButton}
					showBackward = {this.state.backwardButton}
					showFinish = {this.state.finishButton}
					goForward={this.goForward}
					goBackward={this.goBackward}
					finish={this.finish}
				/>
			</div>
		);
	}
}

export default Survey;
