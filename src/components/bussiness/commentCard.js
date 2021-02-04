import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from '../common/Icon';
import { pxToDp } from '../../utils/pxToDp';
import Avatar from '../common/Avatar';
import { padding } from '../../utils/StyleUtils';
import PropTypes from 'prop-types';

export default class CommentCard extends Component {
  static propTypes = {
    type: PropTypes.string,
    comment: PropTypes.string,
    likeNumber: PropTypes.number,
    date: PropTypes.string,
  };
  static defaultProps = {
    comment:
      '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
    likeNumber: 25,
    type: 'father', //默认type：father
    date: '2020-02-03 12:53',
  };
  constructor() {
    super();
    this.state = {
      likeNumber: 25,
    };
  }
  /*
   * type:child -> 子组件 嵌套
   * type:father(默认) ->仅有一个评论
   */
  componentDidMount() {}

  //获取时间
  // getmyDate = () => {
  //   var date = new Date();
  //   var year = date.getFullYear().toString();
  //   var month = (date.getMonth() + 1).toString();
  //   var day = date.getDate().toString();
  //   var hour = date.getHours().toString();
  //   var minute = date.getMinutes().toString();
  //   return year + '-' + month + '-' + day + ' ' + ' ' + hour + ':' + minute;
  // };

  //下划线
  renderDotted = (size) => {
    const width = 150;
    const dottes = [];
    for (let i = 0; i < width; i++) {
      dottes.push(i);
    }
    return (
      <View style={styles.dotted__box}>
        {dottes.map(() => {
          return <Text style={{ color: '#DDDDDD', fontSize: size }}>- </Text>;
        })}
      </View>
    );
  };

  //点赞
  like = () => {
    // this.setState((this.likeNumber: 26));
  };
  render() {
    const { comment, likeNumber, type, date } = this.props;
    return (
      <View>
        {type === 'father' ? (
          //father开始
          <View style={styles.card__box__father}>
            {/*  头部 开始*/}
            {/*header*/}
            <View style={styles.header}>
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
                  style={{
                    marginLeft: pxToDp(20),
                    justifyContent: 'space-around',
                  }}
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
                    {date}
                  </Text>
                </View>
              </View>
              {/*左侧结束*/}
              {/*右侧开始*/}
              <View style={styles.right__box}>
                {/*点赞*/}
                <TouchableOpacity onPress={this.like()}>
                  <Icon name="like2" style={styles.Icon_like} />
                </TouchableOpacity>
                <Text style={{ fontSize: pxToDp(26), color: '#FE9E0E' }}>
                  {likeNumber}
                </Text>
              </View>
              {/*右侧结束*/}
            </View>
            {/*  头部 结束*/}
            {/*底部 开始*/}
            <View style={styles.bottom__box__father}>
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
                {this.renderDotted(15)}
                {this.props.children}
              </View>
            </View>
            {/*底部 结束*/}
          </View>
        ) : (
          //child 开始
          <View style={styles.card__box__child}>
            {/*  头部 开始*/}
            {/*header*/}
            <View style={styles.header}>
              {/*左侧开始*/}
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {/*头像*/}
                <Avatar
                  image={require('../../asserts/images/commentCard_avator_2.png')}
                  size={52}
                  backgroundColor="#FFFFFF"
                />
                {/*昵称 日期*/}
                <View
                  style={{
                    marginLeft: pxToDp(20),
                    justifyContent: 'space-around',
                  }}
                >
                  <Text
                    style={{
                      fontSize: pxToDp(24),
                      fontWeight: 'bold',
                      color: '#333333',
                    }}
                  >
                    小桃子
                  </Text>
                  <Text
                    style={{
                      color: '#999999',
                      fontSize: pxToDp(20),
                    }}
                  >
                    {date}
                  </Text>
                </View>
              </View>
              {/*左侧结束*/}
            </View>
            {/*  头部 结束*/}
            {/*底部 开始*/}
            <View style={styles.bottom__box__child}>
              <View
                style={{
                  width: '100%',
                }}
              >
                <Text
                  style={{
                    fontSize: pxToDp(23),
                    color: '#666666',
                    marginBottom: pxToDp(5),
                  }}
                >
                  <Text>{comment}</Text>
                  <Text style={{ color: '#ffa62a' }}>回复</Text>
                </Text>
                {this.renderDotted(10)}
                {this.props.children}
              </View>
            </View>
            {/*底部 结束*/}
          </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card__box__father: {
    width: '100%',
    ...padding(26, 20, 26, 0),
    backgroundColor: '#ffffff',
  },
  card__box__child: {
    width: '100%',
    ...padding(24, 20, 34, 0),
    backgroundColor: '#f8f8f8',
  },
  header: {
    width: '100%',
    height: pxToDp(78),
    flexDirection: 'row',
  },
  right__box: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Icon_like: {
    color: '#ffc60b',
    fontSize: pxToDp(28),
    marginRight: pxToDp(15),
  },
  bottom__box__father: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: pxToDp(34),
  },
  bottom__box__child: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: pxToDp(15),
  },
  dotted__box: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
