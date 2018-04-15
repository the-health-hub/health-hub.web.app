import React, {Component} from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from "immutability-helper/index";
import GettingStartedTemplate from './Base';
import OptionGrid from '../../../static/components/optionGrid';
import CardGrid from '../../../static/components/cardGrid';


// TODO: Move to template.
const updateAppState = gql`
  mutation ($key: String!, $val: Object) {
    updateAppState(key: $key, val: $val) @client
  }
`;

class SelectWidgetPageBase extends Component {
  state = this.props.state;
  
  // noinspection JSUnusedGlobalSymbols
  selectToggle = (selection) => {
    // noinspection JSCheckFunctionSignatures
    this.setState(update(this.state, {
      options: {[selection]: {selected: {$set: !this.state.options[selection].selected}}}
    }));
  };
  
  registerInput = (key) => {
  // registerInput = (key, val) => {
  //   console.log('register input test');
    if (Object.keys(this.state.options).includes(key))
      this.selectToggle(key);
  };
  
  continueEvaluate = (state) => {  // Static Function
    // console.log('testing-cont-eval');
    
    let selectedOptions = 0;
    for (let option in state.options) {
      // noinspection JSUnfilteredForInLoop
      if (state.options[option].selected)
        selectedOptions += 1;
    }
    const continueConditions = {
      selectedOptionMin: selectedOptions > 0
    };
    let continueOk = true;
    for (let condition in continueConditions) {
      continueOk *= continueConditions[condition]
    }
    return continueOk;
  };
  
  componentDidUpdate() {
    this.props.mutate({
      variables: { key: this.state.__typename, val: this.state}
    })
  }
  
  render() {
    const options = [];
    Object.entries(this.state.options).forEach(([key, val]) => {
      options.push(val);
    });
    
    // noinspection RequiredAttributes
    return (
      <GettingStartedTemplate i={this.props.i}
                              continueOk={this.continueEvaluate(this.state)}
                              constraintMessage={this.props.constraintMessage}>
                              {/*constraintMessage={this.props.constraintMessage} {...this.props}>*/}
        {this.props.children}
        {this.props.display === 'cards' ? <CardGrid options={options} registerInput={this.registerInput}/> : ''}
        {this.props.display === 'boxes' ? <OptionGrid options={options} registerInput={this.registerInput}/> : ''}
      </GettingStartedTemplate>
    );
  }
}

export default graphql(updateAppState)(SelectWidgetPageBase);
