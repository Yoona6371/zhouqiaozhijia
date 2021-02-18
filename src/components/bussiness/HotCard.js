import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';
import { Card } from 'react-native-shadow-cards';
import { activeOpacity } from '../../constants/config';
import Icon from '../common/Icon';
import {
  flexColumnSpb,
  flexRowCenter,
  flexRowSpb,
  fontStyle,
  margin,
  padding,
} from '../../utils/StyleUtils';

const COLORARRAY = [
  '#E74C3C',
  '#6BB9F0',
  '#BF55EC',
  '#F84975',
  '#2ECC71',
  '#F9690E',
  '#F9BF3B',
  '#03C9A9',
  '#ff4960',
];

class HotCard extends Component {
  static propTypes = {
    notes: PropTypes.array,
    name: PropTypes.string,
    description: PropTypes.string,
    number: PropTypes.number,
    money: PropTypes.number,
  };

  static defaultProps = {
    notes: ['加急', '老手'],
    name: '阿布',
    description: '招聘插画师兼职可在家做完工结算',
    number: 936,
    money: 4300,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('跳转到该兼职');
  };

  render() {
    const { notes, name, description, number, money } = this.props;
    return (
      <View style={styles.HotCard__wrap}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={() => this.handleClick()}
        >
          <Card
            style={{
              width: pxToDp(12),
              height: pxToDp(12),
              borderRadius: pxToDp(6),
              backgroundColor: '#fd9d0f',
              position: 'absolute',
              top: pxToDp(105),
              left: pxToDp(-23),

              elevation: pxToDp(30),
              opacity: pxToDp(1.3),
            }}
          />
          <Card
            style={{
              width: pxToDp(2),
              height: pxToDp(150),
              backgroundColor: '#fd9d0f',
              position: 'absolute',
              top: pxToDp(35),
              left: pxToDp(-19),

              elevation: pxToDp(15),
              opacity: pxToDp(0.5),
            }}
          />
          <View style={styles.HotCard__top}>
            <View
              style={{
                width: pxToDp(155),
                ...flexRowSpb,
              }}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#f4677c', '#f82b4e', '#f70931']}
                style={{
                  width: pxToDp(70),
                  height: pxToDp(38),
                  marginTop: pxToDp(7),
                  borderTopLeftRadius: pxToDp(30),
                  borderTopRightRadius: pxToDp(30),
                  borderBottomRightRadius: pxToDp(30),
                  borderBottomLeftRadius: pxToDp(6),
                }}
              >
                <Text
                  style={{
                    ...fontStyle(25, 40, 38, 'normal', 'white', 'center'),
                  }}
                >
                  {notes[0]}
                </Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={['#FFD801', '#ffc005', '#eeb408']}
                style={{
                  width: pxToDp(70),
                  height: pxToDp(38),
                  marginTop: pxToDp(7),
                  borderTopLeftRadius: pxToDp(30),
                  borderTopRightRadius: pxToDp(30),
                  borderBottomRightRadius: pxToDp(30),
                  borderBottomLeftRadius: pxToDp(6),
                }}
              >
                <Text
                  style={{
                    ...fontStyle(25, 40, 38, 'normal', 'white', 'center'),
                  }}
                >
                  {notes[1]}
                </Text>
              </LinearGradient>
            </View>
            <View>
              <Text
                style={{
                  marginTop: pxToDp(25),
                  ...fontStyle(22, 50, 32, 'normal', 'grey', 'left'),
                }}
              >
                发布人：{name}
              </Text>
            </View>
          </View>
          <Text style={styles.HotCard__mid}>{description}</Text>
          <View style={styles.HotCard__bottom}>
            <View
              style={{
                ...flexRowSpb,
              }}
            >
              <Icon
                name={'hot2'}
                style={{
                  marginRight: pxToDp(10),
                  marginBottom: pxToDp(3),
                  fontSize: pxToDp(20),
                  color: '#fff',
                }}
              />
              <Text
                style={{
                  ...fontStyle(27, 28, 32, 'normal', COLORARRAY[8], 'left'),
                  ...padding(4, 0, 0, 0),
                }}
              >
                {number}
              </Text>
            </View>
            <View style={{ ...flexRowSpb }}>
              <Text
                style={{
                  ...fontStyle(20, 50, 32, 'normal', COLORARRAY[8], 'left'),
                  lineHeight: pxToDp(50),
                }}
              >
                ￥
              </Text>
              <Text
                style={{
                  ...fontStyle(40, 50, 32, 'normal', COLORARRAY[8], 'left'),
                  lineHeight: pxToDp(50),
                  marginRight: pxToDp(5),
                }}
              >
                {money}
              </Text>
              <Text
                style={{
                  ...fontStyle(20, 50, 32, 'normal', 'grey', 'left'),
                  lineHeight: pxToDp(50),
                }}
              >
                元/月
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HotCard;

const styles = StyleSheet.create({
  HotCard__wrap: {
    width: pxToDp(450),
    height: pxToDp(220),
    borderWidth: pxToDp(2),
    borderStyle: 'solid',
    borderColor: '#fbe077',
    borderRadius: pxToDp(10),
    position: 'relative',

    ...flexColumnSpb,
    ...margin(10, 10, 10, 10),
    ...padding(8, 0, 0, 0),
  },
  HotCard__top: {
    flex: 1,
    width: pxToDp(420),
    ...padding(0, 10, 0, 0),
    ...flexRowSpb,
  },
  HotCard__mid: {
    flex: 2,
    width: pxToDp(420),
    letterSpacing: pxToDp(2),
    ...padding(0, 10, 0, 3),
    ...fontStyle(30, 70, 47, '700', 'black', 'left'),
  },
  HotCard__bottom: {
    flex: 1,
    width: pxToDp(420),
    ...padding(0, 0, 0, 10),
    ...flexRowSpb,
  },
});
