import React, { Component } from 'react';
import { Button, UncontrolledTooltip } from 'reactstrap';
import { error } from '../../styles'


export class ButtonPrimary extends Component {
  constructor(props) {
    super(props);
    this.continue = this.continue.bind(this);
    this.state = {
      tooltipOpen: false,
      tooltipMessage: this.props.constraintMessage,
      continueOk: this.props.continueOk
    };
  }
  
  continue() {
    if (!this.state.continueOk)
      this.setState({tooltipOpen: true})
  }
  
  render() {
    return (
      <React.Fragment>
        <Button style={this.props.style} color={'danger'} id='continue-button' onClick={(e) => {this.continue(e)}}>{this.props.children}</Button>
        <UncontrolledTooltip
          style={{paddingTop: '10px',
            paddingBottom: '10px',
            color: error,
            fontWeight: 'bold'}}
          placement={'bottom'}
          isOpen={this.state.tooltipOpen}
          target='continue-button'>
          {this.state.tooltipMessage}
        </UncontrolledTooltip>
      </React.Fragment>
    );
  }
}

export class ButtonSecondary extends Component {
  render() {
    return (
      <Button style={this.props.style} color={'secondary'}>{this.props.children}</Button>
    );
  }
}
