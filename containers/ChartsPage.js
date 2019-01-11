import React, {Component} from 'react';
import { Container, Header, Button, Icon, Body, Left, Title } from 'native-base';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

export default class ChartsPage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam('name', 'Charts'),
          headerStyle: {
            backgroundColor: '#081E41',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        };
      };

    render() {
        const option = this.props.navigation.getParam('chosenOption', 'Option');
        const name = this.props.navigation.getParam('name', 'Name');
        alert(name + " " + option);
        return(
        <View>
            <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
            <Container>
                {/* <Header>
                <Left>
            <Button transparent onPress={() => alert('back')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
                </Header> */}
            </Container>
        </View>
        )
    }
}