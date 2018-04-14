import React, { Component } from "react";
import ButtonContainer from './buttonContainer.js';

class PhysiqueInput extends Component {

	state = {

	}

	componentWillMount () {

		let defaultResponses = {...this.props.responses}

		let buttons = {...this.props.buttons}

		let validity = {};

		//default is that everything is valid, even if blank - can only navigate back if one has filled in page so impossible not to have valid for all upon page load
		for (const q in this.props.responses) {
			validity[q] = true;
		}

		//determine if complete
		let isComplete = true;
		for (const q in this.props.responses) {
		
			if (this.props.responses[q] === false) {
				isComplete = false;
				break;
			}

		}

		this.setState({values: defaultResponses, metric: this.props.metric, validity: validity, isComplete: isComplete, buttons: buttons});

	}

	handleChange = (e) => {
		
		let newValues = Object.assign({}, this.state.values);
		newValues[e.target.id] = e.target.value;

		let newValidity = Object.assign({}, this.state.validity);

		newValidity[e.target.id] = (e.target.value <= 0 || e.target.value > 700) ? false : true;

		//determine if complete
		let isComplete = true;
		for (const q in newValues) {
	
			if (newValues[q] === false || newValues[q] === '' || newValues[q] === undefined) {
				isComplete = false;
				break;
			}

		}
console.log(isComplete)
		this.setState({values: newValues, validity: newValidity, isComplete: isComplete})

	}

	handleUnitSelection = (e) => {

		this.setState({metric: !this.state.metric});

	}

	handleSubmit = (button) => {

		this.props.handleSubmit(button);
		this.props.updatePhysique(this.state.values, this.state.metric);

	}

	render() {

		//questions, section, responses, metric, 

		let questions = this.props.questions.map((q, ind) => {

			let id = this.props.section + ind;

			return (

				<div className="physiqueElementContainer" key={this.props.section + "Element" + ind}>
					<label className={this.props.section + "Label"}>
						{q["label"] + ":"}
					</label>
					<input
						className={(this.state.validity[id] === true) ? "physiqueInput noRedBorder" : "physiqueInput redBorder"}
						type="number"
						step="1"
						min="0"
						id={id}
						value={this.state.values[id]}
						onChange={this.handleChange}
					/>
				</div>


				)


		})



		return (

			<div>
			<div className="sectionHeader">
			{this.props.header}
			</div>
				{questions}
			<div className="physiqueElementContainer" key={"metricKey"}>
					<label htmlFor={"units"} id="unitsLabel">
						{"Units in Metric (cm/kg)?"}
					</label>
					<label className="switch" id="unitsCheckBox">
						<input
							type="checkbox"
							checked={this.state.metric}
							onChange={this.handleUnitSelection}
						/>
						<span className="slider" />
					</label>
					</div>
 
			<ButtonContainer 
			forward={!this.state.isComplete}
			backward={!this.props.buttons['backward']}
			finish={!this.props.buttons['finish']}
			handleSubmit={this.handleSubmit}
			page={this.props.page}
			totalPages={this.props.totalPages}
			/>
			</div>
				

			)

	}

}

export default PhysiqueInput;


/*

STOPPED - NEED TO REFACTOR ALL BUTTONS TO DISPLAY IN THE PAGE COMPONENTS
ADD PROP FUNCTION ON SUBMIT - IF THE PAGE COMPLETE - TO DISPLAY CERTAIN BUTTONS AND THEN MOVE FORWARD/BACKWARD

*/