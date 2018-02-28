import React from 'react';
// import { Link } from 'react-router-dom';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {compose, graphql} from "react-apollo/index";
import gql from "graphql-tag";
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
// import { tertiary, tertiaryMinusOne, primary, iconBlack} from "../../styles";
import { tertiary, tertiaryMinusOne, primary } from "../../styles";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    let breadCrumbLength = this.props.breadcrumb.length;
    let estimatedPixelWidthPerChar = 9;
    let estimatedBreadCrumbWidth = (breadCrumbLength * estimatedPixelWidthPerChar);
    let estimatedPixelBufferDifference = 235;
    let estimatedViewportMinWidth = estimatedBreadCrumbWidth + estimatedPixelBufferDifference;
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchEnabled: false,
      estimatedViewportMinWidth: estimatedViewportMinWidth,
      breadcrumbsOn: false,
      viewMode: {
        'normal': 'normal',
        'walkthrough': 'walkthrough'
      }[this.props.viewMode]
    };
  };
  
  sideBarToggle = () => {
    this.props.mutate({
      variables: { sidebar_visibility: !this.props.sidebar_visibility }
    });
  };
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    // const navbarFontColor = iconBlack;  // #313131
    // const navbarFontColor= 'black';
    const navbarFontColor = 'white';
    return (
      // https://stackoverflow.com/questions/18210241/fixed-header-footer-content-height-100-cause-undesired-vertical-scrolling
      // <div style={{position: this.state.viewMode === 'walkthrough' ? 'absolute' : 'relative', width: '100%', backgroundColor: primary}}>
      <NavbarContainer viewmode={this.state.viewMode}>
        <Navbar light expand="md" style={{height: '50px', paddingTop: '10px'}}>
        {/*<Navbar color="faded" light expand="md" style={{height: '50px', paddingTop: '10px'}}>*/}
          <NavbarBrand href="#">
            {/*<i className='fa fa-bars' style={{marginRight: '13px', fontSize: '1.4em'}} onClick={() => this.sideBarToggle()}/>*/}
            <i className='fa fa-bars' style={{fontSize: '1.4em', color: navbarFontColor, marginLeft: '10px'}} onClick={() => this.sideBarToggle()}/>
          </NavbarBrand>
          <NavbarBrand href="/site" style={{marginRight: '40px', marginBottom: '5px'}}>
            <span style={{fontSize: '1.3em', color: navbarFontColor}}><strong>Health Hub</strong></span>
          </NavbarBrand>
          
          <MediaQuery query={"(min-width: " + this.state.estimatedViewportMinWidth + "px)"}>
            <span style={{
              color: tertiary,
              // width: this.state.estimatedViewportMinWidth + 'px',
              // backgroundColor: 'red'
            }}>
              {this.state.breadcrumbsOn ? this.props.breadcrumb : ''}
            </span>
          </MediaQuery>
          
          <Nav className="ml-auto" style={{display: 'flex'}} navbar>
            {/* This is for the right menu when things get small. Shows menu items on right if they are hidden.*/}
            {/*<NavbarToggler onClick={this.toggle} />*/}
            {/*<NavItem>*/}
              {/*<div style={{display: 'flex'}}>*/}
                {/*<div style={{flex: 1}}>*/}
            {this.state.searchEnabled ?
            <div style={{flex: 1}}>
              <NavLink href="#"><i className='fa fa-search' style={{fontSize: '1.65em', color: navbarFontColor}}/></NavLink>
            </div> : ''}
                {/*</div>*/}
            <div style={{flex: 1}}>
              <UncontrolledDropdown nav>
                {/*<DropdownToggle nav caret>*/}
                <DropdownToggle nav>
                  <i className='fa fa-user-circle' style={{
                    marginLeft: '10px',
                    // marginRight: '10px',
                    fontSize: '1.65em',
                    color: navbarFontColor
                  }}/>
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  {/*<DropdownItem divider />*/}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
              {/*</div>*/}
            {/*</NavItem>*/}
          </Nav>
        </Navbar>
        <hr align='center' style={{padding: '0 0 0 0', margin: 'auto', width: '90%'}}/>
      </NavbarContainer>
      // </div>
    );
  }
}

// #Styled Components
const NavbarContainer = styled.div`
  position: ${props => props.viewMode  === 'walkthrough'
    ? 'absolute'
    : 'relative'};
  width: 100%;
  background: #dd3645;
  //background: #df0010;
  //background: ${primary}; /* fallback for old browsers */
  //background: -webkit-linear-gradient(to bottom, #d61d2f, ${primary});  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to bottom, #d61d2f, ${primary}); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 1px 3px 0 ${tertiaryMinusOne};
  //color: #313131;
  //color: #191919;
`;

// #Queries
const sideBarToggle = gql`
 mutation sideBarToggle($sidebar_visibility: Boolean!) {
   sideBarToggle(sidebar_visibility: $sidebar_visibility) @client {
     sidebar_visibility
   }
 }
`;

// #Export
export default compose(
  graphql(sideBarToggle)
)(NavBar);
