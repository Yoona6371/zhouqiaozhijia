import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';
import { activeOpacity } from '../../constants/config';

import {
  flexColumnCenter,
  flexRowSpb,
  fontStyle,
  margin,
} from '../../utils/StyleUtils';

/**
 * buttonColor可以选择的值：
 * "#fe7600" 橘黄色
 * "#5816fe" 蓝紫色
 * "#0067fe" 天蓝色
 * "#00b858" 绿色
 */

class ModuleCard extends Component {
  static propTypes = {
    image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    name: PropTypes.string,
    router: PropTypes.string,
    buttonColor: PropTypes.string,
  };

  static defaultProps = {
    name: '舟桥学院',
    buttonColor: '#5816fe',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { image, name, router, buttonColor } = this.props;
    return (
      <ImageBackground source={image} style={styles.moduleCard__wrap}>
        {/* 舟桥学院和Go部分 */}
        {/* 舟桥学院 */}
        <Text
          style={{
            ...fontStyle(32, 64, 64, 'normal', 'white', 'center'),
          }}
        >
          {name}
        </Text>

        {/* GO部分 */}
        <TouchableOpacity
          style={{
            backgroundColor: buttonColor,
            width: pxToDp(110),
            height: pxToDp(53),
            borderRadius: pxToDp(25),
            ...margin(0, 20, 0, 24),
            ...flexColumnCenter,
          }}
          activeOpacity={activeOpacity}
          onPress={() => NavigationHelper.navigate(router)}
        >
          <Text
            style={{
              lineHeight: pxToDp(47),
              color: 'white',
              fontSize: pxToDp(30),
              textAlign: 'center',
            }}
          >
            GO
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

class Real__ModuleCard extends Component {
  render() {
    return (
      <View
        style={{
          ...flexRowSpb,
        }}
      >
        <ScrollView horizontal={true}>
          <ModuleCard
            image={require('../../asserts/images/module4_bg.png')}
            name="舟桥学院"
            buttonColor="#fe7600"
          />
          <ModuleCard
            image={require('../../asserts/images/module1_bg.png')}
            name="实训"
            buttonColor="#5816fe"
          />
          <ModuleCard
            image={require('../../asserts/images/module2_bg.png')}
            name="实训"
            buttonColor="#0067fe"
          />
          <ModuleCard
            image={require('../../asserts/images/module3_bg.png')}
            name="工艺设计"
            buttonColor="#00b858"
          />
        </ScrollView>
      </View>
    );
  }
}

export default Real__ModuleCard;

const styles = StyleSheet.create({
  moduleCard__wrap: {
    ...flexColumnCenter,
    justifyContent: 'flex-end',
    width: pxToDp(180),
    height: pxToDp(256),
    borderRadius: pxToDp(10),
    overflow: 'hidden',
    marginLeft: pxToDp(28),
  },
});
