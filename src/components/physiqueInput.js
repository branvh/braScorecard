import React, { Component } from "react";

class PhysiqueInput extends Component {
	state = {
		isComplete: false,
		validity: {
			Height: true,
			Weight: true,
			Age: true
		}
	};

	componentWillMount () {

		this.setState({values: this.props.defaults})
	}

	handleChange = e => {
		e.preventDefault();

		//capture updated value, update call validity function which then updates state with values
		this.validateSubmission(e.target.id, parseFloat(e.target.value));
	};

	validateSubmission = (element, val) => {
		let validity = false;

		if (element === "Height") {
			if (val > 0 && val < 100) validity = true;
		} else if (element === "Weight") {
			if (val > 0 && val < 750) validity = true;
		} else if (element === "Age") {
			if (val > 0 && val < 150) validity = true;
		}

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
					Please tell us about yourself{" "}
				</div>
				{phyiqueInputs}
				<div className="nextButtonContainer">
					{this.state.isComplete ? (
						<button
							className="btn btn-success"
							onClick={this.handleSubmit}
							id="nextButton"
						>
							Next Section
						</button>
					) : (
						false
					)}
				</div>
			</div>
		);
	}
}

export default PhysiqueInput;
