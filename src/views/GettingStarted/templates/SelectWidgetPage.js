import React, {Component} from "react";
import update from "immutability-helper/index";
import GettingStartedTemplate from './Base';
import OptionGrid from '../../../static/components/optionGrid';
import CardGrid from '../../../static/components/cardGrid';


export default class SelectWidgetPage extends Component {
  state = this.props.state;
  
  // noinspection JSUnusedGlobalSymbols
  selectToggle = (selection) => {
    // noinspection JSCheckFunctionSignatures
    this.setState(update(this.state, {
      options: {[selection]: {selected: {$set: !this.state.options[selection].selected}}}
    }));
  };
  
  registerInput = (key, val) => {
    if (Object.keys(this.state.options).includes(key))
      this.selectToggle(key);
    console.log('Updating state: ' + key + val)  // TODO: temp
  };
  
  // Since state is a parameter, this can double as a composable function that can exist in the namespace outside the function.
  continueEvaluate = (state) => {
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
  
  render() {
    const options = [];
    Object.entries(this.state.options).forEach(([key, val]) => {
      options.push(val);
    });
    
    return (
      <GettingStartedTemplate i={this.props.i}
                              continueOk={this.continueEvaluate(this.state)}
                              constraintMessage={this.props.constraintMessage} {...this.props}>
        {this.props.children}
        {this.props.display === 'cards' ? <CardGrid options={options} registerInput={this.registerInput}/> : ''}
        {this.props.display === 'boxes' ? <OptionGrid options={options} registerInput={this.registerInput}/> : ''}
        {/*<OptionGrid options={options} registerInput={this.registerInput}/>*/}
      </GettingStartedTemplate>
    );
  }
}
