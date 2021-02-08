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
        '啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦几千年的漫漫征程，几百代的风云变幻，曾走过绿茵花溪，也踏过枯骨万里。一个世纪的近代史，刻满了血与泪的印记；七十年的上下求索，在挫折中迎来新生。只要民族的意志永远向前，无论历经多少艰难苦痛，我们的祖国依旧能披荆斩棘，砥砺前行！',
      moreContent: 1,
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
    };
  }

  // 个人简介展开和收起
  openContent = () => {
    this.setState({ moreContent: 0 });
  };

  closeContent = () => {
    this.setState({ moreContent: 1 });
  };

  showContent = () => {
    if (this.state.moreContent === 1) {
      return (
        <View>
          <Text
            numberOfLines={4}
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
            }}
          >
            {this.state.description}
          </Text>
          <Text
            onPress={() => this.openContent()}
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
              ...margin(550, 5, 0, 0),
            }}
          >
            【更多】
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
            }}
          >
            {this.state.description}
          </Text>
          <Text
            onPress={() => this.closeContent()}
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
              ...margin(550, 5, 0, 0),
            }}
          >
            【收起】
          </Text>
        </View>
      );
    }
  };

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
            <View
              style={{
                width: '100%',
                height: pxToDp(60),
                //backgroundColor: 'purple',
              }}
            />
            {/* 更换背景那一栏 */}
            <View
              style={{
                width: '100%',
                height: pxToDp(90),
                //backgroundColor: 'red',
                ...flexRowSpb,
                ...padding(30, 0, 20, 0),
              }}
            >
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(35, 70, 70, '700', 'white', 'left'),
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
                    ...fontStyle(25, 70, 70, '700', 'white', 'left'),
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
                width: '100%',
                flex: 1.5,
                //backgroundColor: 'skyblue',
                ...flexRowSpb,
                ...padding(30, 0, 30, 0),
              }}
            >
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(33, 70, 70, '700', 'white', 'left'),
                  }}
                >
                  我的空间
                </Text>
              </View>
              <Avatar
                image={{
                  uri: this.state.avatar,
                }}
                size={150}
              />
            </View>
            {/* 关注我、粉丝数、成交订单、积分那部分 */}
            <View
              style={{
                width: '100%',
                flex: 0.8,
                backgroundColor: 'rgba(255,255,255,0.15)',
                ...flexRowSpb,
                ...padding(60, 0, 60, 0),
              }}
            >
              {this.state.personDetail.map((item, key) => {
                return (
                  <View style={{ ...flexColumnCenter }}>
                    <View>
                      <Text
                        style={{
                          letterSpacing: pxToDp(2),
                          ...fontStyle(35, 50, 50, '700', 'white', 'center'),
                        }}
                      >
                        {item.num}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          ...fontStyle(23, 50, 50, '400', 'white', 'center'),
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
          <View
            style={{
              // eslint-disable-next-line no-eval
              width: eval(screenWidth - pxToDp(50)),
              flex: 3.37,
              ...margin(25, 0, 25, 0),
            }}
          >
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            {/* 个人简介模块 */}
            <View
              style={[styles.others__personMessage, styles.beautifulBorder]}
            >
              <View>
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(28, 75, 75, '700', 'black', 'left'),
                  }}
                >
                  个人简介
                </Text>
              </View>
              <View
                style={{
                  borderWidth: pxToDp(1),
                  borderStyle: 'solid',
                  borderColor: 'white',
                  borderRadius: pxToDp(10),
                  shadowColor: '#000',
                  shadowOffset: { width: 4, height: 4 },
                  shadowOpacity: 0.8,
                  shadowRadius: 6,
                  elevation: 0.5,
                  ...padding(5, 0, 5, 5),
                }}
              >
                {this.showContent()}
              </View>
            </View>
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            {/* 我的关注模块 */}
            <View style={styles.others__follows}>
              <View
                style={{
                  flex: 0.9,
                  ...flexRowSpb,
                  // backgroundColor: 'yellow'
                }}
              >
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(28, 45, 45, '700', 'black', 'left'),
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
                    ...fontStyle(25, 45, 45, '700', 'grey', 'left'),
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
                        size={70}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
            {/* —————————————————————————————————————————————————————————————————————————————————— */}
            {/* 最近阅读模块 */}
            <View style={styles.others__read}>
              {/* 最近阅读和查看部分 */}
              <View
                style={{
                  flex: 0.75,
                  ...flexRowSpb,
                  //backgroundColor: 'yellow'
                }}
              >
                <Text
                  style={{
                    letterSpacing: pxToDp(2),
                    ...fontStyle(28, 45, 45, '700', 'black', 'left'),
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
                    ...fontStyle(25, 45, 45, '700', 'grey', 'left'),
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
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Others;

const styles = StyleSheet.create({
  others__wrap: {
    height: screenHeight,
    width: screenWidth,
    ...flexColumnCenter,
  },
  others__mySpace: {
    width: '100%',
    flex: 2.4,
    ...flexColumnSpb,
  },
  others__personMessage: {
    width: '100%',
  },
  others__follows: {
    width: '100%',
    flex: 0.7,
  },
  others__read: {
    width: '100%',
    flex: 1.3,
  },

  beautifulBorder: {
    borderWidth: pxToDp(1),
    borderStyle: 'dotted',
    borderColor: 'white',
    borderRadius: pxToDp(10),

    //盒子阴影
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 0.5,
  },
});
