import React, {Component} from "react";
import SelectWidgetPage from '../templates/SelectWidgetPage';
import GsH1 from '../components/h1';
import GsP from '../components/p';
import {BrOver400px} from '../../../static/components/text';

// # Design
// (1) No math, (2) likert scales, (3) categories, focuses, targetables.
// TODO: Make a base class for these getting started templates. To much logic to re-use.
export default class GS2 extends Component {  // Who
  header = 'Your Circle';
  i = 2;
  constraintMessage = 'Please select one or more options.';
  state = {
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
  content = function () {
    return <GsP>Who would you like to set up?<BrOver400px/>
      If you'd rather do a speedier setup, these options can easily be revisted later.</GsP>
  }();
  render() {
    return (
      <SelectWidgetPage
        i={this.i}
        state={this.state}
        constraintMessage={this.constraintMessage}
        display='boxes'
      >
        <GsH1>{this.header}</GsH1>
        {this.content}
      </SelectWidgetPage>
    )
  }
}
