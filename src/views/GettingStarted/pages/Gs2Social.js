import React, {Component} from "react";
import SelectWidgetPage from '../templates/SelectWidgetPage';
import GsH1 from '../components/h1';
import GsP from '../components/p';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { jsonToGraphQLQuery } from '@joeflack4/json-to-graphql-query';
import {BrOver400px} from '../../../static/components/text';


const INITIAL_STATE = {
    __typename: 'SocialCircleState',
    options: {
      __typename: 'SocialCircleOptions',
      myself: {
        __typename: 'SocialCircleOption',
        text: 'Myself',
        id: 'myself',
        icon: 'fa fa-user',
        selected: false
      },
      lovedOne: {
        __typename: 'SocialCircleOption',
        text: 'A loved one',
        id: 'lovedOne',
        icon: 'fa fa-user-o',
        selected: false
      },
      family: {
        __typename: 'SocialCircleOption',
        text: 'My family',
        id: 'family',
        icon: 'fa fa-users',
        selected: false
      },
    }
  };

export const socialCircleState = {socialCircleState: INITIAL_STATE};
// noinspection JSCheckFunctionSignatures
const initial_state_query = jsonToGraphQLQuery(
  {query: socialCircleState}, {ignoreFields: '__typename'}
  ).replace(/__typename /g, '');
const GET_STATE = gql`${initial_state_query}`;

// # Design
// (1) No math, (2) likert scales, (3) categories, focuses, targetables.
// TODO: Make a base class for these getting started templates. To much logic to re-use.
class GS2Base extends Component {  // Who
  header = 'Your Circle';
  i = 2;
  constraintMessage = 'Please select one or more options.';
  state = INITIAL_STATE;
  
  // - This can filter out stuff that doesn't really need to be in state. But
  //   this would need to be done recursively.
  // state = Object.keys(this.data)
  // .filter(key => ['__typename', 'selected'].includes(key))
  // .reduce((obj, key) => {
  //   obj[key] = this.raw[key];
  //   return obj;
  // }, {});
  
  content = function () {
    return <GsP>Who would you like to set up?<BrOver400px/>
      If you'd rather do a speedier setup, these options can easily be revisted later.</GsP>
  }();
  
  render() {
    return (
      <SelectWidgetPage
        i={this.i}
        state={this.state}
        cachedState={this.props.cachedState}
        constraintMessage={this.constraintMessage}
        display='boxes'
      >
        <GsH1>{this.header}</GsH1>
        {this.content}
      </SelectWidgetPage>
    )
  }
}

// noinspection RequiredAttributes,JSUnusedLocalSymbols
const GS2 = ({ someEvent }) => (
  <Query query={GET_STATE}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (<GS2Base name="GS2Base" cachedState={data}/>);
    }}
  </Query>
);

export default GS2;
