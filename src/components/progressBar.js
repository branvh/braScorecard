import React, {Component} from 'react';

class ProgressBar extends Component  {

	render () {

		return (

			<div id="progressContainer">
				<div id="progressText">
					Page {this.props.page} of {this.props.totalPages}
				</div>
			</div>

			)

	}

}

export default ProgressBar;