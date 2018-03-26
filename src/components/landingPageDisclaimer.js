import React, { Component } from "react";

class LandingPageDisclaimer extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAccept();
	}

	render() {
		return (
			<div id="disclaimerText">
				<p>
					The BRA Score, an evidence-based risk calculator, is for
					information only. The tool is not to be used in place of
					diagnosis, treatment, or medical advice of any kind.
				</p>
				<p>
					Patients using the BRA Score should not rely on the
					information provided for their own healthcare decisions. Nor
					should physicians using the BRA Score rely on the
					information provided to plan treatment.
				</p>
				<p>
					Northwestern Feinberg School of Medicine makes no
					warranties, nor express or implied representations
					whatsoever, regarding the accuracy, completeness,
					timeliness, comparative or controversial nature, or
					usefulness of any information contained or referenced in the
					prediction tools. Northwestern Feinberg School of Medicine
					does not assume any risk whatsoever for your use of the BRA
					Score or the information contained herein. Evidence-based
					medicine is in a state of constant flux, and the tool may
					thus not fully represent the current state of information.
				</p>
				<p>
					Use of the BRA Score does not constitute an express or
					implied physician-patient relationship. Northwestern
					Feinberg School of Medicine does not endorse or claim
					validity for the BRA Score found on this Web site. The
					activities and products of Northwestern Feinberg School of
					Medicine are not endorsed by our past, present, or future
					employers. Northwestern Feinberg School of Medicine keeps no
					record of users of the BRA Score, nor does it contact users
					for any reason.
				</p>
				<p>
					You are hereby advised to consult with a physician or other
					professional healthcare provider prior to making any
					decisions, or undertaking any actions or not undertaking any
					actions related to any healthcare problem or issue you might
					have at any time, now or in the future. In using the BRA
					Score, you are in agreement that neither Northwestern
					Feinberg School of Medicine, nor any other party, is or will
					be liable or otherwise responsible for any decision made or
					any action taken or any action not taken due to your use of
					any information presented.
				</p>
				<button className="btn btn-secondary my-2 my-sm-0 text-center" id="acceptTermsButton" onClick={this.handleSubmit}>Accept Terms</button>
			</div>
		);
	}
}

export default LandingPageDisclaimer;
