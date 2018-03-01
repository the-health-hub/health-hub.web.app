import React, { Component } from 'react';
import styled from 'styled-components';
import { primary, iconBlack } from '../../styles';

// # Resources
// https://css-tricks.com/things-ive-learned-css-grid-layout/
// https://css-tricks.com/snippets/css/complete-guide-grid/
// https://www.sitepoint.com/seven-ways-you-can-place-elements-using-css-grid-layout/
// Responsive: https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df

// TODO: For loop for options

export default class OptionGrid extends Component {
   
  render() {
    /* Options
     Daily Life - phys fit. Sleep. Exer. Diet. Vitals
       Alcohol cig consump. Chronic ill. Daily life (sleep weight)
     Long term - long term (injury ex) / recurrent / chronic or unknown health cond mental / emotianal
     Short term - fever. Days to weeks
    */
    
    return (
      <GridContainer>
        {this.props.options.map((option, i) =>
          <Box key={i}>
            <Icon className={option.icon}/>
            <Txt>{option.text}</Txt>
          </Box>
        )}
      </GridContainer>
    );
  }
}

const Icon = styled.i`
  margin-top: 15px;
  margin-bottom: 15px;
  color: ${primary};
`;

const Txt = styled.span`
  font-size: 0.34em;
  //color: ${primary};
`;

const GridContainer = styled.section`
  //display: grid;
  //grid-gap: 17px;
  //grid-template-columns: repeat(auto-fill, minmax(100px, 100px));
  //width: 90%;
  //max-width: 340px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 10px;
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
  border: 1px solid ${primary};
  // border: 1px solid ${iconBlack};
  border-radius: 3px;
  /* opacity: 0.9; */
  &:hover {
    background-color: ${primary};
    color: white;
  }
  &:hover ${Icon} {
    color: white;
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