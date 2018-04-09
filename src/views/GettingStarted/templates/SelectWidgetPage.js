import React, {Component} from "react";
// import { graphql } from 'react-apollo';
import { Mutation } from 'react-apollo';
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

export default class SelectWidgetPageBase extends Component {
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
  
  // Since state is a parameter, this can double as a composable function that can exist in the namespace outside the function.
  // continueEvaluate = (state) => {
  continueEvaluate = (state ) => {
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
    // this.storeState(state);
    return continueOk;
  };
  // storeState(state) {
  // // storeState() {
  //   this.props.mutate({
  //     variables: { componentState: state}
  //     // variables: { componentState: 'hello world!'}
  //   })
  //     .then(({ data }) => {
  //       // console.log('Got data: ', data);
  //       // console.log('Component state at time: ', state);
  //     }).catch((error) => {
  //       console.log('There was an error sending the query for Select Page Widget.', error);
  //     });
  // }

  componentWillUpdate() {
    console.log('component will update');
    console.log(this.state);
  }
  
  componentDidUpdate() {
    console.log('component did update');
    console.log(this.state);
  }
  
  render() {
    const options = [];
    Object.entries(this.state.options).forEach(([key, val]) => {
      options.push(val);
    });
    
    // (cacheState = () => {
    //   console.log('hello');
    //   updateAppState({
    //     variables: {
    //       key: this.state.__typename,
    //       val: {
    //         __typename: 'Object',
    //         state: this.state
    //       }
    //     }
    //   });
    // }) => (
    
    //  {(updateAppState, { data }) => (
    // The { data } here is the returned data from the mutation function.
    // noinspection RequiredAttributes
    return (
      <Mutation mutation={updateAppState}>
        {(updateAppState) => (
          <GettingStartedTemplate i={this.props.i}
                                  continueOk={this.continueEvaluate(this.state)}
                                  constraintMessage={this.props.constraintMessage}>
                                  {/*constraintMessage={this.props.constraintMessage} {...this.props}>*/}
            {this.props.children}
            {this.props.display === 'cards' ? <CardGrid options={options} registerInput={this.registerInput} cacheState={() => {updateAppState({ variables: {
                  key: this.state.__typename,
                  val: {
                  __typename: 'Object',
                  state: this.state
                }}})}}/> : ''}
            {this.props.display === 'boxes' ? <OptionGrid options={options} registerInput={this.registerInput} cacheState={() => {updateAppState({ variables: {
                  key: this.state.__typename,
                  val: {
                  __typename: 'Object',
                  state: this.state
                }}})}}/> : ''}
            {/*<OptionGrid options={options} registerInput={this.registerInput}/>*/}
            <button onClick={e => {
                e.preventDefault();
                updateAppState({ variables: {
                  key: this.state.__typename,
                  val: {
                  __typename: 'Object',
                  state: this.state
                }}});
              }
            }>
              hello
            </button>
          </GettingStartedTemplate>
        )}
      </Mutation>
    );
  }
}

// export default graphql(updateAppState)(SelectWidgetPageBase);
