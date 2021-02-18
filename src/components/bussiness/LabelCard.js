import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { pxToDp } from '../../utils/pxToDp';
import { fontStyle } from '../../utils/StyleUtils';
import PropTypes from 'prop-types';
{
  /*组件需要两个参数，有默认参数
   *colorsArray：背景颜色和字体颜色的搭配库，以数组的形式传入
   * typeText：色块内的文本
   */
}
export default class LabelCard extends React.Component {
  static propTypes = {
    colorsArray: PropTypes.array,
    typeText: PropTypes.string,
  };
  static defaultProps = {
    colorsArray: [
      { box_color: '#FFEFD8', font_color: '#FE9E0E' },
      { box_color: '#D8F1FF', font_color: '#0EA6FE' },
      { box_color: '#DAF8EC', font_color: '#17D688' },
    ],
    typeText: 'PS/AI',
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { typeText } = this.props;
    return <Text style={styles.labelCard_box}># {typeText}</Text>;
  }
}
//获取默认colorsArray
const colorsArray = LabelCard.defaultProps.colorsArray;
const colorIndex = Math.floor(Math.random() * colorsArray.length);
const styles = StyleSheet.create({
  labelCard_box: {
    // width: pxToDp(104),
    height: pxToDp(46),
    borderRadius: pxToDp(32),
    backgroundColor: colorsArray[colorIndex].box_color,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: pxToDp(1),
    color: colorsArray[colorIndex].font_color,
    borderColor: colorsArray[colorIndex].box_color,
    paddingLeft: pxToDp(30),
    paddingRight: pxToDp(30),
    ...fontStyle(26, 64, 64, 'normal', colorsArray[colorIndex].font_color),
    marginTop: pxToDp(20),
  },
});
