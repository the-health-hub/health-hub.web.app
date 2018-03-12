import React, {Component} from "react";

export default class GsP extends Component {
  render() {
    return (
      <p style={{
        fontSize: '1.2rem',
        lineHeight: '1.8rem'
      }}>{this.props.children}</p>
    );
  }
}