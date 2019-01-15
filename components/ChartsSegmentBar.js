import React, {Component} from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Segment
  } from "native-base";

  class ChartsSegmentBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        seg: props.index
      };
    }
    render() {
      return (
          <Segment style={{backgroundColor: 'transparent'}}>
            <Button
              first
              onPress={() => this.props.click('Day')}
              style={this.props.index == 1 ? {backgroundColor: 'white', borderColor: '#081E41', width: 80, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: '#081E41', width: 80, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 1 ? {color: '#081E41'} : {color: 'white'}}>Day</Text>
            </Button>
            <Button
              onPress={() => this.props.click('Week')}
              style={this.props.index == 2 ? {backgroundColor: 'white', borderColor: '#081E41', width: 80, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: '#081E41', width: 80, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 2 ? {color: '#081E41'} : {color: 'white'}}>Week</Text>
            </Button>
            <Button
              onPress={() => this.props.click('Month')}
              style={this.props.index == 3 ? {backgroundColor: 'white', borderColor: '#081E41', width: 80, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: '#081E41', width: 80, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 3 ? {color: '#081E41'} : {color: 'white'}}>Month</Text>
            </Button>
            <Button
              last
              onPress={() => this.props.click('Year')}
              style={this.props.index == 4 ? {backgroundColor: 'white', borderColor: '#081E41', width: 80, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: '#081E41', width: 80, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 4 ? {color: '#081E41'} : {color: 'white'}}>Year</Text>
            </Button>
          </Segment>
      );
    }
}

export default ChartsSegmentBar