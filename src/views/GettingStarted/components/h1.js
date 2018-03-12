import React, {Component} from "react";
import {H1} from '../../../static/components/text'

export default class GsH1 extends Component {
  render() {
    return (
      <H1 style={{marginBottom: '0.6em'}}>{this.props.children}</H1>
    );
  }
}