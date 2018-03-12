import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../LayoutBase'
import { ButtonPrimary } from "../static/components/buttons";
import { H1 } from '../static/components/text'
import { CenteredSection} from "../static/components/positioning";

export default class NotFound404 extends Component {
  render() {
    return (
        <Layout
          breadcrumb={'/GettingStarted/'+this.props.i}
          viewMode='walkthrough'
          content={
            <CenteredSection className='inner'>
              <div className='inner' style={{maxWidth: '75%'}}>
                <H404><span style={{fontSize: '3em'}}>404!</span></H404>
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

class H404 extends Component {
  render() {
    return (
      <H1 style={{marginBottom: '0.6em'}}>{this.props.children}</H1>
    );
  }
}
