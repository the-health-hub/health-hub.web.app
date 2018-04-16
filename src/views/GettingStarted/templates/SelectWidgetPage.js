import React, {Component} from "react";
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import update from "immutability-helper/index";
import GettingStartedTemplate from './GsBase';
import BoxGrid from '../../../static/components/boxGrid';
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
  
  selectToggleNested = (path) => {  // This would be better off as a recursive function.
    let nestedVal = {
        options: {
          [path[0]]: {
            [path[1]]: {
              [path[2]]: {
                [path[3]]: {
                  [path[4]]: {
                    selected: {$set: !this.state.options[path[0]][path[1]][path[2]][path[3]][path[4]].selected}
                  }
                }
              }
            }
          }
        }
      };
    this.setState(update(this.state, nestedVal));
  };
  
  registerInput = (keyPath) => {
    if (Object.keys(this.state.options).includes(keyPath)) {
      this.selectToggle(keyPath);
    } else if (keyPath.includes('.')) {
      const path = keyPath.split('.');
      this.selectToggleNested(path);
      
    }
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
    let options = [];
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
        {this.props.display === 'boxes' ? <BoxGrid options={options} registerInput={this.registerInput}/> : ''}
      </GettingStartedTemplate>
    );
  }
}

export default graphql(updateAppState)(SelectWidgetPageBase);
