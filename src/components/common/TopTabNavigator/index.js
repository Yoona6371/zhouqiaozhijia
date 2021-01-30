import React, { Component } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { pxToDp } from '../../../utils/pxToDp';
import PropTypes from 'prop-types';
const Tab = createMaterialTopTabNavigator();
export class index extends Component {
  static propTypes = {
    name: PropTypes.array.isRequired,
    ifScrollEnabled: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.children,
      TabLength: this.props.children.length,
      scrollEnabled: this.props.ifScrollEnabled,
      itemWidth: this.props.itemWidth,
    };
    console.log(this.state);
  }
  get bottomLine() {
    const { itemWidth } = this.state;
    const { type } = this.props;
    if (type === 1) {
      return {
        height: pxToDp(60),
        width: itemWidth * 0.6,
        borderRadius: pxToDp(30),
        marginLeft: itemWidth * 0.2,
        marginBottom: pxToDp(18),
        backgroundColor: '#FE9E0E',
        elevation: 10,
      };
    } else if (type === 2) {
      return {
        width: itemWidth * 0.2,
        marginLeft: itemWidth * 0.4,
        marginBottom: pxToDp(18),
        backgroundColor: '#FE9E0E',
      };
    } else if (type === 3) {
      return {
        height: itemWidth * 0.05,
        width: itemWidth * 0.05,
        marginLeft: itemWidth * 0.47,
        marginBottom: pxToDp(16),
        backgroundColor: '#FE9E0E',
        borderRadius: pxToDp(80001),
      };
    }
  }
  render() {
    const { scrollEnabled, itemWidth } = this.state;
    const { type } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          backBehavior="history"
          tabBarPosition="top"
          tabBarOptions={{
            scrollEnabled: scrollEnabled,
            labelStyle: {
              fontSize: pxToDp(24),
            },
            activeTintColor:
              type === 1
                ? '#FFFFFF'
                : type === 2
                ? '#FE9E0E'
                : type === 3
                ? '#000000'
                : '#FFFFFF',
            inactiveTintColor: '#999999',
            indicatorStyle: this.bottomLine,
            tabStyle: {
              width: itemWidth,
            },
          }}
        >
          {this.state.pages.map((v, i) => (
            <Tab.Screen key={i} name={this.props.name[i]} component={() => v} />
          ))}
        </Tab.Navigator>
      </View>
    );
  }
}
export default index;
