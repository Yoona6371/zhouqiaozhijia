import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import { pxToDp, deviceWidthDp } from '../../../utils/pxToDp';

export default class TopTabNavigator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  static propTypes = {
    // ifScrollEnabled: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    type: PropTypes.number.isRequired,
    routes: PropTypes.array.isRequired,
  };

  static defaultProps = {
    routes: [
      // { key: 'first', title: 'first', component: HomeTabCase },
      // { key: 'second', title: 'Second', component: HomeTabCase },
      // { key: '3', title: 'Second', component: HomeTabCase },
      // { key: '4', title: 'Second', component: HomeTabCase },
      // { key: '5', title: 'Second', component: HomeTabCase },
      // { key: '6', title: 'Second', component: HomeTabCase },
    ],
    type: 1,
  };

  get bottomLine() {
    const { itemWidth, type } = this.props;
    if (type === 1) {
      return {
        height: pxToDp(60),
        width: itemWidth * 0.6,
        borderRadius: pxToDp(30),
        marginLeft: itemWidth * 0.2,
        marginBottom: pxToDp(18),
        backgroundColor: '#FEC60B',
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
        width: itemWidth * 0.2,
        marginLeft: itemWidth * 0.4,
        marginBottom: pxToDp(18),
        backgroundColor: '#000000',
      };
    }
  }

  renderTabBar = (props) => {
    const { type, itemWidth, ifScrollEnabled } = this.props;
    return (
      <TabBar
        scrollEnabled={ifScrollEnabled}
        {...props}
        style={{ backgroundColor: '#fff', elevation: 0, shadowOpacity: 0 }}
        labelStyle={{ fontSize: pxToDp(32), fontWeight: 'normal' }}
        activeColor={
          type === 1
            ? '#FFFFFF'
            : type === 2
            ? '#FE9E0E'
            : type === 3
            ? '#000000'
            : '#FFFFFF'
        }
        inactiveColor={'#999'}
        indicatorStyle={this.bottomLine}
        tabStyle={{ width: 'auto', minWidth: itemWidth }}
        renderLabel={({ route, focused, color }) => (
          <View>
            <Text
              style={{
                fontWeight: focused ? 'bold' : 'normal',
                color,
              }}
            >
              {route.title}
            </Text>
            <View style={{ height: 1 }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'transparent',
                }}
              >
                {route.title}
              </Text>
            </View>
          </View>
        )}
      />
    );
  };

  render() {
    const { type, itemWidth, routes } = this.props;
    const { index } = this.state;
    let obj = {};
    routes.forEach((item) => {
      obj[item.key] = item.component;
    });
    const renderScene = SceneMap(obj);
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={(index) => this.setState({ index })}
        initialLayout={deviceWidthDp}
        renderTabBar={this.renderTabBar}
        activeColor={
          type === 1
            ? '#FFFFFF'
            : type === 2
            ? '#FE9E0E'
            : type === 3
            ? '#000000'
            : '#FFFFFF'
        }
        inactiveTintColor={'#999'}
        indicatorStyle={this.bottomLine}
        tabStyle={{ width: itemWidth }}
        lazy={true}
        lazyPreloadDistance={1}
        renderLazyPlaceholder={() => <Text>加载中....</Text>}
      />
    );
  }
}
