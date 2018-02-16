import React from 'react';
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import MediaQuery from 'react-responsive';
import {compose, graphql} from "react-apollo/index";
import gql from "graphql-tag";
import { colorTertiary } from '../../styles'

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  sideBarToggle = () => {
    this.props.mutate({
      variables: { sidebar_visibility: !this.props.sidebar_visibility }
    });
  };
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="#" onClick={() => this.sideBarToggle()} style={{marginRight: '40px'}}>
            <i className='fa fa-bars' style={{marginRight: '13px', fontSize: '1.4em'}}/>
            <span style={{fontSize: '1.3em'}}>Health Hub</span>
          </NavbarBrand>
          
          <MediaQuery query="(min-width: 450px)">
            <span style={{
              color: colorTertiary
              // TODO: Cap width and add ... if necessary.
              //  - https://jsfiddle.net/69z2wepo/29802/
              //  - https://www.hawatel.com/blog/handle-window-resize-in-react/
              // https://github.com/contra/react-responsive
            }}>
              {this.props.breadcrumb}
            </span>
          </MediaQuery>
          
          {/* This is for the right menu when things get small. Shows menu items on right if they are hidden.*/}
          {/*<NavbarToggler onClick={this.toggle} />*/}
          
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div style={{display: 'flex'}}>
                  <div style={{flex: 1}}>
                    <NavLink href="#"><i className='fa fa-search' style={{fontSize: '1.4em'}}/></NavLink>
                  </div>
                  <div style={{flex: 1}}>
                    <UncontrolledDropdown nav>
                      {/*<DropdownToggle nav caret>*/}
                      <DropdownToggle nav>
                        <i className='fa fa-user-circle' style={{
                          marginLeft: '10px',
                          marginRight: '10px',
                          fontSize: '1.4em'
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
                </div>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

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
