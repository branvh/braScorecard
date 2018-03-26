import React, { Component } from "react";

class CheckboxSection extends Component {
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
			let element = this.props.title + ind;
			return (
				<li
					className={this.props.title + "ElementContainer"}
					key={this.props.title + "Element" + ind}
				>
					<div className={this.props.title + "Label"}>{cur["label"] + ":"}</div>
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
			<div className="wrapper" id={this.props.section + "SectionContainer"}>
				<div className="sectionHeader">
					{this.props.sectionTitle}
				</div>
				<ul className="list-unstyled" id={this.props.title + "UL"}>
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

export default CheckboxSection;


/*
stopping point: need to come up with logic to split the section into two columns based on bleeding/history
*/