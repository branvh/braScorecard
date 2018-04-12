import React , {Component} from 'react';

class ButtonContainer extends Component {

	handleClick = (e) => {

		e.preventDefault();

		this.props.handleSubmit(e.target.id);

	}

	render () {

		return (

				<div className="row forwardBackwardBtnContainer">
						<button
							className="btn btn-success"
							onClick={this.handleClick}
							id="priorButton"
							disabled={this.props.backward}
						>
							Go Backward
						</button>
						<button
							className="btn btn-success"
							onClick={this.handleClick}
							id="nextButton"
							disabled={this.props.forward}
						>
							Go Forward
						</button>
						<button
							className="btn"
							onClick={this.handleClick}
							id="runAnaylsisButton"
							disabled={this.props.finish}
							onClick={this.handleClick}
						>
							Finish
						</button>
				</div>

			)

	}

}

export default ButtonContainer;