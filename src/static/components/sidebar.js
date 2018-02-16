/* eslint-disable */
/* eslint-disable-next-line */
// #Imports
import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import SidebarBase from '@health-hub/react-sidebar';
import './sidebar.css'

// #Component
// TODO: Consider like - https://bootsnipp.com/snippets/featured/fancy-sidebar-navigation
class AppSidebar extends Component {
  sidebarIconsOn = true;
  iconBaseSize = '1.2em';
  iconSize = (x) => {
    const iconBaseUnits = parseInt(this.iconBaseSize.slice(0, -2));
    // console.log((iconBaseUnits + x).toString() + 'em');
    if (this.sidebarIconsOn)
      return (iconBaseUnits + x/10).toString() + 'em';
    else
      return '0em';
  };
  
  sidebarClose = () => {  // (1) doesn't seem to be being used below
    this.props.mutate({
      variables: { sidebar_visibility: false }
    });
  };
  
  render() {
    const { sidebarVisibility } = this.props;
    const visible = sidebarVisibility.sidebar_visibility;
    
    {/*<a href="#menu" role="button" className="close" key={'close'} onClick={() => this.sidebarClose()}/>,*/}
    {/*<a href="" key={'close-anchor'} onClick={() => this.sidebarClose()}><i role="button" className="close" key={'close-icon'}/></a>,*/}
    
    {/*<i onClick={() => this.sidebarClose()} role="button" className="fa fa-times" key={'close'}*/}
         {/*// style={{position: 'absolute', right:'1.5em', top: '1.5em'}}/>*/}
        {/*style={{position: 'absolute', left:'1.55em', top: '1em', fontSize: '1.2em'}}/>*/}
        
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    let sidebarContent = [
        <ul className="links" key={'links'} style={{textAlign: 'left'}}>
          <li key={'home'}><a href=""><i style={{fontSize: this.iconSize(3), marginRight: '5px'}} className='fa fa-home'/> Home</a></li>
          {/*<li key={'dashboard'}><a href="">Dashboard</a></li>*/}
          <li key={'targets'}><a href=""><i style={{fontSize: this.iconSize(3), marginRight: '5px'}} className='fa fa-bullseye'/> Targets</a></li>
          <li key={'data'}><a href=""><i style={{fontSize: this.iconSize(0), marginRight: '5px'}} className='fa fa-database'/> Data</a></li>
            <li key={'entry-form'}><a href=""><i style={{fontSize: this.iconSize(0), marginRight: '5px', marginLeft: '10px'}} className='fa fa-clipboard'/> Entry Form</a></li>
            <li key={'assistant'}><a href=""><i style={{fontSize: this.iconSize(0), marginRight: '5px', marginLeft: '10px'}} className='fa fa-user-circle'/> Assistant</a></li>
            <li key={'calendar'}><a href=""><i style={{fontSize: this.iconSize(0), marginRight: '5px', marginLeft: '10px'}} className='fa fa-calendar'/> Calendar</a></li>
            <li key={'import-export'}><a href=""><i style={{fontSize: this.iconSize(0), marginRight: '5px', marginLeft: '10px'}} className='fa fa-download'/> Import/Export</a></li>
          <li key={'family'}><a href=""><i style={{fontSize: this.iconSize(0), marginRight: '5px'}} className='fa fa-users'/> My Family</a></li>
          <li key={'settings'}><a href=""><i style={{fontSize: this.iconSize(4), marginRight: '5px'}} className='fa fa-cog'/> Settings</a></li>
        </ul>,
        <a href="#" key={'close-anchor'} onClick={() => this.sidebarClose()}><i role="button" className="close" key={'close-icon'}/></a>,
    ];
    
    // noinspection HtmlUnknownTarget, HtmlUnknownAnchorTarget
    return (
      <SidebarBase
        sidebar={sidebarContent}
        // open={this.state.sidebarOpen}
        sideBarElement={'nav'}
        sidebarId={'menu'}
        open={visible} //todo: visible
        // onSetOpen={this.onSetSidebarOpen}
        styles={{
          root: {
            zIndex: visible ? 2 : -1
          }, sidebar: {
            backgroundColor: '#cc1f2f',
            width: '300px'
          }
        }} // TODO: Red.
        pullRight={false}
        id={'menu'}
        externalStylesOnly={false}
        // sidebarClassName={'menu'}
      > </SidebarBase>
    );
  }
}

// #Queries
// TODO: Access from nested structure.
const sidebarVisibility = gql`
 query sidebarVisibility {
   sidebar_visibility @client
 }
`;

// (1)
// (2) Also, should this be Boolean! ?
const sidebarOpenClose = gql`
 mutation sidebarOpenClose($sidebar_visibility: String!) {
   sidebarOpenClose(sidebar_visibility: $sidebar_visibility) @client {
     sidebar_visibility
   }
 }
`;

// #Exports
export default compose(
  graphql(sidebarVisibility, { name: 'sidebarVisibility' }),
  graphql(sidebarOpenClose)
)(AppSidebar);
