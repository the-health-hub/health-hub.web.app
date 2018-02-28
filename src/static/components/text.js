import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import {primary} from "../../styles";


export class BrOver400px extends Component {
  render() {
    return (
      <span>
        &nbsp;
        <MediaQuery query={'(min-width: 400px)'}>
          <br/>
        </MediaQuery>
      </span>
    );
  }
}

export const H1 = styled.h1`
  color: ${primary};
`;
