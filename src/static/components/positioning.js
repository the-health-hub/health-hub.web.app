import React, { Component } from 'react';
import styled from 'styled-components';


export class CenteredSection extends Component {
  render() {
    return (
      <CenteredSectionOuter className='inner'>
        <CenteredSectionInner className='inner'>
          {this.props.children}
        </CenteredSectionInner>
      </CenteredSectionOuter>
    );
  }
}

export const CenteredSectionOuter = styled.section`
  // width: 100%;
  // height: 100%;
  //display: 'grid',
  //gridGap: '10px',
  //// (1) Footer fixed pixels, (2) sticky footer, (3) 100% height somehow bleeds over viewport, showing sidebar.
  //grid: \`
  //  [row1-start] "notifs"  auto [row1-end]
  //  [row2-start] "content" 100% [row2-end]
  //  [row3-start] "footer"  auto [row3-end]
  /// auto\`
  //padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  padding-top: 150px;
  padding-bottom: 100px;
  //@media (min-aspect-ratio: 8/5) {
  //  padding-top: 15%;
  //  padding-bottom: 10%;
  //}
  @media (max-width: 400px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const CenteredSectionInner = styled.div`
  @media (min-width: 400px) {
    max-width: 75%;
    // flex: 'none',
    // height: '100%'
    // boxSizing: 'border-box',
    // display: 'block',
    // position: 'relative',
    // top: '50%'
  }
`;

// noinspection JSUnusedGlobalSymbols
export const GridContainer = styled.section`
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
