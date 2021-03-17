import React from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import EvaluateRelease from '../pages/personal/evaluate/evaluate-release';
// 路由
import Tab from './tab';
// 图片
import ImageShow from '../pages/ImageShow';
import DynamicList from '../pages/dynamic/dynamicList';
// ----------------用户------------------
// import LoginAndRegister from '../pages/users/loginAndRegister';

// ----------------首页------------------
import BookDetail from '../pages/books/detail';
import VideoDetail from '../pages/video/detail';

// ----------------设计------------------
import HomeOthers from '../pages/design/others';

// ----------------动态------------------
import DynamicRelease from '../pages/dynamic/dynamicRelease';

// ----------------消息------------------
// import MessageNotice from '../pages/message/notice';
// import MessageDetail from '../pages/message/detail';

// ---------------个人中心----------------
import MyWallet from '../pages/personal/myWallet';

// 需求
// import Demand from '../pages/demand';

// 组件
import LocalStorageUtils from '../utils/LocalStorageUtils';
// import DynamicDetail from '../pages/dynamic/dynamicDetail';

// 测试
import Test from '../pages/test';
import Rank from '../pages/rank/';
const Stack = createStackNavigator();

class Nav extends React.Component {
  constructor(props) {
    super(props);
    LocalStorageUtils.get('userInfo').then((userInfo) => {
      if (userInfo !== null) {
        // 1.重新获取用户信息
        // 2.存储到mobx中
      } else {
        // 跳转登录
        // this.props.navigate()
      }
    });
  }
  render() {
    return (
      <NavigationContainer
        onStateChange={(state: NavigationState) => {
          //加入该行
          //这个是跳转了才去回调，所以不能利用routes来判断路由栈
          NavigationHelper.navRouters = state.routes;
        }}
      >
        <Stack.Navigator
          initialRouteName="Tab"
          headerMode={'none'}
          screenOptions={(navigation) => {
            NavigationHelper.navigation = navigation.navigation;
          }}
        >
          {/* 从这里开始是pages */}
          {/*<Stack.Screen*/}
          {/*  name="LoginAndRegister"*/}
          {/*  component={LoginAndRegister}*/}
          {/*  options={{*/}
          {/*    ...TransitionPresets.SlideFromRightIOS,*/}
          {/*  }}*/}
          {/*/>*/}
          <Stack.Screen
            name="Tab"
            component={Tab}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          {/*动态列表*/}
          <Stack.Screen name="DynamicList" component={DynamicList} />

          {/* ************** 首页 ************** */}
          {/* 视频详情 */}
          <Stack.Screen name="VideoDetail" component={VideoDetail} />
          {/* 书籍详情 */}
          <Stack.Screen name="BookDetail" component={BookDetail} />

          {/* ************** 设计 ************** */}
          {/* 他人主页 */}
          <Stack.Screen name="HomeOthers" component={HomeOthers} />

          {/* ************** 动态 ************** */}
          {/* 发布动态 */}
          <Stack.Screen name="DynamicRelease" component={DynamicRelease} />

          {/* ************** 消息 ************** */}
          {/*<Stack.Screen name="MessageNotice" component={MessageNotice} />*/}
          {/*<Stack.Screen name="MessageDetail" component={MessageDetail} />*/}

          {/* ************** 个人中心 ************** */}
          {/* 我的钱包 */}
          <Stack.Screen name="MyWallet" component={MyWallet} />

          <Stack.Screen
            name="Rank"
            component={Rank}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="EvaluateRelease"
            component={EvaluateRelease}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

          <Stack.Screen
            name="Test"
            component={Test}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />

          {/* 图片 */}
          <Stack.Screen
            name="ImageShow"
            component={ImageShow}
            options={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Nav;
