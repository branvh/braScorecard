import React, { Component } from "react";

class CheckboxSection extends Component {

	handleChange = e => {
		this.props.updateCheckBox(this.props.title, e.target.id, e.target.checked)
	};

	render() {

		let questions = this.props.sectionData.map((cur, ind) => {
			//a unique id name to link to values stored in state
			let element = this.props.title + ind;
			return (
				<li
					className="checkboxElementContainer"
					key={this.props.title + "Element" + ind}
				>
					<div className="checkboxLabel">{cur["label"] + ":"}</div>
					<label className="switch">
						<input
							type="checkbox"
							id={element}
							checked={this.props.values[element]}
							onChange={this.handleChange}
						/>
						<span className="slider" />
					</label>
				</li>
			);
		});

		return (
			<div className="wrapper" id={this.props.section + "SectionContainer"}>
				<div className="sectionHeader">
					{this.props.sectionTitle}
				</div>
				<ul className="list-unstyled" id={this.props.title + "UL"}>
					{questions}
				</ul>
			</div>
		);
	}
}

export default CheckboxSection;


/*
stopping point: need to come up with logic to split the section into two columns based on bleeding/history
*/