import React, { Component } from "react";
import uuidv4 from 'uuid/v4';

class DropDownSection extends Component {
	handleSelect = e => {
		this.props.updateDDResponse(
			e.target.id,
			e.target.value
		);
	};

	render() {

			let options = [];

			if (
				this.props.value === false ||
				this.props.value === undefined
			) {
				options.push(
					<option defaultValue="selected" key={uuidv4()}>
						{" "}
						--select--{" "}
					</option>
				);
			}

			this.props.sectionData["elements"][0]["choices"].forEach((element, optionInd) => {
				options.push(
					<option
						className="diagnosticOption"
						value={element}
						key={element}
					>
						{element}
					</option>
				);
			});

			let question = (
				<li
					className={(this.props.center) ? "centeredInputColumn" : "checkboxElementContainer"}
					key={this.props.id}
				>
					<div className="checkboxLabel">{this.props.sectionData['label']}</div>
					<select
						className={"diagnosticDDSelect"}
						id={this.props.id}
						value={this.props.value}
						onChange={this.handleSelect}
					>
						{options}
					</select>
				</li>
			);

		return (
			<div style={{display: 'inline'}}>
			{question}
			</div>
		);
	}
}

export default DropDownSection;

//<option defaultValue={(this.props.values[ind] === false) ? "selected" : false}> --select-- </option>

/*class CheckboxSection extends Component {

	handleChange = e => {
		//this.props.updateCheckBox(this.props.title, e.target.id, e.target.checked)
	};

	render() {
			let question = <li
					className="checkboxElementContainer"
					key={this.props.id}
				>
					<div className="checkboxLabel">{this.props.sectionData['label']}</div>
					<label className="switch">
						<input
							type="checkbox"
							id={this.props.id}
							checked={this.props.value}
							onChange={this.handleChange}
						/>
						<span className="slider" />
					</label>
				</li>

		return (
			<div style={{display: 'inline'}}>
			{question}
			</div>
		);
	}
}

export default CheckboxSection;*/


