import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// 路由

import Home from '../pages/home';
import ImageShow from '../pages/ImageShow';

// 组件
import Tab from '../router/tab';
import LocalStorageUtils from '../utils/LocalStorageUtils';

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tab" headerMode={'none'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Test" component={Test} />
          {/*<Stack.Screen name="Tab" component={Tab} />*/}
          <Stack.Screen name="ImageShow" component={ImageShow} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Nav;
