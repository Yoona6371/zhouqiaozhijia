import React, { Component } from 'react';
import { pxToDp } from '../../utils/pxToDp';
import { ScrollView } from 'react-native-gesture-handler';
import TradeCard from '../../components/bussiness/TradeCard';
import Icon from '../../components/common/Icon';
import { NavigationContext } from '@react-navigation/native';

import {
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  flexColumnCenter,
  flexColumnSpb,
  flexRowCenter,
  flexRowSpb,
  fontStyle,
  margin,
  padding,
} from '../../utils/StyleUtils';

class MyWallet extends Component {
  static contextType = NavigationContext;
  constructor() {
    super();
    this.state = {
      remainMoney: 1035.0,
      localMoney: 1021,
      // 表示选择下面数组里0或1
      giveClick: 0,
      // giveList[0]表示点击已发放按钮
      // giveList[1]表示点击未发放按钮
      giveList: [
        [
          { time: '2020-02-02 14:32', money: 999999999 },
          { time: '2020-02-02 14:32', money: 97779 },
          { time: '2020-02-02 14:32', money: 929 },
          { time: '2020-02-02 14:32', money: 99 },
          { time: '2020-02-02 14:32', money: 919 },
          { time: '2020-02-02 14:32', money: 9339 },
          { time: '2020-02-02 14:32', money: 99 },
          { time: '2020-02-02 14:32', money: 99 },
        ],
        [
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
          { time: '2020-02-02 14:32', money: 1199 },
        ],
      ],
    };
  }

  onchange = (index) => {
    if (this.state.giveClick !== index) {
      this.setState({ giveClick: index });
    }
  };
  /**
   * 点击了已发放
   */
  push = () => {
    console.log('已发');
    return (
      <View
        style={{
          height: pxToDp(88),
          width: pxToDp(690),
          borderBottomColor: '#dddddd',
          borderBottomWidth: pxToDp(1),
          marginLeft: pxToDp(30),
          marginTop: pxToDp(8),
          alignItems: 'center',
          backgroundColor: '#ffffff',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          onPress={() => this.onchange(0)}
          style={{ ...flexColumnCenter }}
        >
          <Text
            style={{
              ...fontStyle(30, 68, 68, '700', '#f1a23c', 'left'),
              marginTop: pxToDp(11),
            }}
          >
            已发放
          </Text>
          <View
            style={{
              width: pxToDp(41),
              height: pxToDp(6),
              borderRadius: pxToDp(3),
              borderColor: '#f1a23c',
              borderWidth: pxToDp(3),
            }}
          />
        </TouchableOpacity>
        <Text
          onPress={() => this.onchange(1)}
          style={{
            marginLeft: pxToDp(73),
            marginTop: pxToDp(11),
            ...fontStyle(28, 68, 68, '400', '#888888', 'left'),
          }}
        >
          未发放
        </Text>
      </View>
    );
  };

  /**
   * 点击了未发放
   */
  unpush = () => {
    console.log('点击了未来');

    return (
      <View
        style={{
          height: pxToDp(88),
          width: pxToDp(690),
          borderBottomColor: '#dddddd',
          borderBottomWidth: pxToDp(1),
          marginLeft: pxToDp(30),
          marginTop: pxToDp(8),
          alignItems: 'center',
          backgroundColor: '#ffffff',
          flexDirection: 'row',
        }}
      >
        <Text
          onPress={() => this.onchange(0)}
          style={{
            marginTop: pxToDp(11),
            ...fontStyle(28, 68, 68, '400', '#888888', 'left'),
          }}
        >
          已发放
        </Text>

        <TouchableOpacity
          onPress={() => this.onchange(1)}
          style={{ ...flexColumnCenter, marginLeft: pxToDp(73) }}
        >
          <Text
            style={{
              ...fontStyle(30, 68, 68, '700', '#f1a23c', 'left'),
              marginTop: pxToDp(11),
            }}
          >
            未发放
          </Text>
          <View
            style={{
              width: pxToDp(41),
              height: pxToDp(6),
              borderRadius: pxToDp(3),
              borderColor: '#f1a23c',
              borderWidth: pxToDp(3),
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <ScrollView style={{ width: '100%', backgroundColor: '#f7f8f9' }}>
        {/* 顶部透明 */}
        <StatusBar backgroundColor="transparent" translucent={true} />
        {/* 上面的图片开始 */}

        <ImageBackground
          style={{
            width: '100%',
            height: pxToDp(488),
            position: 'relative',
          }}
          source={{
            uri:
              'https://wx2.sinaimg.cn/mw1024/cd966a9aly1gnqzubkokwj20ku0dkq3n.jpg',
          }}
        >
          {/* 上面的图片结束 */}
          {/* 字体图标、余额和小舟币 */}
          <View>
            <Icon
              name={'left'}
              // 如果需要点击事件，把这个按钮去掉注释就可以
              // onPress={this.context.goBack}
              style={{
                ...margin(30, 116, 0, 0),
                fontSize: pxToDp(40),
                color: '#fff',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                top: pxToDp(340),
                left: pxToDp(70),
                ...fontStyle(50, 126, 126, '400', 'black', 'left'),
              }}
            >
              {this.state.remainMoney}
            </Text>
            <Text
              style={{
                position: 'absolute',
                top: pxToDp(340),
                left: pxToDp(462),
                ...fontStyle(50, 126, 126, '400', 'black', 'left'),
              }}
            >
              {this.state.localMoney}
            </Text>
          </View>
        </ImageBackground>

        {/* 已发放和未发放开始 */}
        {this.state.giveClick === 0 ? this.push() : this.unpush()}
        {/* 已发放和未发放结束 */}

        {/* 下面的卡片部分开始 */}
        {this.state.giveList[this.state.giveClick].map((item, index) => {
          return <TradeCard key={index} time={item.time} money={item.money} />;
        })}
        {/* 下面的卡片部分结束 */}
      </ScrollView>
    );
  }
}

export default MyWallet;
