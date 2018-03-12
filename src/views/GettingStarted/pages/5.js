import React, {Component} from "react";
import SelectWidgetPage from '../templates/SelectWidgetPage';
import {BrOver400px} from '../../../static/components/text';
import GsH1 from '../components/h1';
import GsP from '../components/p';

// # Design
// (1) No math, (2) likert scales, (3) categories, focuses, targetables.
export default class GS3 extends Component {
  header = 'Targetables';
  i = 5;
  constraintMessage = 'Please select one or more options.';
  state = {
    options: {
      '1': {
        text: 'Targetable #1',
        id: '1',
        icon: 'fa fa-question',
        selected: false
      },
      '2': {
        text: 'Targetable #2',
        id: '2',
        icon: 'fa fa-question',
        selected: false
      },
      '3': {
        text: 'Targetable #3',
        id: '3',
        icon: 'fa fa-question',
        selected: false
      },
      '4': {
        text: 'Targetable #4',
        id: '4',
        icon: 'fa fa-question',
        selected: false
      },
    }
  };
  // Having {this.header} in <GsH1>Categories</GsH1> didn't work.
  content = function () {
    return <GsP>Categories are things you want to track and
      improve.<BrOver400px/>
      At <em>Health Hub</em>, these are the keystone of your health
      profile.</GsP>
  }();
  
  render() {
    return (
      <SelectWidgetPage i={this.i} state={this.state}
                        constraintMessage={this.constraintMessage}>
        {/*<SelectWidgetPage i={this.i} state={this.state} content={this.content} constraintMessage={this.constraintMessage}>*/}
        <GsH1>{this.header}</GsH1>
        {this.content}
      </SelectWidgetPage>
    )
  }
}
