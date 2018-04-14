import React, { Component } from "react";
import SubHeader from "./subHeader.js";
import Footer from "./footer.js";
import Page from "./page.js"
import surveyData from "../surveyData.js";
import instructions from "./surveyInstructions.js"
import RegressionMatrix from './regressionMatrix.js';
import RiskTable from './riskTable.js';

class Survey extends Component {
	state = {
		isComplete: false,
		currentSection: '',
		sections: '',
		metric: false, //indicates NOT metric
		responses: '', //{"physique":{"physique0":"29","physique1":"222","physique2":"22"},"bleeding":{"bleeding0":false,"bleeding1":false,"bleeding2":false,"bleeding3":false,"bleeding4":false,"bleeding5":false,"bleeding6":false,"bleeding7":false},"procedures":{"procedures0":false,"procedures1":false,"procedures2":false,"procedures3":false,"procedures4":false,"procedures5":false},"diagnostic":{"diagnostic0":false,"diagnostic1":false,"diagnostic2":false,"diagnostic3":false,"diagnostic4":false},"other":{"other0":"2","other1":"Not within a year","other2":"One","other3":"No"}},
		backwardButton: true,
		forwardButton: true,
		finishButton: false,
		betaVector: false,
		regressionOutput: false,
		displayRiskTable: false,
		radiationToggle: false,
		incercepts: ['-4.645',	'-5.873',	'-7.87',	'-5.695',	'-5.055',	'-6.19',	'-3.576',	'-5.277',	'-5.466',	'-4.957',	'-4.581',	'-5.181',	'-4.949',	'-5.155',	'-3.286',	'-5.155',	'-5.155',	'-5.155',	'-3.576',	'-3.576',	'-3.576',	'-5.466',	'-5.466',	'-5.466',	'-4.957',	'-4.957',	'-4.957',	'-4.581',	'-4.581',	'-4.581',	'-5.181',	'-5.181',	'-4.949',	'-4.949',	'-4.949']
};

//dummy answers if we need for quick tests
//{"physique":{"physique0":"29","physique1":"222","physique2":"22"},"bleeding":{"bleeding0":false,"bleeding1":false,"bleeding2":false,"bleeding3":false,"bleeding4":false,"bleeding5":false,"bleeding6":false,"bleeding7":false},"procedures":{"procedures0":false,"procedures1":false,"procedures2":false,"procedures3":false,"procedures4":false,"procedures5":false},"diagnostic":{"diagnostic0":false,"diagnostic1":false,"diagnostic2":false,"diagnostic3":false,"diagnostic4":false},"other":{"other0":"2","other1":"Not within a year","other2":"One","other3":"No"}}

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

	calculateBetaVector = () => {

		//answers are captured in object with format of object - section - answers and answer id are named in convention of section0....sectionN
		//the surey instructions object has a mapping of id and answer

		//blank output vector
		let output = [];

		//############################
		//beta 0 - BMI
		let BMI;
		if (this.state.metric) {
			BMI = 10000 * parseFloat(this.state.responses['physique']['physique0']) / (parseFloat(this.state.responses['physique']['physique1']) * parseFloat(this.state.responses['physique']['physique1']) )
		} else {  //not metric
			BMI = 703 * parseFloat(this.state.responses['physique']['physique0']) / (parseFloat(this.state.responses['physique']['physique1']) * parseFloat(this.state.responses['physique']['physique1'] ) )
		}

		output.push(BMI);

		//###########################
		output.push(0); // age doesn't receive a beta, so pushing a 0 to keep indices correct

		//###########################
		//beta 2 - high blood pressure
		if (this.state.responses['diagnostic']['diagnostic0'] === true || this.state.responses['bleeding']['bleeding7'] === true) {
			output.push(1)
		} else {
			output.push(0)
		}

		//##########################
		//beta 3 - diabetes
		if (this.state.responses['diagnostic']['diagnostic2']) {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 4 - shortness of breath
		if (this.state.responses['diagnostic']['diagnostic3']) {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 5 - chemo
		if (this.state.responses['diagnostic']['diagnostic4']) {
			output.push(1)
		} else {
			output.push(0)
		}


		//#########################
		//beta 6 - ASA > 3  [i.e. 4 or 5]
		if (parseFloat(this.state.responses['other']['other0']) > 3) {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 7 - smoking not within 30 days
		if (this.state.responses['other']['other1'] === "Not within 30 days") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 8 - current smoker
		if (this.state.responses['other']['other1'] === "Currently smoking") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 9 - smoking not within a year
		if (this.state.responses['other']['other1'] === "Not within a year") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 10 - any smoking
		if (this.state.responses['other']['other1'] !== "Never") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 11 - both sides
		if (this.state.responses['other']['other2'] === "Both") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 12 - pre-operative radiation
		if (this.state.responses['other']['other3'] === "Yes") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 13 - post-operative radiation
		if (this.state.responses['other']['other4'] === "Yes") {
			output.push(1)
		} else {
			output.push(0)
		}

		//#########################
		//beta 14 - yes to ANY bleeding risk question aside from chronic aspirin and the 'if yes, can you discontinue - which is bleeding5'
		let bleeding = 0;
		let bleedingExclusion = ['bleeding5', 'bleeding6'];

		for (const q in this.state.responses['bleeding']) {
			if (this.state.responses['bleeding'][q] && bleedingExclusion.indexOf(q) === -1) {

				if (q === 'bleeding4' && this.state.responses['bleeding5'] ) {
					//do nothing
				} else {
					bleeding = 1;
					break
				}
			}
		}
		output.push(bleeding)

		//#########################
		//beta 15 - yes to ANY cardiac question (which we classified as the "procedure" section)
		let cardiac = 0;
		for (const q in this.state.responses['procedures']) {
			if (this.state.responses['procedures'][q]) {
				cardiac = 1;
				break
			}
		}
		output.push(cardiac);

		//the final 4 betas = 1 for the modalities
		//let finalFour = [1,1,1,1]
		output.push(1);
		output.push(1);
		output.push(1);
		output.push(1);

		this.setState({betaVector: output});

		//calculate risk factors (the output table)
		this.calculateRiskMatrix(output);

	}

	calculateRiskMatrix = (answers) => {

		let factors = Object.keys(RegressionMatrix);

		//iterate through entire regression object
		let regressionOutput = factors.map((cur, ind) => {

			//y-intercept
			let intercept = parseFloat(this.state.incercepts[ind])

			//multiply the corresponding answer with the regression beta
			let answer = answers.reduce(
				  (accumulator, currentValue, currentIndex, array) => {

				    return accumulator + parseFloat(currentValue) * RegressionMatrix[ind][currentIndex];
				  },
				  intercept //add the y-intercept 
				);

			return answer
		})

		this.setState({regressionOutput: regressionOutput, displayRiskTable: true}, () => {console.log(this.state.regressionOutput)})

	}

	updateResponses = (id, response) => { 

		let newResponses = Object.assign({}, this.state.responses);
		newResponses[this.state.currentSection][id] = response;

		let isComplete = false;
		//if we are on the last section, determine if we must enable the finish button
		if (this.state.isComplete) {
			isComplete = true //this way we don't override an already completed form - which can't be uncompleted since final drop down selects prevent this
		} else if (this.state.currentSection === this.state.sections[this.state.sections.length - 1]) {

			for (const q in this.state.responses[this.state.currentSection]) {

				if (this.state.responses[this.state.currentSection][q] === false) {
					isComplete = false;
					break;
				} else {
					isComplete = true;
				}

			}

		}

		this.setState({response: newResponses, isComplete: isComplete});

	}

	updatePhysique = (responses, metric) => {

		let newResponses = Object.assign({}, this.state.responses);

		newResponses['physique'] = responses;

		this.setState({responses: newResponses, metric: metric})

	}

	changeSection = (button) => {

		let sectionNum = this.state.sections.indexOf(
			this.state["currentSection"]
		);

		let nextSection;
		if (button === 'nextButton') {
		
			nextSection = sectionNum + 1;
			this.setState({currentSection: this.state.sections[nextSection]});

		} else if (button === 'priorButton') {
		
			nextSection = sectionNum - 1;
			this.setState({currentSection: this.state.sections[nextSection]});

		} else if (button === 'runAnaylsisButton' && this.state.isComplete) {
			
			this.finish();

		}

	};


	updateUnits = () => {
		this.setState({ metric: !this.state.metric });
	};

	updateRadiation = () => {
console.log(this.state.betaVector)
		//change the Beta vector question 12 response (pre-radiation) which is located in array index 11 (since array counting starts @ 0 in JavaScript)
		let newBeta = this.state.betaVector.slice();

		newBeta[11] = (!this.state.radiationToggle) ? 1 : 0;  //since state hasn't changed yet, we negate the toggle in this calculation

		this.setState({radiationToggle: !this.state.radiationToggle, betaVector: newBeta});

		//calculate risk factors (the output table)
		this.calculateRiskMatrix(newBeta);

	}

	finish = () => {

		this.calculateBetaVector();
		
	}

	render() {

		if (!this.state.displayRiskTable) {

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
							updatePhysique={this.updatePhysique}
							responses={this.state.responses}
							updateResponses={this.updateResponses}
							handleSubmit={this.changeSection}
							validity={this.state.validity}
							buttons={instructions['sections'][this.state.currentSection]['buttons']}
							complete={this.state.isComplete}
							page={this.state.sections.indexOf(this.state.currentSection) + 1}
							totalPages={this.state.sections.length}
						/>

		return (
			<div >
				<SubHeader />
				<div >{currentPage}</div>
				<Footer />
			</div>
		);
		
		} else {

		return (
			<div>
				<SubHeader />
				<div className="surveyContainer">
				<RiskTable 
					data={this.state.regressionOutput} 
					updateRadiation={this.updateRadiation} 
					showToggle={(this.state.responses['other']['other4'] === "Uncertain") ? true : false} 
					radiationToggle={this.state.radiationToggle}/>
				</div>
				<Footer />
			</div>
		);			

		}
	}
}

export default Survey;
