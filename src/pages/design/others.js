import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { pxToDp } from '../../utils/pxToDp';
import { activeOpacity } from '../../constants/config';
import DynamicList from '../../components/bussiness/DynamicList';
import Avatar from '../../components/common/Avatar/index';
import Icon from '../../components/common/Icon/index';

import {
  flexColumnCenter,
  flexColumnSpb,
  flexRowCenter,
  flexRowSpb,
  fontStyle,
  margin,
  padding,
} from '../../utils/StyleUtils';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

class Others extends Component {
  constructor() {
    super();
    this.state = {
      changeBackground: 'ImageShow',
      avatar:
        'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
      description:
        '姓名：孙燕姿 别名：Stefanie Sun 职业：歌手 国籍：新加坡 生日：1978年7月23日 星座：狮子座 出生地：新加坡 代表作：《天黑黑》《开始懂了》 ',
      seeMyFollows: 'ImageShow',
      seeRecentReadBooks: 'ImageShow',
      personDetail: [
        {
          num: '6592',
          des: '关注我',
        },
        {
          num: '6592',
          des: '粉丝数',
        },
        {
          num: '6592',
          des: '成交订单',
        },
        {
          num: '6592',
          des: '积分',
        },
      ],
      followsAvatar: [
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
        {
          router: 'ImageShow',
          avatar:
            'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
        },
      ],
      recentReadBooks: [
        {
          router: 'ImageShow',
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
        },
        {
          router: 'ImageShow',
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
        },
        {
          router: 'ImageShow',
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
        },
        {
          router: 'ImageShow',
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
        },
      ],
      dynamicList: [
        {
          AvatarImage: {
            uri:
              'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
          },
          DynamicListImages: [
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
          ],
          DynamicUserName: '阿甘',
          DynamicText:
            '宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，',
          DynamicLabel: ['突发奇想', '宋老狗'],
          CollectionNum: 700,
          CommentNum: 665,
          FabulousNum: 664,
          timeGo: '一分钟',
          DynamicPhone: 'One Plus 7T',
          isFollowProps: false,
        },
        {
          AvatarImage: {
            uri:
              'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
          },
          DynamicListImages: [
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
            {
              uri:
                'https://pic4.zhimg.com/v2-8f450572606c2e017dade3e4533d10bb_r.jpg',
            },
          ],
          DynamicUserName: '阿甘',
          DynamicText:
            '宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，',
          DynamicLabel: ['突发奇想', '宋老狗'],
          CollectionNum: 700,
          CommentNum: 665,
          FabulousNum: 664,
          timeGo: '一分钟',
          DynamicPhone: 'One Plus 7T',
          isFollowProps: false,
        },
      ],
    };
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.others__wrap}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ImageBackground
            source={{
              uri:
                'http://wx2.sinaimg.cn/mw1024/cd966a9aly1gng53jyox8j20j908vtab.jpg',
            }}
            style={styles.others__mySpace}
          >
            {/* 挤开电量那一栏 */}
            <View style={{ height: pxToDp(60) }} />

            {/* 更换背景那一栏 */}
            <View
              style={{
                height: pxToDp(143),
                ...flexRowSpb,
                ...padding(30, 0, 30, 0),
              }}
            >
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(30, 143, 143, '700', 'white', 'left'),
                  }}
                >
                  &lt;
                </Text>
              </View>
              <View style={{ ...flexRowSpb }}>
                <Icon
                  name={'exit'}
                  style={{
                    marginRight: pxToDp(10),
                    fontSize: pxToDp(20),
                    color: 'white',
                  }}
                />
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(30, 143, 143, '700', 'white', 'left'),
                  }}
                  onPress={() =>
                    NavigationHelper.navigate(this.state.changeBackground)
                  }
                >
                  更换背景
                </Text>
              </View>
            </View>
            {/* 我的空间和头像那部分 */}
            <View
              style={{
                ...flexRowSpb,
                ...padding(48, 0, 40, 66),
              }}
            >
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(46, 157, 157, '700', 'white', 'left'),
                  }}
                >
                  我的空间
                </Text>
              </View>
              <Avatar
                image={{
                  uri: this.state.avatar,
                }}
                size={157}
              />
            </View>
            {/* 关注我、粉丝数、成交订单、积分那部分 */}
            <View
              style={{
                height: pxToDp(130),
                backgroundColor: 'rgba(255,255,255,0.15)',
                ...flexRowSpb,
                ...padding(67, 30, 67, 30),
              }}
            >
              {this.state.personDetail.map((item, index) => {
                return (
                  <View style={{ ...flexColumnCenter }} key={index}>
                    <View>
                      <Text
                        style={{
                          letterSpacing: pxToDp(2),
                          ...fontStyle(37, 56, 56, '700', 'white', 'center'),
                        }}
                      >
                        {item.num}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          ...fontStyle(28, 45, 45, '400', 'white', 'center'),
                        }}
                      >
                        {item.des}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </ImageBackground>
          <View style={{ ...margin(35, 0, 35, 0) }}>
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            {/* 个人简介模块 */}
            <View style={styles.others__personMessage}>
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(32, 110, 110, '700', 'black', 'left'),
                  }}
                >
                  个人简介
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(5),
                    fontSize: pxToDp(24),
                    lineHeight: pxToDp(43),
                    color: '#888888',
                  }}
                >
                  {this.state.description}
                </Text>
              </View>
            </View>
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            {/* 我的关注模块 */}
            <View>
              <View style={{ ...flexRowSpb }}>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(32, 122, 122, '700', 'black', 'left'),
                  }}
                >
                  我的关注
                </Text>
                <Text
                  onPress={() =>
                    NavigationHelper.navigate(this.state.seeMyFollows)
                  }
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(23, 45, 45, '700', '#888888', 'left'),
                  }}
                >
                  查看 &gt;
                </Text>
              </View>
              {/* 头像展示部分 */}
              <View style={{ ...flexRowSpb }}>
                {this.state.followsAvatar.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={activeOpacity}
                      onPress={() => NavigationHelper.navigate(item.router)}
                    >
                      <Avatar
                        image={{
                          uri: item.avatar,
                        }}
                        size={67}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            {/* 最近阅读模块 */}
            <View>
              {/* 最近阅读和查看部分 */}
              <View style={{ ...flexRowSpb }}>
                <Text
                  style={{
                    marginTop: pxToDp(19),
                    letterSpacing: pxToDp(2),
                    ...fontStyle(32, 97, 97, '700', 'black', 'left'),
                  }}
                >
                  最近阅读
                </Text>
                <Text
                  onPress={() =>
                    NavigationHelper.navigate(this.state.seeRecentReadBooks)
                  }
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(23, 45, 45, '700', '#888888', 'left'),
                  }}
                >
                  查看 &gt;
                </Text>
              </View>
              {/* 四本书籍部分 */}
              <View
                style={{
                  ...flexRowSpb,
                }}
              >
                {this.state.recentReadBooks.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={activeOpacity}
                      onPress={() => NavigationHelper.navigate(item.router)}
                    >
                      <Image
                        style={{
                          resizeMode: 'cover',
                          height: pxToDp(190),
                          width: pxToDp(150),
                          borderRadius: pxToDp(7),
                        }}
                        source={{
                          uri: item.bookImage,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            <View>
              <Text
                style={{
                  letterSpacing: pxToDp(2),
                  ...fontStyle(32, 116, 116, '700', 'black', 'left'),
                }}
              >
                动态
              </Text>
              {this.state.dynamicList.map((item, key) => {
                return <DynamicList />;
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Others;

const styles = StyleSheet.create({
  others__wrap: {
    width: screenWidth,
  },
  others__mySpace: {},
  others__personMessage: {},
  others__follows: {},
  others__read: {},
});
