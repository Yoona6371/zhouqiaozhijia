import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';

import {
  flexColumnSpb,
  flexRowCenter,
  flexRowSpb,
  fontStyle,
  margin,
  padding,
} from '../../utils/StyleUtils';

import { activeOpacity } from '../../constants/config';

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

class BookCard extends Component {
  static propTypes = {
    bookImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    title: PropTypes.string,
    chapterNum: PropTypes.number,
    peopleNum: PropTypes.number,
  };

  static defaultProps = {
    title: '用设计解决问题',
    chapterNum: 19,
    peopleNum: 999999,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log('跳转到该书籍');
  };

  bookCard__peopleNum = () => {
    if (this.props.peopleNum < 10000) return this.props.peopleNum;
    else return Math.floor(this.props.peopleNum / 10000).toString() + 'W+';
  };

  render() {
    const { bookImage, title, description, chapterNum, peopleNum } = this.props;
    return (
      <View style={{ ...padding(31, 21, 31, 21), backgroundColor:'white', ...flexRowSpb }}>
        <Image
          style={{
            resizeMode: 'cover',
            height: pxToDp(175),
            width: pxToDp(134),
          }}
          source={bookImage}
        />
        <View
          style={{
            ...flexColumnSpb,
            height: pxToDp(175),
            marginLeft: pxToDp(25),
          }}
        >
          <Text
            style={{
              letterSpacing: pxToDp(5),
              width: pxToDp(432),
              ...fontStyle(29, 50, 50, '700', 'black', 'left'),
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              width: pxToDp(432),
              ...fontStyle(23, 30, 32, 'normal', '#acb0b3', 'left'),
            }}
          >
            {chapterNum}个章节 | {this.bookCard__peopleNum()}人已学习该书籍
          </Text>
        </View>
        <View style={{ height: pxToDp(175) }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={['#FFD801', '#ffc005', '#e6ad05']}
            style={{
              width: pxToDp(97),
              height: pxToDp(56),
              borderBottomLeftRadius: pxToDp(30),
              borderTopRightRadius: pxToDp(30),
              borderBottomRightRadius: pxToDp(30),
              borderTopLeftRadius: pxToDp(10),
            }}
          >
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => this.handleClick()}
              style={{ ...flexRowCenter }}
            >
              <Text
                style={{
                  letterSpacing: pxToDp(3),
                  lineHeight: pxToDp(56),
                  color: 'white',
                  fontSize: pxToDp(25),
                }}
              >
                详情
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default BookCard;
