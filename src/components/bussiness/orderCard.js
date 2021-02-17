import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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

/**
 * time: 最上面的下单时间（按照这种形式来写 2021-02-02 17:36:2）
 * courseImage：课程图片
 * courseName：课程名字
 * courseMoney：课程的价钱
 * numCourse：共X件商品
 * realMoney：实际支付
 * transportMoney：运费
 */
class OrderCard extends Component {
  static propTypes = {
    time: PropTypes.string,
    courseImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    courseNames: PropTypes.string,
    courseMoney: PropTypes.number,
    numCourse: PropTypes.number,
    realMoney: PropTypes.number,
    transportMoney: PropTypes.number,
  };

  static defaultProps = {
    time: '2021-02-02 17:36:23',
    courseMoney: 2600,
    courseNames: 'logo设计品牌思维实战，UI进阶班，logo设计品牌思维实战课程',
    numCourse: 1,
    realMoney: 2600,
    transportMoney: 0,
  };

  constructor(props) {
    super(props);
  }

  countWords = () => {
    let title = '';
    const originalTitle = this.props.courseNames;
    title =
      originalTitle.length > 28
        ? originalTitle.slice(0, 29) + '...'
        : originalTitle;
    return title;
  };

  render() {
    const {
      time,
      courseMoney,
      courseNames,
      numCourse,
      realMoney,
      transportMoney,
      courseImage,
    } = this.props;
    return (
      <View style={styles.orderCard__wrap}>
        {/* 下单时间和待付款那一栏 */}
        <View style={styles.orderCard__time}>
          <View>
            <Text
              style={{
                ...fontStyle(25, 84, 84, '400', '#999999', 'left'),
              }}
            >
              下单时间：{time}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...fontStyle(25, 84, 84, '400', '#ff4949', 'left'),
              }}
            >
              待付款
            </Text>
          </View>
        </View>
        {/* 图片那一栏 */}
        <View style={styles.orderCard__goods}>
          <View>
            <Image
              style={{
                resizeMode: 'cover',
                height: pxToDp(162),
                width: pxToDp(162),
                borderRadius: pxToDp(10),
              }}
              source={courseImage}
            />
          </View>
          <View>
            <View style={{ width: pxToDp(435) }}>
              <Text
                style={{
                  ...fontStyle(28, 100, 50, '700', 'black', 'left'),
                  lineHeight: pxToDp(50),
                }}
              >
                {this.countWords()}
                {/* {courseNames} */}
              </Text>
            </View>
            <View
              style={{
                width: pxToDp(89),
                marginTop: pxToDp(15),
                ...flexRowSpb,
              }}
            >
              <Text
                style={{
                  ...fontStyle(20, 35, 50, '700', '#ff2a46', 'left'),
                  lineHeight: pxToDp(50),
                }}
              >
                ￥
              </Text>
              <Text
                style={{
                  ...fontStyle(34, 45, 45, '700', '#ff2a46', 'left'),
                  lineHeight: pxToDp(50),
                  marginRight: pxToDp(5),
                }}
              >
                {courseMoney}
              </Text>
            </View>
          </View>
        </View>
        {/* 共一件商品那一栏 */}
        <View style={styles.orderCard__pay}>
          <View>
            <Text
              style={{
                ...fontStyle(25, 73, 73, '400', '#999999', 'left'),
              }}
            >
              共{numCourse}件商品
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...fontStyle(25, 73, 73, '700', 'black', 'left'),
              }}
            >
              实际支付￥{realMoney} (含运费{transportMoney})
            </Text>
          </View>
        </View>
        {/* 立即付款那一栏 */}
        <View style={styles.orderCard__button}>
          <TouchableOpacity
            activeOpacity={activeOpacity}
            onPress={() => NavigationHelper.navigate('ImageShow')}
            style={{
              width: pxToDp(150),
              height: pxToDp(60),
              backgroundColor:'#f1a23c',
              borderBottomLeftRadius: pxToDp(30),
              borderTopRightRadius: pxToDp(30),
              borderBottomRightRadius: pxToDp(30),
              borderTopLeftRadius: pxToDp(30),
              marginLeft: pxToDp(478),
            }}
          >
            <Text
              style={{
                lineHeight: pxToDp(55),
                width: pxToDp(150),
                textAlign: 'center',
                color: 'white',
                fontSize: pxToDp(26),
              }}
            >
              立即付款
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default OrderCard;

const styles = StyleSheet.create({
  orderCard__wrap: {
    backgroundColor: '#ffffff',
    borderRadius: pxToDp(5),
    width: pxToDp(695),
    ...margin(28, 20, 28, 0),
    ...padding(34, 0, 34, 0),
  },
  orderCard__time: {
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#dddddd',
    ...flexRowSpb,
  },
  orderCard__goods: {
    ...padding(0, 24, 0, 24),
    ...flexRowSpb,
  },
  orderCard__pay: {
    ...flexRowSpb,
  },
  orderCard__button: {
    ...margin(0, 25, 0, 25),
  },
});
