import React, { Component } from "react";

class PhysiqueInput extends Component {
	state = {
	}

	componentWillMount() {

		let validityObj = {};

		//this will work as the app will only let one move forward if all responses are valid and thus can only move backward to a set of previously all valid responses that would mount
		for (const response in this.props.responses) {

			validityObj[response] = true;

		}

		this.setState({validity: validityObj});

	}

	handleChange = (e) => {

		console.log(e.target.id)
		console.log(e.target.value)

		//validate - triggering red borders as applicable
		this.validate(e.target.id, e.target.value);

		//then push the responses up to state
		this.props.updateResponses(e.target.id, e.target.value)
	}

	validate = (id, val) => {

		if (val <= 0 || val > 1000 || val === false || val === '' || val === undefined) {

			let newValidity = Object.assign({}, this.state.validity);

			newValidity[id] = false;

			this.setState({validity: newValidity});

		}

	}

	render() {

		//questions, section, responses, metric, 
		//display the questions
		let questionArray = this.props.questions.map((q, ind) => {

			let questionID = q['section'] + ind;
			let displayObject;

			if (q['elements'][0]["type"] === "input") {

				return (

				<div className="physiqueElementContainer" key={this.props.section + "Element" + ind}>
					<label htmlFor={questionID} className={this.props.section + "Label"}>
						{q["label"] + ":"}
					</label>
					<input
						className={
							this.state.validity[questionID]
								? "physiqueInput noRedBorder"
								: "physiqueInput redBorder"
						}
						type="number"
						step="1"
						min="0"
						id={questionID}
						value={this.props.responses[questionID]}
						onChange={this.handleChange}
					/>
				</div>

					)

			}


		})

		//stopped - push the metric switch


		return (

			questionArray

			)

	}

}

export default PhysiqueInput;



/*class PhysiqueInput extends Component {
	state = {
		validity: {
			Height: true,
			Weight: true,
			Age: true
		}
	};

	componentWillMount () {

		//we must look at the incoming props and determine if we are dealing with a previously completed form
		//we do this by detremining if each elment is populated (the isComplete multiplication portion below)
		let newValidity = Object.assign({}, this.state.validity);
		let isComplete = true;

		//this for-in loop runs a validation (resulting potentially in red boxes) on the default props prior to 1st mount on page only
		for (const element in this.props.defaults) {
			let validity = this.elementValidation(element, this.props.defaults[element]);
			newValidity[element] = validity;
			isComplete *= this.props.defaults[element]  //since true = 1, all = true results in <> 0 which we test below
		};

		(isComplete === 0) ? isComplete = false : isComplete = true;

		this.setState({values: this.props.defaults,
			validity: newValidity,
			isComplete: isComplete}, () => console.log(this.state))

	}

	elementValidation = (element, val, initialLoad=true) => {

		//prevent NaN

		var validity = false;
		//the initial load + val = false test prevents all boxes from appearing red on the 1st load only
		if (element === "Height") {
			if ((val > 0 && val < 100) || (initialLoad === true && val === false)) validity = true;
		} else if (element === "Weight") {
			if ((val > 0 && val < 750) || (initialLoad === true && val === false)) validity = true;
		} else if (element === "Age") {
			if ((val > 0 && val < 150) || (initialLoad === true && val === false)) validity = true;
		}

		return validity

	}

	handleChange = e => {
		e.preventDefault();

		//capture updated value, update call validity function which then updates state with values
		this.validateSubmission(e.target.id, parseFloat(e.target.value));
	};

	validateSubmission = (element, val) => {

		//false as last argument is to signal that this isn't an initial page load
		let validity = this.elementValidation(element, val, false);

		let newValues = Object.assign({}, this.state.values);
		newValues[element] = val;

		let newValidity = Object.assign({}, this.state.validity);
		newValidity[element] = validity;

		//determine if this form is complete - it only gets set to true if all items are true in the next two for-in loops
		let newCompletion = true;

		for (const field in newValues) {
			if(newValues[field] === '' || newValues[field] === false) {
				newCompletion = false;
			}
		}

		for (const field in newValidity) {
			if(newValidity[field] === false) newCompletion = false;
		}

		this.setState({ validity: newValidity, values: newValues, isComplete: newCompletion });
	};

	handleUnitSelection = (e) => {

		this.props.updateUnits(e.target.checked)

	}

	handleSubmit = (e) => {
		e.preventDefault();

		//send values up the hierarchy - the submit button only visible if the form is complete and valid
		this.props.handleSubmit("physique", this.state.values);
	};

	render() {
		let phyiqueInputs = this.props.sectionData.map((cur, ind) => {
			return (
				<div className="physiqueElementContainer" key={"physiqueElement" + ind}>
					<label htmlFor={"phyique" + ind} className="physiqueLabel">
						{cur["label"] + ":"}
					</label>
					<input
						className={
							this.state.validity[cur["label"]]
								? "physiqueInput noRedBorder"
								: "physiqueInput redBorder"
						}
						type="number"
						step="1"
						min="0"
						id={cur["label"]}
						value={this.state.values[cur["label"]]}
						onChange={this.handleChange}
					/>
				</div>
			);
		});

		return (
			<div className="wrapper" id="physiqueSectionContainer">
				<div className="sectionHeader">
					Please tell us about yourself
				</div>
				{phyiqueInputs}
				<div className="physiqueElementContainer" key={"unitsKey"}>
					<label htmlFor={"units"} id="unitsLabel">
						{"Metric (Meter / KG)?"}
					</label>
					<label className="switch" id="unitsCheckBox">
						<input
							type="checkbox"
							checked={this.props.metric}
							onChange={this.handleUnitSelection}
						/>
						<span className="slider" />
					</label>
				</div>
				<div className="nextButtonContainer">
					{this.state.isComplete ? (
						<button
							className="btn btn-success"
							onClick={this.handleSubmit}
							id="nextButton"
						>
							Forward
						</button>
					) : (
						false
					)}
				</div>
			</div>
		);
	}
}*/
