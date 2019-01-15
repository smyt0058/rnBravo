import React, {Component} from 'react';
import { Container, Header, Button, Icon, Body, Left, Title } from 'native-base';
import {Platform, StyleSheet, Text, View, StatusBar, Dimensions, ScrollView} from 'react-native';
import ChartsSegmentBar from '../components/ChartsSegmentBar';
import ChartView from 'react-native-highcharts';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

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

      state = {
        segmentIndex: 1
      };

    _chartSegmentHandler = (dataCat) => {
      switch (dataCat) {
        case 'Day':
          alert(dataCat)
          this.setState({
            segmentIndex: 1
          })
          break;
        case 'Week':
          alert(dataCat)
          this.setState({
            segmentIndex: 2
          })
          break;
        case 'Month':
          alert(dataCat)
          this.setState({
            segmentIndex: 3
          })
          break;
        case 'Year':
          alert(dataCat)
          this.setState({
            segmentIndex: 4
          })
          break;
        default:
          break;
      }
    }

    

    render() {
        const option = this.props.navigation.getParam('chosenOption', 'Option');
        const name = this.props.navigation.getParam('name', 'Name');
        // alert(name + " " + option);

        var Highcharts='Highcharts';
        //#region 
        var pieConf={
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Federal overall conveyance comparison'
        },
        exporting: { enabled: false },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          itemStyle: {
            fontSize: '14px',
            font: '14pt Trebuchet MS, Verdana, sans-serif'
          }
      },
        credits: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Province',
            colorByPoint: true,
            data: [{
                name: 'QUE.',
                y: 30000,
                sliced: true,
                selected: true
            }, {
                name: 'ONT.',
                y: 2800
            }, {
                name: 'MAN.',
                y: 24000
            }, {
                name: 'N.B.',
                y: 22000
            }, {
                name: 'ALTA',
                y: 20000
            }, {
                name: 'B.C.',
                y: 18000
            }, {
                name: 'N.S.',
                y: 16000
            }, {
                name: 'SASK.',
                y: 14000
            }, {
                name: 'P.E.I',
                y: 12000
            }, { 
                name: 'N.W.T',
                y: 10000
            }, {
                name: 'NUN',
                y: 8000
            }, {
                name: 'YUK',
                y: 6000
            }, {
                name: 'N.L.',
                y: 4000
            },]
        }]
            };
        //#endregion

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };
    

        //#region
        var lineConf = {
          title: {
            text: 'Number of Conveyances/Secondary referals over time'
        },
    
        // subtitle: {
        //     text: 'Source: thesolarfoundation.com'
        // },

        exporting: { enabled: false },
    
        yAxis: {
            title: {
                text: 'Number of Conveyances'
            }
        },
        xAxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
        },
        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'middle',
            itemStyle: {
              fontSize: '14px',
              font: '14pt Trebuchet MS, Verdana, sans-serif'
            }
        },

        // legend: {
        //   itemStyle: {
        //     fontSize: '12px',
        //     font: '12pt Trebuchet MS, Verdana, sans-serif'
        //   },
        //   // squareSymbol: true,
        // },
    
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 1
            }
        },

        credits: { enabled: false },
    
        series: [{
            name: 'Conveyances',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        },{
            name: 'Secondary',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
        }
        //#endregion

        //#region
        var barConf = {
          chart: {
            type: 'column'
        },

        credits: { enabled: false },
    
        title: {
            text: 'Number of conveyances and secondary referals, grouped by mode'
        },

        exporting: { enabled: false },
    
        xAxis: {
            categories: ['']
        },
    
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of fruits'
            }
        },
        legend: {
          itemStyle: {
            fontSize: '14px',
            font: '14pt Trebuchet MS, Verdana, sans-serif'
          }
      },
    
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
    
        series: [{
            name: 'Land',
            data: [10],
        }, {
            name: 'Land Secondary',
            data: [3],
        }, {
            name: 'Air',
            data: [12],
        }, {
            name: 'Air Secondary',
            data: [4],
        }]
        }
        //#endregion
        
        return(
        <ScrollView>
            <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
            <Container style={{height: 1800}}>
              <ChartsSegmentBar index={this.state.segmentIndex} click={this._chartSegmentHandler}/>
              <ChartView style={{height:400}} config={lineConf} options={options} originWhitelist={['']}></ChartView>
              <ChartView style={{height:400}} config={barConf} options={options} originWhitelist={['']}></ChartView>
              <ChartView style={{height:500}} config={pieConf} options={options} originWhitelist={['']}></ChartView>
              <ChartView style={{height:400}} config={lineConf} options={options} originWhitelist={['']}></ChartView>
              
              
  
            </Container>
        </ScrollView>
        )
    }
}