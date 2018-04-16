import React, { Component } from 'react';

// # Resources
// https://css-tricks.com/things-ive-learned-css-grid-layout/
// https://css-tricks.com/snippets/css/complete-guide-grid/
// https://www.sitepoint.com/seven-ways-you-can-place-elements-using-css-grid-layout/
// Responsive: https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df

export default class BoxGrid extends Component {
  
  render() {
    const boxStyle = {
      borderWidth: '5px 5px 5px 5px',
      borderColor: 'black',
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    };
  
    return (
      // TODO: Media query at small screen size. 2 width grid.
      // TODO: Borders
      // TODO: Select animation like turbotax with checkmark.
      // TODO: Have app remember state.
      // TODO: Make optionSquare a component
      // TODO: onHover
      // TODO: shadow
      <div  style={{
        display: 'grid',
        gridGap: '20px',
        // gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
        grid: `
          [row1-start] ". a b c ."  100px [row1-end]
          [row2-start] ". d e f ."  100px [row2-end]
        / auto 100px 100px 100px auto`
        }}>
          
          {/*<div className={boxStyle} style={{gridArea: 'a', borderWidth: '5px 5px 5px 5px', borderColor: 'black',*/}
            {/*minHeight: '100px', minWidth: '100px', backgroundColor: 'red'}}>*/}
          <div style={Object.assign({gridArea: 'a'}, boxStyle)}>
            <i className='fa fa-bullseye' style={{fontSize: '1.7em'}}/>
            <span style={{fontSize: '0.8em'}}>text</span>
          </div>
          <div style={Object.assign({gridArea: 'b'}, boxStyle)}>
            <i className='fa fa-bullseye' style={{fontSize: '1.7em'}}/>
            text
          </div>
          <div style={Object.assign({gridArea: 'c'}, boxStyle)}>
            <i className='fa fa-bullseye' style={{fontSize: '1.7em'}}/>
            text
          </div>
          <div style={Object.assign({gridArea: 'd'}, boxStyle)}>
            <i className='fa fa-bullseye' style={{fontSize: '1.7em'}}/>
            text
          </div>
          <div style={Object.assign({gridArea: 'e'}, boxStyle)}>
            <i className='fa fa-bullseye' style={{fontSize: '1.7em'}}/>
            text
          </div>
          <div style={Object.assign({gridArea: 'f'}, boxStyle)}>
            <i className='fa fa-bullseye' style={{fontSize: '1.7em'}}/>
            text
          </div>

      </div>
    );
  }
}
