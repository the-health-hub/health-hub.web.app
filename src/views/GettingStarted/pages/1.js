import React, {Component} from "react";
import GettingStartedTemplate from '../templates/Base';
import GsH1 from '../components/h1';
import GsP from '../components/p';

// # Design
// (1) No math, (2) likert scales, (3) categories, focuses, targetables.
export default class GS1 extends Component {  // Intro
  render() {
    return (
      <GettingStartedTemplate i={1} continueOk={true}>
        <GsH1>Welcome to Health Hub!</GsH1>
        <GsP>Health Hub is designed to help you manage your health data.</GsP>
      </GettingStartedTemplate>
    );
  }
}
