import React, { Component } from "react";

class CheckboxSection extends Component {

	handleChange = e => {
		this.props.updateCheckBox(e.target.id, e.target.checked)
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

export default CheckboxSection;


/*
stopping point: need to come up with logic to split the section into two columns based on bleeding/history
*/