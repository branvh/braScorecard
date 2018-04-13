import React, { Component} from "react";
import "./App.css";
import LandingPageDisclaimer from "./components/landingPageDisclaimer.js";
import Survey from "./components/survey.js";
import Loader from "./components/Loader.js";

/*
############# Open Items

-Address inches in the Height area
-Progress bar

*/


class App extends Component {
  state = {
    termsAccepted: false,
    loading: false
  };

  acceptTerms = () => {
    this.setState({termsAccepted: true});
      //setTimeout(() => this.setState({ loading: false }), 0)
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    } else {
      return (
        <div className="container-fluid appContainer">
          <div className="jumbotron braBanner">
            <div className="ulHeaderText">B</div>reast Reconstruction{" "}
            <div className="ulHeaderText">R</div>isk{" "}
            <div className="ulHeaderText">A</div>ssessment (BRA) Score -
            Extended Length
          </div>
          <div className="wrapper">
            {this.state.termsAccepted ? (
              <Survey />
            ) : (
              <LandingPageDisclaimer handleAccept={this.acceptTerms} />
            )}
          </div>
        </div>
      );
    }
  }
}

export default App;


//###########################################3
//to do list
/*
prevent NaN near line 36 of physiqueInput's element validation function (value could be NaN currently)
change prior section and next section to show up as arrows or some type of graphic??
select units in physique tab
*/