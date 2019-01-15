/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import HeaderBar from './components/HeaderBar';
import SegmentBar from './components/SegmentBar';
import ChartsPage from './containers/ChartsPage.js';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Root, ActionSheet} from 'native-base'
import {travGeoJsonHighway, travGeoJsonAir, travGeoJsonMarine, travGeoJsonProvince} from './assets/data/travGeoJson.js';
import {commGeoJsonHighway, commGeoJsonAir, commGeoJsonMarine, commGeoJsonProvince, commGeoJsonRail} from './assets/data/commGeoJson.js';

import bcMarker from './assets/markers/bcMarker.png';
import marineMarker from './assets/markers/marineMarker.png';
import airMarker from './assets/markers/airMarker.png';
import carMarker from './assets/markers/carMarker.png';
import highwayMarker from './assets/markers/highwayMarker.png';
import railwayMarker from './assets/markers/railwayMarker.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

Mapbox.setAccessToken('pk.eyJ1IjoiamFzb25zbXl0aCIsImEiOiJjanA0Mm8wd3Ewb2h4M2txcnNqcHNvaG4wIn0.EWZeuDd8KwPHC6IjhE2fdg');

var commProvOptions = ['Rail', 'Air', 'Marine', 'Highway', 'Cancel'];
var commPOEOptions = ['Stats', 'Cancel'];
var travOptions = ['Travellers', 'Vehicles', 'Cancel'];
var travOtherOptions = ['Stats', 'Cancel'];

class App extends Component {

  state = {
    selectedOverlay: 'travellers',
    currentProperties: {},
    segIndex: 1

  }

  static navigationOptions = {
    title: 'Map',
    headerStyle: {
      backgroundColor: '#081E41',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  _segmentHandler = (overlay) => {
    switch (overlay) {
      case 'travellers':
      this.setState({
        selectedOverlay: overlay,
        segIndex: 1
      })
        break;
      case 'CBSA':
      this.setState({
        selectedOverlay: overlay,
        segIndex: 2
      })
        break;
      case 'commercial':
      this.setState({
        selectedOverlay: overlay,
        segIndex: 3
      })
        break;
    
      default:
        break;
    }
  }

  _handleMarkerPress = (e) => {
    var name = e.nativeEvent.payload.properties.name;
    var isPOE = e.nativeEvent.payload.properties.isPOE;
    var isRoad = e.nativeEvent.payload.properties.isRoad;
    var overlay = this.state.selectedOverlay;
    this.setState({currentProperties: e.nativeEvent.payload.properties});

    switch (overlay) {
      case 'travellers':
        switch (isPOE) {
          case false:
          ActionSheet.show(
            {
              options: travOptions,
              cancelButtonIndex: 2,
              title: name
            },
            buttonIndex => {
              if(buttonIndex == 2) { 
                return
              } else {
                this.props.navigation.navigate('Charts', {chosenOption: travOptions[buttonIndex], name: name});
              }
            }
          )
            break;
          case true:
            switch (isRoad) {
              case true:
              ActionSheet.show(
                {
                  options: travOptions,
                  cancelButtonIndex: 2,
                  title: name
                },
                buttonIndex => {
                  if(buttonIndex == 2) { 
                    return
                  } else {
                  this.props.navigation.navigate('Charts', {chosenOption: travOptions[buttonIndex], name: name});
                  }
                }
              )
                break;
              
              case false:
              ActionSheet.show(
                {
                  options: travOtherOptions,
                  cancelButtonIndex: 1,
                  title: name
                },
                buttonIndex => {
                  if(buttonIndex == 1) { 
                    return
                  } else {
                  this.props.navigation.navigate('Charts', {chosenOption: travOtherOptions[buttonIndex], name: name});
                  }
                }
              )
                break;
              default:
                break;
            }
            break;
        
          default:
            break;
        }
        break;
      case 'commercial':
        
        switch (isPOE) {
          case false:
          ActionSheet.show(
            {
              options: commProvOptions,
              cancelButtonIndex: 4,
              title: name
            },
            buttonIndex => {
              if(buttonIndex == 4) { 
                return
              } else {
              this.props.navigation.navigate('Charts', {chosenOption: commProvOptions[buttonIndex], name: name});
              }
            }
          )
            break;
          case true:
          ActionSheet.show(
            {
              options: commPOEOptions,
              cancelButtonIndex: 1,
              title: name
            },
            buttonIndex => {
              if(buttonIndex == 1) { 
                return
              } else {
              this.props.navigation.navigate('Charts', {chosenOption: commPOEOptions[buttonIndex], name: name});
              }
            }
          )
          default:
            break;
        }

        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Root>
      <View style={styles.container}>
        
        
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
        
        
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={3}
            centerCoordinate={[-124.9805,55.2290]}
            style={styles.container}
            compassEnabled={false}>

            <Mapbox.ShapeSource id="marker-source-province" onPress = {(e) => this._handleMarkerPress(e)} shape={this.state.selectedOverlay === 'travellers' ? travGeoJsonProvince : commGeoJsonProvince}>
              <Mapbox.SymbolLayer id="bc-point" style={{ iconImage: bcMarker }} />
            </Mapbox.ShapeSource>
            <Mapbox.ShapeSource id="marker-source-car" onPress = {(e) => this._handleMarkerPress(e)} shape={this.state.selectedOverlay === 'travellers' ? travGeoJsonHighway : commGeoJsonHighway}>
              <Mapbox.SymbolLayer id="marker-style-layer-car" style={this.state.selectedOverlay == 'travellers' ? { iconImage: carMarker } : {iconImage: highwayMarker}} />
            </Mapbox.ShapeSource>
            <Mapbox.ShapeSource id="marker-source-marine" onPress = {(e) => this._handleMarkerPress(e)} shape={this.state.selectedOverlay === 'travellers' ? travGeoJsonMarine : commGeoJsonMarine}>
              <Mapbox.SymbolLayer id="marker-style-layer-marine" style={{ iconImage: marineMarker }} />
            </Mapbox.ShapeSource>
            <Mapbox.ShapeSource id="marker-source-air" onPress = {(e) => this._handleMarkerPress(e)} shape={this.state.selectedOverlay ==='travellers' ? travGeoJsonAir : commGeoJsonAir}>
              <Mapbox.SymbolLayer id="marker-style-layer-air" style={{ iconImage: airMarker }} />
            </Mapbox.ShapeSource>

            {this.state.selectedOverlay === 'commercial' ? 
              <Mapbox.ShapeSource id="marker-source-rail" onPress = {(e) => this._handleMarkerPress(e)} shape={commGeoJsonRail}>
                <Mapbox.SymbolLayer id="marker-style-layer-rail" style={{ iconImage: railwayMarker }} />
              </Mapbox.ShapeSource> : null}
              
            <SegmentBar index={this.state.segIndex} click={this._segmentHandler}/>

        </Mapbox.MapView>
      </View>
      </Root>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const AppNavigator = createStackNavigator({
  Home: App,
  Charts: ChartsPage
},
{
  initialRouteName: 'Home'
});

export default createAppContainer(AppNavigator);
