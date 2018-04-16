import React, {Component} from "react";
import {Link} from 'react-router-dom';
import Layout from '../../../LayoutBase';
import {CenteredSection} from '../../../static/components/positioning';
import {ButtonSecondary, ButtonPrimary} from '../../../static/components/buttons';


export default class GettingStartedTemplate extends Component {
  render() {
    // noinspection JSUnresolvedVariable
    const cm = this.props.constraintMessage ? this.props.constraintMessage : '';
    return (
      <Layout
        breadcrumb={'/GettingStarted/' + this.props.i}
        viewMode='walkthrough'
        content={
          <CenteredSection>
            {this.props.children}
            <br/>
            <div style={{
              minWidth: '225px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}>
              <Link
                to={this.props.i === 1 ? '/home' : '/getting-started/' + (this.props.i - 1)}>
                <ButtonSecondary
                  style={{minWidth: '85px'}}>Back</ButtonSecondary>
              </Link>
              {this.props.continueOk ?
                <Link to={'/getting-started/' + (this.props.i + 1)}>
                  <ButtonPrimary continueOk={this.props.continueOk}
                                 constraintMessage={cm ? cm : ''}
                                 style={{minWidth: '85px'}}>Continue</ButtonPrimary>
                  {/*<ButtonPrimary style={{minWidth: '85px'}} id='continue'>Continue</ButtonPrimary>*/}
                </Link> :
                <ButtonPrimary continueOk={this.props.continueOk}
                               constraintMessage={cm ? cm : ''}
                               style={{minWidth: '85px'}}>Continue</ButtonPrimary>
              }
            </div>
          </CenteredSection>
        }/>
    );
  }
}