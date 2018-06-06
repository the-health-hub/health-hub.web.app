import React, {Component} from "react";
import SelectWidgetPage from '../templates/SelectWidgetPage';
// import {BrOver400px} from '../../../static/components/text';
import GsH1 from '../components/h1';
import GsP from '../components/p';
// import {graphql} from "react-apollo/index";
import { Query } from "react-apollo";
import gql from "graphql-tag";
// import GsCard from '../components/card';
import { jsonToGraphQLQuery } from '@joeflack4/json-to-graphql-query';


const durationHealthFocuses = {
  __typename: 'duration-health-focuses',
  eyeHealth: {
    __typename: 'eye-health',
    title: 'Eye Health',
    id: 'eye-health',
    options: {
      __typename: 'eye-health-options',
      glaucoma: {
        __typename: 'glaucoma',
        text: 'Glaucoma',
        id: 'glaucoma',
        icon: 'fa fa-eye',
        category: 'Eye Health',
        selected: false
      },
      iritis: {
        __typename: 'iritis',
        text: 'Iritis',
        id: 'iritis',
        icon: 'fa fa-eye',
        category: 'Eye Health',
        selected: false
      },
    }
  },
  mentalHealth: {
    __typename: 'mental-health',
    title: 'Mental Health',
    id: 'mental-health',
    options: {
      __typename: 'mental-health-options',
      depression: {
        __typename: 'depression',
        text: 'Depression',
        id: 'depression',
        icon: 'fa fa-question-circle',
        category: 'Mental Health',
        selected: false
      },
      bipolarDisorder: {
        __typename: 'bipolar-disorder',
        text: 'Bipolar Disorder',
        id: 'bipolar-disorder',
        icon: 'fa fa-question-circle',
        category: 'Mental Health',
        selected: false
      },
      anxiety: {
        __typename: 'anxiety',
        text: 'Anxiety',
        id: 'anxiety',
        icon: 'fa fa-question-circle',
        category: 'Mental Health',
        selected: false
      },
    }
  }
};
  
const everydayHealthFocuses = {
  __typename: 'everyday-health-focuses',
  diet: {
    __typename: 'diet',
    title: 'Diet',
    id: 'diet',
    options: {
      __typename: 'diet-options',
      calorieCount: {
        __typename: 'calorie-count',
        text: 'Calorie Count',
        id: 'calorie-count',
        icon: 'fa fa-question-circle',
        category: 'Diet',
        selected: false
      },
      weight: {
        __typename: 'weight',
        text: 'Weight',
        id: 'weight',
        icon: 'fa fa-question-circle',
        category: 'Diet',
        selected: false
      },
      mood: {
        __typename: 'mood',
        text: 'Mood',
        id: 'mood',
        icon: 'fa fa-question-circle',
        category: 'Diet',
        selected: false
      },
    }
  },
};

const INITIAL_STATE = {
  __typename: 'HealthDomainsState',
  options: {
    __typename: 'HealthDomainsOptions',
    'durationHealth': {
      __typename: 'HealthDomainsOption',
      text: 'Chronic and Long/Short Duration Health',
      id: 'durationHealth',
      img: require('../../../static/media/img/cards/chronic/blood-pressure-guage_5x1.jpg'),
      imgAlt: 'Close-up of a blood pressure monitor.',
      selected: false,
      content: 'It may be that you are strugging with an illness that may never go away, but it helps greatly to track your symptoms.',
      options: durationHealthFocuses,
      contentNested: `
        Physical Health grouping
        Mental Health grouping
        Symptomology`
    },
    // 'long-short-term': {
    //   __typename: 'HealthDomainsOption',
    //   text: 'Long & Short-term Health',
    //   id: 'long-short-term',
    //   img: require('../../../static/media/img/cards/long-short-term/injury-cast-leg_5x1.png'),
    //   imgAlt: 'Leg being wrapped in cast.',
    //   selected: false,
    //   content: 'Perhaps you have a long-term condition, such as an injury, with goals that you\'d like to target for recovery. Or maybe you or a loved one has short-term condition, such as a flu.',
    //   contentNested: `
    //     Long term - long term (injury ex) / recurrent / chronic or unknown health cond mental / emotianal.
    //   `
    // },
    'everydayHealth': {
      __typename: 'HealthDomainsOption',
      text: 'Everyday Health',
      id: 'everydayHealth',
      img: require('../../../static/media/img/cards/daily/fitness-shoe_5x1.jpg'),
      imgAlt: 'Getting ready to jog.',
      selected: false,
      content: 'Most of us could even use some improvement in our everyday health, such as sleep, diet, mood, or physical fitness.',
      options: everydayHealthFocuses,
      contentNested: `
        Physical Fitness & Exercise
        Vitals: Blood pressure
        Diet
        Sleep
        Mood
        Metrics: Height/weight
        Habits: Alcohol / cigs / drugs
      `
    },
  }
};

export const healthDomainsState = {healthDomainsState: INITIAL_STATE};
// noinspection JSCheckFunctionSignatures
const initial_state_query = jsonToGraphQLQuery(
  {query: healthDomainsState}, {ignoreFields: '__typename'}
  ).replace(/__typename /g, '');
// const GET_STATE = gql`query getState { appState @client }`;
const GET_STATE = gql`${initial_state_query}`;

// # Design
// (1) No math, (2) likert scales, (3) categories, focuses, targetables.
// export default class GS3 extends Component {
class GS3Base extends Component {
  // header = 'Health Domains';  // Aliases: Categories.
  header = 'Health Focuses';  // Aliases: Categories.
  i = 3;
  constraintMessage = 'Please select one or more options.';
  state = INITIAL_STATE;
  cachedState = this.props.cachedState;  // to make Pycharm happy
  
  // componentDidMount() {
  //   console.log(this.props.cachedState);
  // }
  
  content = function(on='a') {
    if (on === 'a')
        return <div>
          
        <GsP>Every person has a unique health situation.
        Health Hub employs some special concepts, including <em>Health Focuses</em> and <em>Targetables</em>.
        Health focuses can be either generalized or specific conditions.
        Each health focus has one or more targetables, which are quantitative aspects that you can track.
        </GsP>
        {/*<GsP></GsP>*/}
        <GsP>Which health focuses are relevant to you?</GsP>
        <br/>
        <br/>
      </div>;
    else if (on === 'b')
      return <div>
        <GsP>Every person has a unique health situation.
        {/*<BrOver400px/>*/}
        Health Hub uses the concept of <em>Health Domains</em>, grouping aspects of health based on time. The 3 domains are:
        chronic, long &amp; short term, and everyday health.</GsP>
        {/*<GsP></GsP>*/}
        {/*TODO: Dynamic text for "you" based on who we're talking about.*/}
        <GsP>Which health domains are relevant to you?</GsP>
      </div>;
  }();
  
  render() {
    return (
      <SelectWidgetPage
        i={this.i}
        state={this.state}
        cachedState={this.props.cachedState}
        constraintMessage={this.constraintMessage}
        display='cards'
      >
        {/*<SelectWidgetPage i={this.i} state={this.state} content={this.content} constraintMessage={this.constraintMessage}>*/}
        <GsH1>{this.header}</GsH1>
        {this.content}
      </SelectWidgetPage>
    )
  }
}

// export default graphql(getState)(GS3);

// TODO: Freezes every time a change is made. Seems like it does an infinite loop of updating state and loading state.
// TODO: Fixes?: (a) conditionally pull data, perhaps only on mount, using HOC? (b) Do not set off mutation to update state if state has not changed.
// noinspection RequiredAttributes,JSUnusedLocalSymbols
const GS3 = ({ someEvent }) => (
  <Query query={GET_STATE}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <GS3Base name="GS3Base" cachedState={data}/>
        // <GS3Base name="GS3Base" cachedState={data} onChange={console.log(data)}/>
        // <GS3Base name="GS3Base" cachedState={data} onChange={console.log('change was detected')}/>
        // Removing the onChange handler didn't seem to solve the problem.
        // <GS3Base name="GS3Base" cachedState={data} onChange={someEvent}/>
        // Errors rather than printing.
        // <GS3Base name="GS3Base" cachedState={data} onChange={data}/>
      );
    }}
  </Query>
);

export default GS3;
// export default GS3Base;
