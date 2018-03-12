import React, { Component } from 'react';
import { Button, Tooltip } from 'reactstrap';
import { error } from '../../styles'


export class ButtonPrimary extends Component {
  constructor(props) {
    // noinspection JSCheckFunctionSignatures
    super(props);
    this.continue = this.continue.bind(this);
    // this.tooltipToggle = this.tooltipToggle.bind(this);
    this.state = {
      tooltipOpen: false,
      tooltipMessage: this.props.constraintMessage,
      continueOk: this.props.continueOk
    };
  }
  
  // tooltipToggle() {
  //   this.setState({
  //     tooltipOpen: !this.state.tooltipOpen
  //   });
  // }
  
  continue() {
    if (!this.state.continueOk)
      // this.tooltipToggle()
      this.setState({tooltipOpen: true})
  }
  
  render() {
    return (
      <div>
        <Button style={this.props.style} color={'danger'} id='continue-button' onClick={this.continue}>{this.props.children}</Button>
        <Tooltip style={{paddingTop: '10px', paddingBottom: '10px', color: error, fontWeight: 'bold'}} placement={'bottom'} isOpen={this.state.tooltipOpen} target='continue-button'>
        {/*<Tooltip style={{background: error}} placement={'bottom'} isOpen={this.state.tooltipOpen} target='continue-button'>*/}
        {/*<Tooltip style={{background: error}} placement={'bottom'} isOpen={this.state.tooltipOpen} target='continue-button' toggle={this.toggle}>*/}
          {this.state.tooltipMessage}
        </Tooltip>
      </div>
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
