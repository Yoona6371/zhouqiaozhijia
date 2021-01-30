import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Personal from '../pages/personal';
import { pxToDp } from '../utils/pxToDp';
import {
  flexColumnCenter,
  flexRowSpb,
  fontStyle,
  padding,
} from '../utils/StyleUtils';
import {
  tabbar_design_selected,
  tabbar_home_selected,
  tabbar_message_selected,
  tabbar_mine_selected,
  tabbar_design,
  tabbar_home,
  tabbar_message,
  tabbar_mine,
} from '../constants/svg';
import Svg from 'react-native-svg-uri';

const tabSelectedArray = [
  tabbar_home_selected,
  tabbar_design_selected,
  '',
  tabbar_message_selected,
  tabbar_mine_selected,
];

const tabArray = [tabbar_home, tabbar_design, '', tabbar_message, tabbar_mine];

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../asserts/images/home_bottom.png')}
      style={styles.tab_home}
    >
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
    </ImageBackground>
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

function Tabs() {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="首页" component={Home} />
      <Tab.Screen name="设计师" component={Home} />
      <Tab.Screen name="发布" component={Home} />
      <Tab.Screen name="消息" component={Home} />
      <Tab.Screen name="我的" component={Personal} />
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  tab_home: {
    width: pxToDp(750),
    height: pxToDp(156),
    ...padding(48, 0, 48, 0),
    ...flexRowSpb,
    alignItems: 'flex-end',
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
