import React, { Component } from "react";

class DropDownSection extends Component {

	handleSelect = e => {
		//console.log(e.target.value);
		//console.log(e.target.id);
		this.props.updateDDResponse(e.target.id, e.target.value, this.props.title)
	};

	render() {

		let questions = this.props.sectionData.map((cur, ind) => {
			//a unique id name to link to values stored in state
			let element = this.props.title + ind;

			let options = []

			options.push(<option defaultValue="selected" key={element + "Default"}> --select-- </option>)

			cur["elements"][0]["choices"].map( (element, optionInd) => {
				options.push(<option className="diagnosticOption" value={element} key={element}>{element}</option>)
			})

			//sort the options so that the current selection is on top


			return (
				<li
					className="checkboxElementContainer"
					key={this.props.title + "Element" + ind}
				>
					<div className="checkboxLabel">{cur["label"] + ":"}</div>
					<select
						className={"diagnosticDDSelect"}
						id={element}
						ref={element+"DD"}
						value={this.props.values[ind]}
						onChange={this.handleSelect}
					>
						{options}
					</select>
				</li>
			);
		});

		return (
			<div
				className="wrapper"
				id={this.props.section + "SectionContainer"}
			>
				<div className="sectionHeader">{this.props.sectionTitle}</div>
				<ul className="list-unstyled" id={this.props.title + "UL"}>
					{questions}
				</ul>
			</div>
		);
	}
}

export default DropDownSection;

//<option defaultValue={(this.props.values[ind] === false) ? "selected" : false}> --select-- </option>