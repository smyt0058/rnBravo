import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";

class HeaderBar extends Component {
  render() {
    return (
      // <Container style={styles.container}>
        <Header style={styles.container}>
          <Left />
          <Body>
            <Title style={{color: 'white'}}>Header</Title>
          </Body>
          <Right />
        </Header>        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#081E41",
  }
});

export default HeaderBar;

{/* <Content padder>
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Content> */}
      {/* </Container> */}