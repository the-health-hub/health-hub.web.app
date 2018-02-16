import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Sidebar from './static/components/sidebar';
import Navbar from './static/components/navbar'
import './index.css'
import { textBase } from './styles'

// #Resources
// Google fonts: https://fonts.google.com/
// - https://fonts.google.com/?selection.family=Titillium+Web:200
// Reactstrap: https://reactstrap.github.io/components/navbar/

class LayoutBase extends Component {
  render() {
    return (
      <div>
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
        <Navbar breadcrumb={this.props.breadcrumb}/>
          <div style={{
            paddingLeft: '3%',
            paddingRight: '3%',
            color: textBase
          }}>
            {this.props.content}
          </div>
        <Sidebar/>
      </div>
    );
  }
}

export default LayoutBase;
