import React from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

// 路由

import Home from '../pages/home';
import ImageShow from '../pages/ImageShow';
import DynamicList from '../pages/dynamic/dynamicList';
import DynamicRelease from '../pages/dynamic/dynamicRelease';
// 组件
import LocalStorageUtils from '../utils/LocalStorageUtils';
import DynamicDetail from '../pages/dynamic/dynamicDetail';

// 测试
import Test from '../pages/test';

const Stack = createStackNavigator();

class Nav extends React.Component {
  constructor(props) {
    super(props);
    LocalStorageUtils.get('userInfo').then((userInfo) => {
      if (userInfo !== null) {
        // 1.重新获取用户信息
        // 2.存储到mobx中
      } else {
        // 跳转登录
        // this.props.navigate()
      }
    });
  }
  render() {
    return (
      <NavigationContainer
        onStateChange={(state: NavigationState) => {
          //加入该行
          //这个是跳转了才去回调，所以不能利用routes来判断路由栈
          NavigationHelper.navRouters = state.routes;
        }}
      >
        <Stack.Navigator
          initialRouteName="Home"
          headerMode={'none'}
          screenOptions={(navigation) => {
            NavigationHelper.navigation = navigation.navigation;
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          {/*<Stack.Screen name="Tab" component={Tab} />*/}

          {/*动态列表*/}
          <Stack.Screen name="DynamicList" component={DynamicList} />
          <Stack.Screen name="DynamicRelease" component={DynamicRelease} />
          <Stack.Screen
            name="ImageShow"
            component={ImageShow}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Nav;
