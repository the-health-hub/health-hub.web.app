import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../LayoutBase'
import styled from 'styled-components';
import { ButtonPrimary } from "../static/components/buttons";
import { H1 } from '../static/components/text'

export default class NotFound404 extends Component {
  render() {
    return (
        <Layout
          breadcrumb={'/GettingStarted/'+this.props.i}
          viewMode='walkthrough'
          content={
            <CenteredSection className='inner'>
              <div className='inner' style={{maxWidth: '75%'}}>
                <GsH1><span style={{fontSize: '3em'}}>404!</span></GsH1>
                <p  style={{marginBottom: '0.5em', fontSize: '2em'}}>
                  The page you were looking for was not found.
                </p>
                <p  style={{marginBottom: '1.6em', fontSize: '2em'}}>
                  Sorry ;(
                </p>
                <Link to={'/home'}>
                    <ButtonPrimary>Go Home</ButtonPrimary>
                </Link>
              </div>
            </CenteredSection>
        }/>
    );
  }
}

const CenteredSection = styled.section`
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
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 400px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

class GsH1 extends Component {
  render() {
    return (
      <H1 style={{marginBottom: '0.6em'}}>{this.props.children}</H1>
    );
  }
}
