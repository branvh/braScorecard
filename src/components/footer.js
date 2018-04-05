import React, {Component}  from "react";

class Footer extends Component {

	handleClick = (e) => {

		e.preventDefault();

		if (e.target.id === 'priorButton') {
			this.props.goBackward();
		} else if (e.target.id === 'nextButton') {
			this.props.goForward();
		} else if (e.target.id === 'runAnaylsisButton') {
			this.props.finish();
		}

	}

	render (){
		return (
	<div id="footerContainer" >
		<div className="row">
			<div className="forwardBackwardBtnContainer">
						{(this.props.showBackward) ? <button
							className="btn btn-success"
							onClick={this.handleClick}
							id="priorButton"
						>
							Go Backward
						</button> : false}
						{(this.props.showForward) ? <button
							className="btn btn-success"
							onClick={this.handleClick}
							id="nextButton"
						>
							Go Forward
						</button> : false}
						{(this.props.showFinish) ? <button
							className="btn btn-success"
							onClick={this.handleClick}
							id="runAnaylsisButton"
						>
							Finish
						</button> : false}
				</div>
			</div>
	<div id="footer">
		<p>
			Models have been abstracted from data furnished by the Participant
			Use Files of the Mastectomy Reconstruction Outcomes Consortium
			(MROC), Tracking Operations and Outcomes for Plastic Surgeons
			(TOPS), and National Surgical Quality Improvement Program (NSQIP)
			databases.
			<br />
			The MROC database is generated from a multi-institutional study
			centered at University of Michigan whose purpose was to assess
			outcomes following breast reconstruction after mastectomy.{" "}
			<a
				className="help_link"
				title="Click for more info"
				href="https://clinicaltrials.gov/ct2/show/NCT01723423"
			>
				More information.
			</a>
			<br />
			The TOPS database is generated from a multi-institutional
			collaboration of plastic surgeons who voluntarily enter cases into a
			central database. It is maintained by the American Society of
			Plastic Surgeons.{" "}
			<a
				className="help_link"
				title="Click for more info"
				href="http://www.plasticsurgery.org/for-medical-professionals/quality-and-health-policy/tops.html"
			>
				More information.
			</a>
			<br />
			The NSQIP database is generated from a multi-institutional
			collaboration of hospitals that contribute data from surgical cases
			into a central database. It is maintained by the American College of
			Surgeons.{" "}
			<a
				className="help_link"
				title="Click for more info"
				href="https://www.facs.org/quality-programs/acs-nsqip/about"
			>
				More information.
			</a>
			The authors of this project thank Michael Vu, Fernando Echeverria, and Heather Mlodinow for their contributions to the online incarnation of this work.
			</p>
			<br />
	</div>
	</div>
	)}
}

export default Footer;
