import React, { Component } from 'react';
import Layout from './LayoutBase'

class Home extends Component {
  render() {
    return (
      <div>
        <Layout
          breadcrumb={'Test > Nested > Another nested'}
          content={
            <div>
              <p>CSS Grid Here</p>
            </div>
        }/>
      </div>
    );
  }
}

export default Home;
