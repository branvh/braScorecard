import React, {Component} from "react";

class SubHeader extends Component {

	render () {

	return (
	<div id="subHeader">
		<p id="subHeaderText">
			{(!this.props.finished) ? 
	'To calculate the estimated risk for postoperative complications in a patient who is undergoing mastectomy with immediate tissue expander or autologous reconstruction, enter the following data.'
	: 'Please find BRA Score risk estimates for various complications following different modalities of breast reconstruction for the patient characteristics that were provided:'}

		</p>
	</div>
	);
}
}

export default SubHeader;
