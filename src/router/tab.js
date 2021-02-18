import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import BooksDetail from '../pages/books/detail';
import personal from '../pages/personal/';
import { pxToDp } from '../utils/pxToDp';

import {
  flexColumnCenter,
  flexRowSpb,
  fontStyle,
  padding,
} from '../utils/StyleUtils';
import {
  tabbar_home_selected,
  tabbar_demand_selected,
  tabbar_message_selected,
  tabbar_mine_selected,
  tabbar_demand,
  tabbar_home,
  tabbar_message,
  tabbar_mine,
} from '../constants/svg';
import Svg from 'react-native-svg-uri';

const tabSelectedArray = [
  tabbar_home_selected,
  tabbar_demand_selected,
  '',
  tabbar_message_selected,
  tabbar_mine_selected,
];

const tabArray = [tabbar_home, tabbar_demand, '', tabbar_message, tabbar_mine];

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tab_home_wrap}>
      <Image
        style={styles.tab_home_bg}
        source={require('../asserts/images/home_bottom.png')}
      />
      <View style={styles.tab_home}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = route.name;

          // 是否当前页面
          const isFocused = state.index === index;

          // 点击事件
          const onPress = () => {
            //给当前点击的标签发送```tabPress```事件
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            //判断是否已经在当前标签页面
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // 长按压
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.bottom_item}
            >
              {tabIcon(isFocused, index)}
              {index !== 2 ? (
                <Text
                  style={{
                    ...styles.item_text,
                    color: isFocused ? '#FE9E0E' : '#888',
                  }}
                >
                  {label}
                </Text>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

function tabIcon(isFocused, index) {
  if (index === 2) {
    return (
      <Image
        source={require('../asserts/icons/release.png')}
        style={{
          marginBottom: pxToDp(40),
          width: pxToDp(98),
          height: pxToDp(98),
        }}
        resizeMode={'contain'}
      />
    );
  }
  if (isFocused) {
    return (
      <Svg
        svgXmlData={tabSelectedArray[index]}
        width={pxToDp(40)}
        height={pxToDp(40)}
        style={styles.bottom_item_svg}
      />
    );
  } else {
    return (
      <Svg
        svgXmlData={tabArray[index]}
        width={pxToDp(40)}
        height={pxToDp(40)}
        style={styles.bottom_item_svg}
      />
    );
  }
}

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.keyboardDidShowListener = null;
    this.keyboardDidHideListener = null;
    this.state = { KeyboardShown: true };
  }

  componentDidMount() {
    //监听键盘弹出事件
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardDidShowHandler.bind(this),
    );
    //监听键盘隐藏事件
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHideHandler.bind(this),
    );
  }

  componentWillUnmount() {
    //卸载键盘弹出事件监听
    if (this.keyboardDidShowListener != null) {
      this.keyboardDidShowListener.remove();
    }
    //卸载键盘隐藏事件监听
    if (this.keyboardDidHideListener != null) {
      this.keyboardDidHideListener.remove();
    }
  }

  //键盘弹出事件响应
  keyboardDidShowHandler(event) {
    this.setState({ KeyboardShown: false });
    console.log(123);
  }

  //键盘隐藏事件响应
  keyboardDidHideHandler(event) {
    this.setState({ KeyboardShown: true });
  }

  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}
        tabBar={(props) =>
          this.state.KeyboardShown ? <MyTabBar {...props} /> : null
        }
      >
        <Tab.Screen name="首页" component={Home} />
        <Tab.Screen name="需求" component={BooksDetail} />
        <Tab.Screen name="发布" component={BooksDetail} />
        <Tab.Screen name="消息" component={BooksDetail} />
        <Tab.Screen name="我的" component={personal} />
      </Tab.Navigator>
    );
  }
}

export default Tabs;

const styles = StyleSheet.create({
  tab_home_wrap: {
    width: pxToDp(750),
    height: pxToDp(110),
    position: 'relative',
  },
  tab_home_bg: {
    width: pxToDp(750),
    height: pxToDp(162),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab_home: {
    width: pxToDp(750),
    height: pxToDp(124),
    ...padding(48, 0, 48, 0),
    ...flexRowSpb,
    alignItems: 'flex-end',
    backgroundColor: '#fff',
  },
  bottom_item: {
    width: pxToDp(65),
    ...flexColumnCenter,
  },
  bottom_item_svg: {
    marginBottom: pxToDp(10),
  },
  item_text: {
    marginBottom: pxToDp(25),
    ...fontStyle(22, 22, 24, 'normal', '#888', 'center'),
  },
});
