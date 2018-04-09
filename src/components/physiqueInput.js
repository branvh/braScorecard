import React, { Component } from "react";

class PhysiqueInput extends Component {

	state = {

	}

	handleChange = (e) => {

		//validate - triggering red borders as applicable
		//this.validate(e.target.id, e.target.value);

		//then push the responses up to state
		this.props.updateResponses(e.target.id, e.target.value)
	}

	handleUnitSelection = (e) => {

		this.props.updateUnits();

	}

	render() {

		//questions, section, responses, metric, 
		//display the questions
		let questionArray = this.props.questions.map((q, ind) => {

			let questionID = q['section'] + ind;

			if (q['elements'][0]["type"] === "input") {

				return (

				<div className="physiqueElementContainer" key={this.props.section + "Element" + ind}>
					<label htmlFor={questionID} className={this.props.section + "Label"}>
						{q["label"] + ":"}
					</label>
					<input
						className="physiqueInput noRedBorder"
						type="number"
						step="1"
						min="0"
						id={questionID}
						value={this.props.responses[questionID]}
						onChange={this.handleChange}
					/>
				</div>

					)

			} else return false


		})

		//stopped - push the metric switch
		let metricSection = ((checked, changeFN) => {

			return(	<div className="physiqueElementContainer" key={"metricKey"}>
					<label htmlFor={"units"} id="unitsLabel">
						{"Metric (Meter / KG)?"}
					</label>
					<label className="switch" id="unitsCheckBox">
						<input
							type="checkbox"
							checked={checked}
							onChange={changeFN}
						/>
						<span className="slider" />
					</label>
					</div>
				)

			})(this.props.metric,this.handleUnitSelection)

		questionArray.push(metricSection)

		return (

			questionArray

			)

	}

}

export default PhysiqueInput;

