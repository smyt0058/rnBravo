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

  class SegmentBar extends Component {
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
              onPress={() => this.props.click('travellers')}
              style={this.props.index == 1 ? {backgroundColor: 'white', borderColor: '#081E41', width: 110, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: '#081E41', width: 110, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 1 ? {color: '#081E41'} : {color: 'white'}}>Travellers</Text>
            </Button>
            {/* <Button
              onPress={() => this.props.click('CBSA')}
              style={this.props.index == 2 ? {backgroundColor: 'white', borderColor: 'white', width: 110, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: 'white', width: 110, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 2 ? {color: '#081E41'} : {color: 'white'}}>CBSA</Text>
            </Button> */}
            <Button
              last
              onPress={() => this.props.click('commercial')}
              style={this.props.index == 3 ? {backgroundColor: 'white', borderColor: '#081E41', width: 110, justifyContent: 'center'} : {backgroundColor: '#081E41', borderColor: '#081E41', width: 110, justifyContent: 'center'}}
            >
              <Text style={this.props.index == 3 ? {color: '#081E41'} : {color: 'white'}}>Commercial</Text>
            </Button>
          </Segment>
      );
    }
}

export default SegmentBar