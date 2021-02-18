import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';

import {
  flexColumnCenter,
  flexColumnSpb,
  flexRowCenter,
  flexRowSpb,
  fontStyle,
  margin,
  padding,
} from '../../utils/StyleUtils';

class TradeCard extends Component {
  static propTypes = {
    time: PropTypes.string,
    money: PropTypes.number,
  };

  static defaultProps = {
    time: '2020-02-02 14:32',
    money: 99,
  };

  constructor(props) {
    super(props);
  }

  bookCard__peopleNum = () => {
    if (this.props.peopleNum < 10000) {
      return this.props.peopleNum;
    } else {
      return Math.floor(this.props.peopleNum / 10000).toString() + 'W+';
    }
  };

  render() {
    const { time, money } = this.props;
    return (
      <TouchableOpacity
        onPress={() => NavigationHelper.navigate('Money')}
        style={{
          height: pxToDp(143),
          width: pxToDp(690),
          backgroundColor: 'white',
          marginTop: pxToDp(19),
          marginLeft: pxToDp(30),
          ...padding(28, 0, 30, 0),
          ...flexRowSpb,
          position:'relative',
        }}
      >
        <Image
          style={{
            resizeMode: 'cover',
            height: pxToDp(73),
            width: pxToDp(73),
          }}
          source={{
            uri:
              'https://wx1.sinaimg.cn/mw1024/cd966a9aly1gnr1emu77jj2021021q2p.jpg',
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            width: pxToDp(440),
            paddingLeft: pxToDp(-290),
            position: 'absolute',
            left: pxToDp(129),
          }}
        >
          <Text
            style={{
              ...fontStyle(28, 50, 50, '400', 'black', 'left'),
            }}
          >
            收入
          </Text>
          <Text
            style={{
              ...fontStyle(19, 30, 32, 'normal', '#acb0b3', 'left'),
            }}
          >
            {time}
          </Text>
        </View>
        {/* 钱开始 */}
        <View style={{ ...flexRowSpb }}>
          <Text
            style={{
              ...fontStyle(27, 50, 32, 'normal', 'black', 'left'),
              lineHeight: pxToDp(50),
            }}
          >
            ￥
          </Text>
          <Text
            style={{
              ...fontStyle(27, 50, 32, 'normal', 'black', 'left'),
              lineHeight: pxToDp(50),
              marginRight: pxToDp(5),
            }}
          >
            {money}
          </Text>
        </View>
        {/* 钱结束 */}
      </TouchableOpacity>
    );
  }
}

export default TradeCard;
