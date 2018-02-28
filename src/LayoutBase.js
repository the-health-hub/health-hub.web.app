import React, { Component } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Sidebar from './static/components/sidebar';
import Navbar from './static/components/navbar'
import './index.css'
import { textBase } from './styles'

// #Resources
// Google fonts: https://fonts.google.com/
// - https://fonts.google.com/?selection.family=Titillium+Web:200
// Reactstrap: https://reactstrap.github.io/components/navbar/

export default class LayoutBase extends Component {
  render() {
    return (
      <LayoutContainer1 className='outer'>
        <Helmet>
          <title>Health Hub</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Titillium+Web:200" rel="stylesheet" />
          {/*<link rel="stylesheet" href="static/css/main.css" />*/}
        </Helmet>
        
        <Navbar
          breadcrumb={this.props.breadcrumb}
          viewMode={this.props.viewMode}
        />
        
        {/*<div className='inner'/>*/}
        {/*https://stackoverflow.com/questions/18210241/fixed-header-footer-content-height-100-cause-undesired-vertical-scrolling*/}
        <LayoutContainer2 className='outer'>
          {this.props.content}
        </LayoutContainer2>
        
        <Sidebar/>
        
      </LayoutContainer1>
    );
  }
}

const LayoutContainer1 = styled.div`
  color: ${textBase};
  //background: white; /* fallback for old browsers */
  //background: -webkit-linear-gradient(to top, #f4f4f4, white);  /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to top, #f4f4f4, white); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const LayoutContainer2 = styled.div`
  padding-left: 3%;
  padding-right: 3%;
`;
