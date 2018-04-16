import React, {Component} from "react";
import SelectWidgetPage from '../templates/SelectWidgetPage';
// import {BrOver400px} from '../../../static/components/text';
import GsH1 from '../components/h1';
import GsP from '../components/p';
// import GsCard from '../components/card';


// # Design
// (1) No math, (2) likert scales, (3) categories, focuses, targetables.
export default class GS3 extends Component {
  header = 'Health Domains';  // Aliases: Categories.
  i = 3;
  constraintMessage = 'Please select one or more options.';
  chronicHealthFocuses = {
    'eye-health': {
      title: 'Eye Health',
      id: 'eye-health',
      options: {
        glaucoma: {
          __typename: 'Glaucoma',
          text: 'Glaucoma',
          id: 'glaucoma',
          icon: 'fa fa-eye',
          category: 'Eye Health',
          selected: false
        },
        iritis: {
          __typename: 'Iritis',
          text: 'Iritis',
          id: 'iritis',
          icon: 'fa fa-eye',
          category: 'Eye Health',
          selected: false
        },
      }
    },
    'mental-health': {
      title: 'Mental Health',
      id: 'mental-health',
      options: {
        depression: {
          __typename: 'Depression',
          text: 'Depression',
          id: 'depression',
          icon: 'fa fa-question-circle',
          category: 'Mental Health',
          selected: false
        },
        'bipolar-disorder': {
          __typename: 'Bipolar Disorder',
          text: 'Bipolar Disorder',
          id: 'bipolar-disorder',
          icon: 'fa fa-question-circle',
          category: 'Mental Health',
          selected: false
        },
      }
    }
  };
  everydayHealthFocuses = {
    'diet': {
      title: 'Diet',
      id: 'diet',
      options: {
        'calorie-count': {
          __typename: 'Calorie Count',
          text: 'Calorie Count',
          id: 'calorie-count',
          icon: 'fa fa-question-circle',
          category: 'Diet',
          selected: false
        },
      }
    },
  };
  state = {
    __typename: 'HealthDomainsState',
    options: {
      __typename: 'HealthDomainsOptions',
      'chronic-health': {
        __typename: 'HealthDomainsOption',
        text: 'Chronic Health',
        id: 'chronic-health',
        img: require('../../../static/media/img/cards/chronic/blood-pressure-guage_5x1.jpg'),
        imgAlt: 'Close-up of a blood pressure monitor.',
        selected: false,
        content: 'It may be that you are strugging with an illness that may never go away, but it helps greatly to track your symptoms.',
        options: this.chronicHealthFocuses,
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
      'everyday-health': {
        __typename: 'HealthDomainsOption',
        text: 'Everyday Health',
        id: 'everyday-health',
        img: require('../../../static/media/img/cards/daily/fitness-shoe_5x1.jpg'),
        imgAlt: 'Getting ready to jog.',
        selected: false,
        content: 'Most of us could even use some improvement in our everyday health, such as sleep, diet, mood, or physical fitness.',
        options: this.everydayHealthFocuses,
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
  content = function() {
    return <div>
      <GsP>Every person has a unique health situation.
      {/*<BrOver400px/>*/}
      Health Hub uses the concept of <em>Health Domains</em>, grouping aspects of health based on time. The 3 domains are:
      chronic, long &amp; short term, and everyday health.</GsP>
      <GsP>
      </GsP>
      {/*TODO: Dynamic text for "you" based on who we're talking about.*/}
      <GsP>Which health domains are relevant to you?</GsP>
    </div>
  }();
  
  render() {
    return (
      <SelectWidgetPage
        i={this.i}
        state={this.state}
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
