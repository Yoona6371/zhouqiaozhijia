import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../common/Icon';
import { pxToDp } from '../../utils/pxToDp';
import Avatar from '../common/Avatar';
import { padding } from '../../utils/StyleUtils';

export default class CommentCard extends Component {
  constructor() {
    super();
    const date = new Date();
    this.state = {
      comment:
        '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
      likeNumber: 25,
    };
  }

  //获取时间
  getmyDate = () => {
    var date = new Date();
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    var hour = date.getHours().toString();
    var minute = date.getMinutes().toString();
    return year + '-' + month + '-' + day + ' ' + ' ' + hour + ':' + minute;
  };

  //下划线
  renderDotted = () => {
    const width = 150;
    const dottes = [];
    for (let i = 0; i < width; i++) {
      dottes.push(i);
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {dottes.map(() => {
          return <Text style={{ color: '#DDDDDD', fontSize: 15 }}>- </Text>;
        })}
      </View>
    );
  };

  //点赞
  like = () => {
    // this.setState((this.likeNumber: 26));
  };
  render() {
    const { comment, likeNumber } = this.state;
    return (
      <View
        style={{
          width: '100%',
          ...padding(26, 0, 26, 0),
          backgroundColor: '#FFFFFF',
        }}
      >
        {/*  头部 开始*/}
        <View
          style={{
            width: '100%',
            height: pxToDp(78),
            flexDirection: 'row',
          }}
        >
          {/*左侧开始*/}
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {/*头像*/}
            <Avatar
              image={require('../../asserts/images/commentCard_avator_1.png')}
              size={78}
              backgroundColor="#FFFFFF"
            />
            {/*昵称 日期*/}
            <View
              style={{ marginLeft: pxToDp(20), justifyContent: 'space-around' }}
            >
              <Text
                style={{
                  fontSize: pxToDp(30),
                  fontWeight: 'bold',
                  color: '#333333',
                }}
              >
                小桃子
              </Text>
              <Text
                style={{
                  color: '#999999',
                  fontSize: pxToDp(24),
                }}
              >
                {this.getmyDate()}
              </Text>
            </View>
          </View>
          {/*左侧结束*/}
          {/*右侧开始*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {/*点赞*/}
            <TouchableOpacity onPress={this.like()}>
              <Icon
                name="like2"
                style={{
                  color: '#ffc60b',
                  fontSize: pxToDp(28),
                  marginRight: pxToDp(15),
                }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: pxToDp(26), color: '#FE9E0E' }}>
              {likeNumber}
            </Text>
          </View>
          {/*右侧结束*/}
        </View>
        {/*  头部 结束*/}
        {/*底部 开始*/}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: pxToDp(34),
          }}
        >
          <View
            style={{
              width: '86%',
            }}
          >
            <Text
              style={{
                fontSize: pxToDp(26),
                color: '#666666',
                marginBottom: pxToDp(25),
              }}
            >
              <Text>{comment}</Text>
              <Text style={{ color: '#ffa62a' }}>回复</Text>
            </Text>
            {this.renderDotted()}
          </View>
        </View>
        {/*底部 结束*/}
      </View>
    );
  }
}
