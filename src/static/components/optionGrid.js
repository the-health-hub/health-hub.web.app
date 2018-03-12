import React, { Component } from 'react';
import styled from 'styled-components';
import { GridContainer } from './positioning';
import { primary, iconBlack } from '../../styles';
import {darkGreen, lightGreen, brightGreen} from "../../styles";

// # Resources
// https://css-tricks.com/things-ive-learned-css-grid-layout/
// https://css-tricks.com/snippets/css/complete-guide-grid/
// https://www.sitepoint.com/seven-ways-you-can-place-elements-using-css-grid-layout/
// Responsive: https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df
export default class OptionGrid extends Component {
  render() {
    // noinspection JSUnresolvedVariable
    return (
      <GridContainer>
        {this.props.options.map((option, i) =>
          <Box
            key={i}
            selected={option.selected}
            onClick={() => this.props.registerInput(option.id)}
          >
            <Icon className={option.icon}
                  selected={option.selected}
            />
            <Txt
              selected={option.selected}
              textMagnification={this.props.textMagnification ? this.props.textMagnification : null}
            >
              {option.text}
            </Txt>
          </Box>
        )}
      </GridContainer>
    );
  }
}

const Icon = styled.i`
  margin-top: 15px;
  margin-bottom: 15px;
  color: ${props => props.selected ? darkGreen : primary};
`;

// noinspection JSUnresolvedVariable
const Txt = styled.span`
  font-size: ${props => (0.34 * (props.textMagnification ? props.textMagnification : 1)).toString() + 'em'};
  //font-size: 0.34em;
  color: ${props => props.selected ? darkGreen : ''};
  //color: ${primary};
`;

const Box = styled.div`
  // TODO: Media query at small screen size. 2 width grid.
  // TODO: Select animation like turbotax with checkmark.
  // TODO: Have app remember state.
  margin: 9px;
  padding: 3px;
  display: flex;
  flex-direction: column;
  height: 120px;
  width: 120px;
  font-size: 2.4em;
  /* color ${primary}; */
  //box-shadow: 0 3px 6px 0 ${primary}, 0 4px 8px 0 rgba(0, 0, 0, 0.19);
  //box-shadow: 0 3px 6px 0 ${primary}, 0 4px 8px 0 ${primary};
  //  box-shadow: 1px 1px 3px 0 ${primary};
  //box-shadow: 1px 1px 3px 0 ${iconBlack};
  border: ${props => props.selected ? '1px solid ' + darkGreen : '1px solid '+ primary};
  // border: 1px solid ${iconBlack};
  border-radius: 3px;
  /* opacity: 0.9; */
  background: ${props => props.selected ? lightGreen: ''};
  &:hover {
    background-color: ${props => props.selected ? brightGreen : primary};
    color: ${props => props.selected ? lightGreen : 'white'};
    border: 0;
  }
  &:hover ${Icon} {
    color: ${props => props.selected ? lightGreen : 'white'};
  }
  &:hover ${Txt} {
    color: ${props => props.selected ? lightGreen : 'white'};
  }
  @media ( max-width: 400px ) {
    //width: 100%;
    width: 75%;
    margin: 0;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #c9c9c9;
    font-size: 2.7em;
  }
`;