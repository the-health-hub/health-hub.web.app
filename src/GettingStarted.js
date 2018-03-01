import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from './LayoutBase'
import OptionGrid from './static/components/optionGrid'
import TestGrid from './static/components/testGrid'
import { ButtonPrimary, ButtonSecondary} from "./static/components/buttons";
import { H1, BrOver400px } from './static/components/text'
import CenteredSection from './static/components/positioning';

// # Design
// (1) No math, (2) likert scales, (3) categories: time bound, focuses, targets.
export class GettingStartedTemplate extends Component {
  render() {
    return (
        <Layout
          breadcrumb={'/GettingStarted/'+this.props.i}
          viewMode='walkthrough'
          content={
            <CenteredSection>
              {this.props.children}
              <br/>
              <div style={{minWidth: '225px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                <Link to={this.props.i === 1 ? '/home' : '/getting-started/'+(this.props.i-1)}>
                  <ButtonSecondary style={{minWidth: '85px'}}>Back</ButtonSecondary>
                </Link>
                <Link to={'/getting-started/'+(this.props.i+1)}>
                  <ButtonPrimary style={{minWidth: '85px'}}>Continue</ButtonPrimary>
                </Link>
              </div>
            </CenteredSection>
        }/>
    );
  }
}

class GsH1 extends Component {
  render() {
    return (
      <H1 style={{marginBottom: '0.6em'}}>{this.props.children}</H1>
    );
  }
}

class GsP extends Component {
  render() {
    return (
      <p style={{fontSize: '1.2rem', lineHeight: '1.8rem'}}>{this.props.children}</p>
    );
  }
}

export class GS1 extends Component {  // Intro
  render() {
    return (
      <GettingStartedTemplate i={1}>
        <GsH1>Welcome to Health Hub!</GsH1>
        <GsP>Health Hub is designed to help you manage your health data.</GsP>
      </GettingStartedTemplate>
    );
  }
}

export class GS2 extends Component {  // Categories
  render() {
    const options = [
      {text: 'Physiological Heath & Symptomology', icon: 'fa fa-street-view'},
      {text: 'Physical Fitness', icon: 'fa fa-bicycle'},
      {text: 'Everyday Vitals', icon: 'fa fa-heartbeat'},
      {text: 'Mental & Emotional Health', icon: 'fa fa-heart'},
    ];
    
    return (
      <GettingStartedTemplate i={2}>
        <GsH1>Categories</GsH1>
        <GsP>Categories are things you want to track and improve.<BrOver400px/>
        At <em>Health Hub</em>, these are the keystone of your health profile.</GsP>
        <OptionGrid options={options}/>
      </GettingStartedTemplate>
    );
  }
}

export class GS3 extends Component {  // Focuses
  render() {
    const options = [
      {text: 'Physiological Heath & Symptomology', icon: 'fa fa-street-view'},
      {text: 'Physical Fitness', icon: 'fa fa-bicycle'},
      {text: 'Everyday Vitals', icon: 'fa fa-heartbeat'},
      {text: 'Mental & Emotional Health', icon: 'fa fa-heart'},
    ];
    
    return (
      <GettingStartedTemplate i={3}>
        <GsH1>Focuses</GsH1>
        <GsP>Focuses.<BrOver400px/>
        At <em>Health Hub</em>, these are the keystone of your health profile.</GsP>
        <OptionGrid options={options}/>
      </GettingStartedTemplate>
    );
  }
}

export class GS4 extends Component {  // Trackables
  render() {
    const options = [
      {text: 'Physiological Heath & Symptomology', icon: 'fa fa-street-view'},
      {text: 'Physical Fitness', icon: 'fa fa-bicycle'},
      {text: 'Everyday Vitals', icon: 'fa fa-heartbeat'},
      {text: 'Mental & Emotional Health', icon: 'fa fa-heart'},
    ];
    
    return (
      <GettingStartedTemplate i={4}>
        <GsH1>Trackables</GsH1>
        <GsP>Trackables are things you want to track and improve.<BrOver400px/>
        At <em>Health Hub</em>, these are the keystone of your health profile.</GsP>
        <OptionGrid options={options}/>
      </GettingStartedTemplate>
    );
  }
}

// ###################
// # Unused Components
export class GettingStartedPersonType extends Component {
  render() {
    return (
      <GettingStartedTemplate i={3}>
        {/*<H1>Which description do you feel best fits you?</H1>*/}
        {/*<div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>*/}
          {/*<span>Computer Novice</span>*/}
          {/*<span>Data Expert</span>*/}
        {/*</div>*/}
        
        <GsH1>How deep of a dive do you want to go?</GsH1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <span>Simple</span>
          <span>Detailed</span>
        </div>
      </GettingStartedTemplate>
    );
  }
}

export class GettingStartedWhoFor extends Component {
  render() {
    return (
      <GettingStartedTemplate i={3}>
        <GsH1>Are you setting this up for you or someone else?</GsH1>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <span>Me</span>
          <span>Someone Else</span>
        </div>
      </GettingStartedTemplate>
    );
  }
}

export class GettingStartedTest extends Component {
  render() {
    return (
        <Layout
          breadcrumb={'/GettingStarted/Test'}
          viewMode='walkthrough'
          content={
            <div className='inner' style={{
              paddingTop: '10px',

              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <TestGrid/>
            </div>
        }/>
    );
  }
}

// export class GettingStartedRoutes extends Component {
//   render() {
//     let routes = [];
//     for (let i=0; i++; i <3) {
//       // routes.push(<Route path='/getting-started/1' component={GS1}/>)
//       routes.push(
//
//       )
//
//     }
//     return (
//       <div>text</div>
//     );
//   }
// }
