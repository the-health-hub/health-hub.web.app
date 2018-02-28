import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class ButtonPrimary extends Component {
  render() {
    return (
      <Button color={'danger'}>{this.props.children}</Button>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <Button color={'secondary'}>{this.props.children}</Button>
    );
  }
}
