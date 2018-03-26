import React, { Component } from "react";

class BleedingSection extends Component {
	state = {};

	componentWillMount() {
		this.setState({ values: this.props.defaults });
		console.log(this.props.defaults);
	}

	handleChange = e => {
		console.log(e.target.checked);
		console.log(e.target.id);
		let newValues = Object.assign({}, this.state.values);
		newValues[e.target.id] = e.target.checked;
		this.setState({ values: newValues });
	};

	render() {
		let questions = this.props.sectionData.map((cur, ind) => {
			//a unique id name to link to values stored in state
			let element = this.props.section + ind;
			return (
				<li
					className="bleedingElementContainer"
					key={"bleedingElement" + ind}
				>
					<div className="bleedingLabel">{cur["label"] + ":"}</div>
					<label className="switch">
						<input
							type="checkbox"
							id={element}
							checked={this.state.values[element]}
							onChange={this.handleChange}
						/>
						<span className="slider" />
					</label>
				</li>
			);
		});

		return (
			<div className="wrapper" id="bleedingSectionContainer">
				<div className="sectionHeader">
					Bleeding Risks (Check = Yes)
				</div>
				<ul className="list-unstyled" id="bleedingUL">
					{questions}
				</ul>
				<button
					className="btn btn-success"
					onClick={this.handleSubmit}
					id="nextButton"
				>
					Next Section
				</button>
			</div>
		);
	}
}

export default BleedingSection;
