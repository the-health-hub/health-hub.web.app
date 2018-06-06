import React, {Component} from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
// import { objToApolloQuery, jsonToGraphQLQuery } from '@joeflack4/json-to-graphql-query';
import { healthDomainsState} from "./Gs3Domains";
import { jsonToGraphQLQuery } from '@joeflack4/json-to-graphql-query';

let data = {
  appState: {
    __directives: {
      client: true
    }
  }
};

// TODO: Remove __typename from query in library.
// TODO: Get working.
// TODO: Add query to state.
// TODO: Get working.
data = healthDomainsState;
const initial_state_query = jsonToGraphQLQuery(
  {query: healthDomainsState}, {ignoreFields: '__typename'}
  ).replace(/__typename /g, '');

const query = jsonToGraphQLQuery({query: data}, {ignoreFields: '__typename'}).replace(/__typename /g, '');;
const GET_STATE = gql`${query}`;
// const GET_STATE = gql`{ appState @client }`;
// const GET_STATE = gql`query { appState }`;

class GS5Base extends Component {
  
  render() {
    console.log(initial_state_query);
    
    return (
      <div>
        <h1>Testing Area</h1>
        <p>
          This.props.data: {JSON.stringify(this.props.data)}
          <br/>
          Query: {query}
        </p>
      </div>
    )
  }
}

// noinspection RequiredAttributes
const GS5 = ({ someEvent }) => (
  <Query query={GET_STATE} variables={{x: 'appState'}}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <GS5Base name="GS5Base" data={data}/>
        // <GS5Base name="GS5Base" data={data} onChange={console.log(data)}/>
        
        // <GS5Base name="GS5Base" data={data}/>
        // <GS5Base name="GS5Base" data={data} onChange={console.log('change was detected')}/>
        // Removing the onChange handler didn't seem to solve the problem.
        // <GS5Base name="GS5Base" data={data} onChange={someEvent}/>
        // Errors rather than printing.
        // <GS5Base name="GS5Base" data={data} onChange={data}/>
      );
    }}
  </Query>
);

export default GS5;
