import React, { Component, Render } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPageDisclaimer from "./landingPageDisclaimer.js";
import Survey from "./survey.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";

/*ajv^6.0.0*/

class App extends Component {
  state = {
    termsAccepted: false
  };

  acceptTerms = () => {
    this.setState({termsAccepted: true})
  }

  render() {
    return (
      <div className="container-fluid appContainer">
        <div className="jumbotron braBanner">
          <div className="ulHeaderText">B</div>reast Reconstruction{" "}
          <div className="ulHeaderText">R</div>isk{" "}
          <div className="ulHeaderText">A</div>ssessment (BRA) Score - Extended
          Length
        </div>
        <div className="wrapper">
          {this.state.termsAccepted ? <Survey /> : <LandingPageDisclaimer handleAccept={this.acceptTerms}/>}
        </div>
      </div>
    );
  }
}

export default App;