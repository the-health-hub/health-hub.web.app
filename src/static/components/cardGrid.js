import React, { Component } from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import CardHeader from 'material-ui/Card/CardHeader';
// noinspection NpmUsedModulesInstalled
import Card from 'material-ui/Card/Card';
// noinspection NpmUsedModulesInstalled
import CardActions from 'material-ui/Card/CardActions';
// noinspection NpmUsedModulesInstalled
import CardMedia from 'material-ui/Card/CardMedia';
// noinspection NpmUsedModulesInstalled
import CardTitle from 'material-ui/Card/CardTitle';
// noinspection NpmUsedModulesInstalled
import CardText from 'material-ui/Card/CardText';
// noinspection NpmUsedModulesInstalled
import FlatButton from 'material-ui/FlatButton';
import { GridContainer } from './positioning';
import {brightGreen} from "../../styles";


// # Resources
// https://css-tricks.com/things-ive-learned-css-grid-layout/
// https://css-tricks.com/snippets/css/complete-guide-grid/
// https://www.sitepoint.com/seven-ways-you-can-place-elements-using-css-grid-layout/
// Responsive: https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df
export default class CardGrid extends Component {
  render() {
    /* Options
     Daily Life - phys fit. Sleep. Exer. Diet. Vitals
       Alcohol cig consump. Chronic ill. Daily life (sleep weight)
     Long term - long term (injury ex) / recurrent / chronic or unknown health cond mental / emotianal
     Short term - fever. Days to weeks
    */
    
    return (
      <GridContainer>
        {this.props.options.map((option, i) =>
            <GsCard
                key={i}
                id={option.id}
                selected={option.selected}
                title={option.text}
                img={option.img}
                imgAlt={option.imgAlt}
                registerInput={this.props.registerInput}
            >
              <div
                style={{fontSize: '1.3em', textAlign: 'left'}}
                // onClick={() => this.props.registerInput(option.id)}
              >
                {option.content}
              </div>
            </GsCard>
        )}
      </GridContainer>
    );
  }
}

export class GsCard extends Component {
  render() {
    // noinspection JSUnresolvedVariable
    return (
      <Card style={{marginTop: '40px', marginBottom: '40px'}}>
        {/*<CardHeader*/}
          {/*title={this.props.title}*/}
          {/*subtitle={this.props.subtitle}*/}
          {/*avatar={this.props.avatar}*/}
        {/*/>*/}
        <CardMedia
          overlay={<CardTitle
            title={this.props.title}
            subtitle={this.props.subtitle}
          />}>
          <img
            src={this.props.img}
            alt={this.props.imgAlt}
          />
        </CardMedia>
        {/*<CardTitle title={this.props.title} subtitle={this.props.subtitle} />*/}
        <CardText>
          {this.props.children}
        </CardText>
        <CardActions>
          <FlatButton
            label={!this.props.selected ? `Click to Add` : <i className='fa fa-check' style={{fontSize: '2em'}}/>}
            secondary={!this.props.selected}
            style={this.props.selected ? {color: brightGreen} : {}}
            onClick={() => this.props.registerInput(this.props.id)}
          />
        </CardActions>
      </Card>
    )
  }
}
