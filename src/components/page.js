import React, { Component } from "react";
import PhysiqueInput from "./physiqueInput.js";
import CheckBoxSection from "./checkboxSection.js";
import DropDownSection from "./dropDownSection.js"
import ButtonContainer from './buttonContainer.js'
import uuidv4 from 'uuid/v4';

class Page extends Component {

	handleSubmit = (button) => {

		this.props.handleSubmit(button);		

	}

	render () {

		let numCol = this.props.columns;
		let colClass; //determines spacing on page

		switch (numCol) {
			case 1:
				colClass = "oneCol";
				break;
			case 2:
				colClass = "col-lg-6 col-md-6 col-sm-6";
				break;
			case 3:
				colClass = "col-lg-4 col-md-4 col-sm-4";
				break;
			default:
				colClass = "oneCol";
				break;
		}

		//header, columns, questions, metric, section, responses
		let sectionObject = [];

		if (this.props.section === "physique") {
			let output = 
						<div className={colClass} key={uuidv4()}>
							<PhysiqueInput
								questions={this.props.questions}
								section={this.props.section}
								responses={this.props.responses[this.props.section]}
								handleSubmit={this.props.handleSubmit}
								updatePhysique={this.props.updatePhysique}
								updateUnits={this.props.updateUnits}
								updateResponses={this.props.updateResponses}
								metric={this.props.metric}
								header={this.props.header[0]}
								buttons={this.props.buttons}
							/>
						</div>
					sectionObject.push(output)
		} else {

			//build a production loop
			for (let i = 1; i <= numCol; i++) {

				//assign an id variable to each question
				this.props.questions.forEach((cur, ind) => cur['id'] = this.props.section + ind);

				//filter for questions aligned to the current column being produced
				let questionsForCol = this.props.questions.filter((cur, ind) => cur['col'] === i);

				let subSection = questionsForCol.map( q => {

					let element;
					//return object type as indicated in the questions element property
					switch (q['elements'][0]['type']) {
						case 'dropDown' :
							element  = <DropDownSection 
										key={uuidv4()}
										sectionData={q}
										title={this.props.section}
										id={q['id']}
										value={this.props.responses[this.props.section][q['id']]}
										updateDDResponse={this.props.updateResponses}
										handleSubmit={this.props.handleSubmit}
										center={(numCol === 1) ? true : false}
										/>
										break;
						case 'checkbox':
							element = <CheckBoxSection
										key={uuidv4()}
										sectionData={q}
										title={this.props.section}
										id={q['id']}
										value={this.props.responses[this.props.section][q['id']]}
										updateCheckBox={this.props.updateResponses}
										handleSubmit={this.props.handleSubmit}
										center={(numCol === 1) ? true : false}
										/>
										break;
						default: 
							break;
					}

					return element

				})

				//
				let section =  (<div className={colClass} key={uuidv4()}>
				<div className="wrapper" id={this.props.section + "SectionContainer"}>
				<div className="sectionHeader">
					{this.props.header[i - 1]}
				</div>
				<ul className="list-unstyled" id={this.props.section + "UL"}>
					{subSection}
				</ul>
				</div>
				</div>)

				sectionObject.push(section);

			}

		}

		return (
			<div className="surveyContainer">
				{sectionObject}
			{(this.props.section === "physique") ? false : <ButtonContainer 
				forward={!this.props.buttons['forward']}
				backward={!this.props.buttons['backward']}
				finish={(this.props.buttons['finish'] && this.props.complete) ? false : true}
				handleSubmit={this.handleSubmit}
			/>
			}
			</div>
			)

	}

}

export default Page;