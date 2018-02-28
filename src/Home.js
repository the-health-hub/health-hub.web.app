import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './LayoutBase'
import { ButtonPrimary } from './static/components/buttons'
import { H1 } from './static/components/text'

class Home extends Component {
  
  render() {
    let breadcrumb = '/Home';
    
    return (
        <Layout
          breadcrumb={breadcrumb}
          content={
            <div  style={{
              paddingTop: '10px',
              display: 'grid',
              gridGap: '10px',
              // https://css-tricks.com/things-ive-learned-css-grid-layout/
              // https://css-tricks.com/snippets/css/complete-guide-grid/
              // https://www.sitepoint.com/seven-ways-you-can-place-elements-using-css-grid-layout/
              // 1. Failed attempts
              // gridTemplateRows: '1fr 1fr 1fr 1fr',
              // gridTemplateRows: '1fr 1fr',
              // gridTemplateColumns: '80%     20%',
              // gridTemplateRows: 'auto',
              // gridTemplateAreas:   `header  header
              //                       content content`
              //
              // gridTemplateAreas:   `padding padding
              //                       header  header
              //                       content content
              //                       footer  footer`
              //                       content .......
              //  2. Failed attempts
              //   gridTemplateColumns:
              //     // '[header-start] [content-start] 1fr 1fr 1fr 1fr [header-end] 1fr [content-end]',
              //     '[header-start] [content-start] 80% 20% [header-end] [content-end]',
              //   gridTemplateRows:
              //     // `10px
              //     `[header-start] 1fr [header-end]
              //     [content-start] 1fr [content-end]`
              //   <h1 style={{gridArea: 'header'}}>Key Metrics</h1>
              //   <p style={{gridArea: 'content'}}>CSS Grid Here</
              //
              //   3. Successful attempt
              //   gridTemplateColumns: '75% 25%',
              //   gridTemplateRows: '1fr 1fr 1fr',
              //     <h1 style={{gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '1', gridRowEnd: '2'}}>Key Metrics</h1>
              //     <p style={{gridColumnStart: '1', gridColumnEnd: '2', gridRowStart: '2', gridRowEnd: '3'}}>CSS Grid Here</p>
              //  4. Successful attempt
              // grid: `[row1-start] "h1 h2 h3" 1fr [row1-end]
              // [row2-start] "f1 f2 f3" 25px [row2-end]
              //   / auto 50px auto`
              //   <h1 style={{gridArea: 'h1'}}>Key Metrics</h1>
              //   <p style={{gridArea: 'f3'}}>CSS Grid Here</p>
              grid: `
                [row1-start] "notifs  notifs"  auto [row1-end]
                [row2-start] "header  header"  1fr  [row2-end]
                [row3-start] "content content" auto [row3-end]
                [row4-start] "footer  footer"  50px [row4-end]
              / auto 25%`
              }}>
                <div id='home-notifications' style={{gridArea: 'notifs'}}/>
                <H1 style={{gridArea: 'header'}}>Key Metrics</H1>
                <div style={{gridArea: 'content'}}>
                  <p>It looks like you haven't set up any targets!</p>
                  <Link to='/getting-started/1'><ButtonPrimary>Get Started</ButtonPrimary></Link>
                </div>
                <div id='home-footer' style={{gridArea: 'footer'}}/>

            </div>
        }/>
    );
  }
}

export default Home;
