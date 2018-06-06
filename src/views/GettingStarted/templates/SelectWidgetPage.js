import React, {Component} from "react";
import { graphql } from 'react-apollo';
// import { graphql, compose, Query } from 'react-apollo';
import gql from 'graphql-tag';
import update from "immutability-helper/index";
import GettingStartedTemplate from './GsBase';
import BoxGrid from '../../../static/components/boxGrid';
import CardGrid from '../../../static/components/cardGrid';
// import { jsonToGraphQLQuery } from '@joeflack4/json-to-graphql-query';
// import { cacheAppStateKey } from '../../../storeLocal';


class SelectWidgetPageBase extends Component {
  rootKey = Object.keys(this.props.cachedState)[0];
  cachedState = Object.assign({}, this.props.cachedState[this.rootKey]); // Makes extensible
  state = this.cachedState;
  
  // noinspection JSUnusedGlobalSymbols
  selectToggle = (selection) => {
    // noinspection JSCheckFunctionSignatures
    this.setState(update(this.state, {
      options: {[selection]: {selected: {$set: !this.state.options[selection].selected}}}
    }));
  };
  
  selectToggleNested = (path) => {  // This would be better off as a recursive function.
    // console.log(path);
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
  
  recurseSelectedOptions = (obj, counter) => {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] === 'object') {
          counter = this.recurseSelectedOptions(obj[property], counter);
        } else {
          if (property === 'selected' && obj[property] === true)
            counter += 1;
        }
      }
    }
    return counter;
  };
  
  continueEvaluate = (state) => {  // Static Function
    // console.log('testing-cont-eval');
    let selectedOptions = this.recurseSelectedOptions(state, 0);
    
    const continueConditions = {
      selectedOptionMin: selectedOptions > 0
    };
    let continueOk = true;
    for (let condition in continueConditions) {
      continueOk *= continueConditions[condition]
    }
    return continueOk;
  };
  
  componentDidMount() {
    // Debugging
    // console.log(Object.isExtensible(this.cachedState));
    // console.log('state and desired state');
    // console.log(this.state);
    // console.log(this.cachedState);
    
    // const temp = 1;
  //   if (1 === temp) {
  //     // Mutate
  //     // this.props.mutate({
  //     //   variables: { key: this.state.__typename, val: this.state}
  //     // });
  //     // Query
  //     // TODO: put @client in the right place
  //     // TODO: find a place to query
  //     this.queryObj = {};
  //     this.queryObj[cacheAppStateKey] = {};
  //     this.queryObj[cacheAppStateKey][this.state.__typename] = this.state;
  //     this.queryObj.__directives = {client: true};
  //     this.queryObj = {query: this.queryObj};
  //     // noinspection JSCheckFunctionSignatures
  //     const query = jsonToGraphQLQuery(this.queryObj, {ignoreFields: ['__typename']});
  //     console.log(query);
  //     this.gqlQuery = gql`${query}`;
  //
  //     // const result = this.gqlQuery;
  //     // const result = graphql(this.gqlQuery);
  //     // const result = graphql(query);
  //     // const result = graphql(`query { appState @client }`);
  //     // const result = graphql(`query @client { appState }`);
  //     // const result = gql(`query { appState @client }`);
  //     // const result = gql(`query @client { appState }`);
  //     // const result = gql(`query { appState @client }`);
  //     // console.log(result);
  //   }
  }

  componentDidUpdate() {
    // console.log(this.props.cachedState);
    // console.log(this.props.state.options, this.state.options);
    // console.log(this.props.state.options === this.state.options);
    // if (false)

    if (true)
      this.props.mutate({
        variables: { key: this.state.__typename, val: this.state}
    });
  }
  
  render() {
    let options = [];
    Object.entries(this.state.options).forEach(([key, val]) => {
      options.push(val);
    });
    // console.log('hi');
    // console.log(this.gqlQuery);  // was "undefined"
    
    // const temp = gql`query @client { appState { SocialCircleState { options { myself { text id icon } lovedOne { text id icon } family { text id icon } } } } }`;
    // const temp = this.gqlQuery
    // const temp = gql`
    //   query getState {
    //     appState @client
    //   }
    // `;
    // const temp = gql`{ appState @client }`;
    
    // noinspection RequiredAttributes
    return (
      // <Query query={temp}>
        // {({ loading, error, data }) => {
          // if (loading) return "Loading...";
          // if (error) return `Error! ${error.message}`;
          // {this.cachedState = data;}
          // {console.log(this.cachedState)}
          // return (
            
            <GettingStartedTemplate i={this.props.i}
                                    continueOk={this.continueEvaluate(this.state)}
                                    constraintMessage={this.props.constraintMessage}>
                                    {/*constraintMessage={this.props.constraintMessage} {...this.props}>*/}
              {this.props.children}
              {this.props.display === 'cards' ? <CardGrid options={options} registerInput={this.registerInput}/> : ''}
              {this.props.display === 'boxes' ? <BoxGrid options={options} registerInput={this.registerInput}/> : ''}
            </GettingStartedTemplate>
            
          // );
        // }}
      // </Query>
    );
  }
}

// TODO: Move to template.
const updateAppState = gql`
  mutation ($key: String!, $val: Object) {
    updateAppState(key: $key, val: $val) @client
  }
`;

const SWPB2 = graphql(updateAppState)(SelectWidgetPageBase);

// const SWPB2 = compose(
//   // withApollo,  // doesn't allow you to get whole client at once anyway
//   graphql(updateAppState),
//   // graphql(`query { ... }`),
//   // graphql(`mutation { ... }`),
//   // connect(...),
// )(SelectWidgetPageBase);

// export default SelectWidgetPageBase;
export default SWPB2;


// TODO: try just putting all of the state data in the cache instead... no this.state...
// https://www.apollographql.com/docs/react/basics/setup
// https://reactjs.org/docs/higher-order-components.html
// https://github.com/apollographql/react-apollo/issues/442
// function loadingComponentFirst(SelectWidgetPageBase) {
//   class LoadingComponentFirst extends Component {
//   // return class LoadingComponentFirst extends Component {
//     state = {};
//
//     componentDidMount() {
//       this.props.mutate({
//         variables: { key: this.props.state.__typename, val: this.props.state}
//       });
//       // console.log(this.props.state);
//       setTimeout(() => {
//         // this.setState({
//         //   renderWrappedComponent: true,
//         // });
//         this.state = this.props.state;
//       }, 0);
//     }
//
//     render() {
//       // const { renderWrappedComponent } = this.state;
//       return this.state !== {} ? <SelectWidgetPageBase {...this.props} /> : <p>Loading...</p>;
//     }
//   }
//   return compose(graphql(updateAppState))(LoadingComponentFirst);
// }
//
// export default compose(graphql(updateAppState))(loadingComponentFirst(SWPB2));
