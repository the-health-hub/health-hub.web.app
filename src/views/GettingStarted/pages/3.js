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
  state = {
    options: {
      'chronic': {
        text: 'Chronic Health',
        id: 'chronic',
        img: require('../../../static/media/img/cards/chronic/blood-pressure-guage_5x1.jpg'),
        imgAlt: 'Close-up of a blood pressure monitor.',
        selected: false,
        content: 'It may be that you are strugging with an illness that may never go away, but it helps greatly to track your symptoms.',
        contentNested: `
          Physical Health grouping
          Mental Health grouping
          Symptomology`
      },
      'long-short-term': {
        text: 'Long & Short-term Health',
        id: 'long-short-term',
        img: require('../../../static/media/img/cards/long-short-term/injury-cast-leg_5x1.png'),
        imgAlt: 'Leg being wrapped in cast.',
        selected: false,
        content: 'Perhaps you have a long-term condition, such as an injury, with goals that you\'d like to target for recovery. Or maybe you or a loved one has short-term condition, such as a flu.',
        contentNested: `
          Long term - long term (injury ex) / recurrent / chronic or unknown health cond mental / emotianal.
        `
      },
      'everyday': {
        text: 'Everyday Health',
        id: 'everyday',
        img: require('../../../static/media/img/cards/daily/fitness-shoe_5x1.jpg'),
        imgAlt: 'Getting ready to jog.',
        selected: false,
        content: 'Most of us could even use some improvement in our everyday health, such as sleep, diet, mood, or physical fitness.',
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
