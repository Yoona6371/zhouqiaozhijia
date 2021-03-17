import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TopTitle from '../../../components/common/TopTitle';
import Icon from '../../../components/common/Icon';
import { pxToDp } from '../../../utils/pxToDp';
import LinearGradient from 'react-native-linear-gradient';
import { padding } from '../../../utils/StyleUtils';
import Textarea from 'react-native-textarea';
import StarRating from 'react-native-star-rating';

class evaluateRelease extends Component {
  constructor() {
    super();
  }
  state = {
    goodShow: true,
    midShowL: false,
    badShow: false,
    starCount: 3.5,
  };
  goodEvaluate = () => {
    this.setState({ goodShow: true });
    this.setState({ midShow: false });
    this.setState({ badShow: false });
  };
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
    const { goodShow, midShow, badShow } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/*TopTitle 开始*/}
        <TopTitle title="评价" showBtn={false} />
        {/*TopTitle 结束*/}
        {/*评价按钮 开始*/}
        <View style={styles.btn__box}>
          {/*按钮 左*/}

          <TouchableOpacity>
            <LinearGradient
              colors={['#FE9E0E', '#FD7609']}
              style={styles.btn__onpress}
            >
              <Icon
                name="mid_evaluate"
                style={{
                  color: '#ffffff',
                  fontSize: pxToDp(26),
                  marginRight: pxToDp(12),
                }}
              />
              <Text style={{ fontSize: pxToDp(24), color: '#ffffff' }}>
                好评
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/*按钮中*/}
          <TouchableOpacity
            // onpress={this.goodEvaluate()}
            style={styles.btn__origin}
          >
            <Icon
              name="mid_evaluate"
              style={{
                color: '#c5c2bf',
                fontSize: pxToDp(26),
                marginRight: pxToDp(12),
              }}
            />
            <Text
              style={{
                fontSize: pxToDp(24),
                color: '#c5c2bf',
              }}
            >
              中评
            </Text>
          </TouchableOpacity>
          {/*按钮右*/}
          <TouchableOpacity
            // onpress={this.goodEvaluate()}
            style={styles.btn__origin}
          >
            <Icon
              name="mid_evaluate"
              style={{
                color: '#c5c2bf',
                fontSize: pxToDp(26),
                marginRight: pxToDp(12),
              }}
            />
            <Text
              style={{
                fontSize: pxToDp(24),
                color: '#c5c2bf',
              }}
            >
              差评
            </Text>
          </TouchableOpacity>
        </View>
        {/*评价按钮 结束*/}
        {/*编辑评价 开始*/}
        <View style={styles.editor__box}>
          <Text
            style={{
              fontSize: pxToDp(28),
              color: '#1C223A',
              fontWeight: 'bold',
            }}
          >
            编辑评价
          </Text>
          <Textarea
            containerStyle={styles.textareaContainer}
            style={styles.textarea}
            onChangeText={this.onChange}
            defaultValue={this.state.text}
            maxLength={300}
            placeholder={'请输入详细信息'}
            placeholderTextColor={'#999999'}
            underlineColorAndroid={'transparent'}
          />
          {/*图片文字 开始*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginTop: pxToDp(36),
            }}
          >
            <Text
              style={{
                color: '#1C223A',
                fontWeight: 'bold',
                fontSize: pxToDp(28),
              }}
            >
              图片
            </Text>
            <Text style={{ color: '#808189', fontSize: pxToDp(25) }}>
              (非必须)
            </Text>
          </View>
          {/*图片文字 结束*/}
          {/*  图片 开始*/}
          <View
            style={{
              marginTop: pxToDp(15),
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <Image
              source={require('../../../asserts/images/evaluate_image.png')}
              style={{
                width: pxToDp(158),
                height: pxToDp(131),
                borderRadius: pxToDp(6),
              }}
            />
            <View style={styles.camera__box}>
              <Icon name="camera" style={{ color: '#b9b6b1' }} />
            </View>
          </View>
          {/*  图片 结束*/}
        </View>
        {/*编辑评价 结束*/}
        {/* 星星 开始*/}
        <View style={styles.star__box}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: pxToDp(30),
            }}
          >
            <Text style={styles.star__text}>物流评分</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#fe9e0e'}
              starSize={18}
              buttonStyle={{ marginLeft: pxToDp(12) }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: pxToDp(30),
            }}
          >
            <Text style={styles.star__text}>设计评分</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#fe9e0e'}
              starSize={18}
              buttonStyle={{ marginLeft: pxToDp(12) }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: pxToDp(30),
            }}
          >
            <Text style={styles.star__text}>服务态度</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#fe9e0e'}
              starSize={18}
              buttonStyle={{ marginLeft: pxToDp(12) }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginBottom: pxToDp(30),
            }}
          >
            <Text style={styles.star__text}>工作速度</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#fe9e0e'}
              starSize={18}
              buttonStyle={{ marginLeft: pxToDp(12) }}
            />
          </View>
        </View>
        {/* 星星 结束*/}
        <TouchableOpacity style={styles.touchableOpacity}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: pxToDp(27),
              color: '#FFFFFF',
            }}
          >
            确定
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default evaluateRelease;
const styles = StyleSheet.create({
  btn__box: {
    width: '100%',
    height: pxToDp(80),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn__origin: {
    flexDirection: 'row',
    width: pxToDp(140),
    height: pxToDp(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn__onpress: {
    flexDirection: 'row',
    width: pxToDp(140),
    height: pxToDp(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: pxToDp(30),
  },
  textarea: { fontSize: pxToDp(24), color: 'black' },
  textareaContainer: {
    backgroundColor: '#f8f8f8',
    width: pxToDp(630),
    height: pxToDp(260),
    ...padding(30, 0, 30, 0),
    marginTop: pxToDp(29),
  },
  camera__box: {
    width: pxToDp(158),
    height: pxToDp(131),
    borderRadius: pxToDp(6),
    backgroundColor: '#f0eeeb',
    marginLeft: pxToDp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  editor__box: {
    width: pxToDp(690),
    height: pxToDp(602),
    backgroundColor: '#ffffff',
    borderRadius: pxToDp(20),
    marginTop: pxToDp(20),
    ...padding(30, 36, 30, 27),
  },
  star__box: {
    width: pxToDp(690),
    height: pxToDp(306),
    backgroundColor: '#ffffff',
    marginTop: pxToDp(20),
    ...padding(30, 40, 30, 41),
  },
  star__text: {
    fontSize: pxToDp(28),
    color: '#1C223A',
    fontWeight: 'bold',
    marginRight: pxToDp(30),
  },
  touchableOpacity: {
    width: pxToDp(690),
    height: pxToDp(88),
    borderRadius: pxToDp(44),
    backgroundColor: '#fe9e0e',
    justifyContent: 'center',
    marginTop: pxToDp(100),
  },
});
