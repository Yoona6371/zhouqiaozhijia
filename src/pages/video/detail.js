import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Vid from '../../components/bussiness/Video';
import TopTitle from '../../components/common/TopTitle';
import TopTabNavigator from '../../components/common/TopTabNavigator';
import { deviceWidthDp, pxToDp } from '../../utils/pxToDp';
import Introduction from '../../components/bussiness/VideoDetail/Introduction';
import { fontStyle, margin } from '../../utils/StyleUtils';
import Svg from 'react-native-svg-uri';
import { mycollectoins, mycollections_svg } from '../../constants/svg';
import Icon from '../../components/common/Icon';
import LinearGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation-locker';

class Index extends Component {
  constructor(props) {
    super();
    this.state = {
      pages: [
        { key: '简介', title: '简介', component: Introduction },
        { key: '目录', title: '目录', component: Introduction },
        { key: '评价', title: '评价', component: Introduction },
      ],
      isCollected: false,
      price: '0',
      initial: Orientation.getInitialOrientation() === 'PORTRAIT',
    };
  }

  componentDidMount() {
    this.setState({ price: '4300' });
  }

  onCollect = () => {
    this.setState({ isCollected: !this.state.isCollected });
  };

  onConsult = () => {
    NavigationHelper.navigate('Tab');
  };

  onBuy = () => {
    NavigationHelper.navigate('Tab');
  };

  render() {
    const { isCollected, price } = this.state;
    let isCollected_text = '';
    isCollected ? (isCollected_text = '已收藏') : (isCollected_text = '收藏');
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          stickyHeaderIndices={[0]}
          style={{ backgroundColor: '#fff' }}
          scrollEnabled={this.state.initial}
        >
          {this.state.initial ? (
            <TopTitle
              bgColor="#fff"
              color="#000"
              returnBack={() => {
                NavigationHelper.goBack();
              }}
              title="视频详情"
              showBtn={false}
            />
          ) : (
            <></>
          )}
          <Vid
            uri={'http://lilq.cn/music/te1.mp3'}
            title={'Vue3从入门到实战进阶式掌握完整知识体系'}
            title_second={'实战课进阶.27小时. 591人学.9.95分'}
            price={`￥${price}`}
            onScreenChange={() => {
              this.setState({ initial: !this.state.initial });
            }}
          />
          <TopTabNavigator
            ifScrollEnabled={false}
            itemWidth={deviceWidthDp / 3}
            type={2}
            routes={this.state.pages}
          />
        </ScrollView>
        {this.state.initial ? (
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              backgroundColor: '#fff',
              borderTopWidth: pxToDp(1),
              borderColor: '#ddd',
              color: '#888',
            }}
          >
            <TouchableOpacity
              onPress={this.onCollect}
              style={{
                flex: 2,
                ...margin(0, 20, 0, 20),
              }}
            >
              {isCollected ? (
                <Svg
                  svgXmlData={mycollections_svg}
                  width={pxToDp(25)}
                  heiht={pxToDp(25)}
                  style={{
                    alignSelf: 'center',
                    width: pxToDp(25),
                    height: pxToDp(25),
                    marginTop: pxToDp(-25),
                  }}
                />
              ) : (
                <Svg
                  svgXmlData={mycollectoins}
                  width={pxToDp(25)}
                  heiht={pxToDp(25)}
                  style={{
                    alignSelf: 'center',
                    width: pxToDp(25),
                    height: pxToDp(25),
                    marginTop: pxToDp(-25),
                  }}
                />
              )}
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: pxToDp(30),
                  ...fontStyle(22, 24, 24, '500', '#a1a3a5'),
                }}
              >
                {isCollected_text}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 3,
                alignSelf: 'center',
                backgroundColor: '#43b0f5',
                height: pxToDp(100),
              }}
              onPress={this.onConsult}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  ...margin(0, 37, 0, 37),
                }}
              >
                <Icon
                  name={'consult'}
                  style={{
                    fontSize: pxToDp(22),
                    height: pxToDp(22),
                    color: '#fff',
                    marginRight: pxToDp(20),
                  }}
                />
                <Text style={{ ...fontStyle(28, 30, 30, 'bold', '#fff') }}>
                  咨询
                </Text>
              </View>
            </TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#fe9e0e', '#fd7609']}
              style={{ flex: 3 }}
            >
              <TouchableOpacity onPress={this.onBuy}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: pxToDp(17),
                  }}
                >
                  <Text
                    style={{
                      ...fontStyle(22, 24, 26, '500', '#fff'),
                      opacity: 0.87,
                    }}
                  >
                    价格：
                  </Text>
                  <Text style={{ ...fontStyle(24, 24, 26, 'bold', '#ffe5b3') }}>
                    ￥{price}
                  </Text>
                </View>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: pxToDp(21),
                    ...fontStyle(28, 30, 30, 'bold', '#fff'),
                  }}
                >
                  立即购买
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        ) : (
          <></>
        )}
      </View>
    );
  }
}

export default Index;
