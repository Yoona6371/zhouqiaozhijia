import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LoginInput from '../../components/bussiness/LoginInput';
import { pxToDp } from '../../utils/pxToDp';
import SvgUri from 'react-native-svg-uri';
import { qq, WeChat } from '../../constants/svg';
import Icon from '../../components/common/Icon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

class LoginTab extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        {/*登录 start*/}
        <View style={{ marginTop: pxToDp(90) }}>
          <LoginInput type={1} />
          {/*forgetPassword start*/}
          <View style={{ marginTop: pxToDp(45) }}>
            <Text
              style={{ color: '#16b0ff', fontSize: pxToDp(24) }}
              onPress={this.forgetPassword}
            >
              忘记密码？
            </Text>
          </View>
          {/*forgetPassword end*/}
          {/*button start*/}
          <View style={{ marginTop: pxToDp(103), marginBottom: pxToDp(120) }}>
            <TouchableOpacity
              style={{
                width: pxToDp(610),
                height: pxToDp(88),
                borderRadius: pxToDp(44),
                backgroundColor: '#FD840B',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: pxToDp(27),
                  color: '#FFFFFF',
                }}
              >
                登录
              </Text>
            </TouchableOpacity>
          </View>
          {/*button  end*/}
        </View>
        {/*登录 end*/}
      </View>
    );
  }
}
class RegisterTab extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', backgroundColor: '#FFFFFF' }}>
        {/*注册 start*/}
        <View style={{ marginTop: pxToDp(90) }}>
          <LoginInput type={2} />
          {/*forgetPassword start*/}
          <View style={{ marginTop: pxToDp(45), flexDirection: 'row' }}>
            <Text style={{ color: '#999999', fontSize: pxToDp(24) }}>
              已有帐号？
            </Text>
            <Text
              style={{ color: '#16b0ff', fontSize: pxToDp(24) }}
              onPress={() => this.props.navigation.navigate('LoginTab')}
            >
              立即登录
            </Text>
          </View>
          {/*forgetPassword end*/}
          {/*button start*/}
          <View style={{ marginTop: pxToDp(45), marginBottom: pxToDp(72) }}>
            <TouchableOpacity
              style={{
                width: pxToDp(610),
                height: pxToDp(88),
                borderRadius: pxToDp(44),
                backgroundColor: '#FD840B',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: pxToDp(27),
                  color: '#FFFFFF',
                }}
              >
                登录
              </Text>
            </TouchableOpacity>
          </View>
          {/*button  end*/}
        </View>
        {/* 注册 end*/}
      </View>
    );
  }
}

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          name: '登录',
          component: LoginTab,
        },
        {
          name: '注册',
          component: RegisterTab,
        },
      ],
    };
  }
  MyTabs = () => {
    let { pages } = this.state;
    return (
      <Tab.Navigator
        tabBarOptions={{
          inactiveTintColor: '#FE9E0E',
          // inactiveBackgroundColor: '#fffbf6',
          activeTintColor: '#FFFFFF',
          // activeBackgroundColor: '#FE9E0E',
          pressColor: '#FE9E0E',
          indicatorStyle: {
            height: 0,
          },
          labelStyle: {
            fontSize: pxToDp(30),
          },
          style: styles.tabBarOptions,
        }}
      >
        {pages.map((v, i) => (
          <Tab.Screen name={v.name} component={v.component} key={i} />
        ))}
      </Tab.Navigator>
    );
  };
  forgetPassword = () => {};
  render() {
    const { pages } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {/*top start*/}
        <View>
          <StatusBar backgroundColor="transparent" translucent={true} />
          {/*top__box*/}
          <ImageBackground
            style={styles.top__box}
            source={require('../../asserts/images/Login_top.png')}
          >
            {/*close 图标*/}
            <TouchableOpacity>
              <Icon name="close" style={styles.Icon__close} />
            </TouchableOpacity>
            {/*logo*/}
            <View style={styles.logo}>
              <Image
                style={{
                  width: pxToDp(100),
                  height: pxToDp(67),
                }}
                source={require('../../asserts/images/Login_logo.png')}
              />
            </View>
            {/*logo__text*/}
            <View style={styles.logo__text}>
              <Text
                style={{
                  color: 'white',
                  fontSize: pxToDp(44),
                  fontWeight: 'bold',
                }}
              >
                您好
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: pxToDp(24),
                }}
              >
                欢迎登录舟桥之家
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/*top end*/}

        <View style={{ alignItems: 'center', flex: 1 }}>
          {/*top__decorate start*/}
          {/*center__box*/}
          <View style={styles.center__box}>
            {/*top__decorate__2*/}
            <View style={styles.top__decorate__2} />
            {/*top__decorate__1*/}
            <View style={styles.top__decorate__1} />
            {/*top__decorate end*/}
            <View
              style={{
                width: '100%',
                height: pxToDp(780),
              }}
            >
              {this.MyTabs()}
            </View>
            {/*bottom start*/}
            <View>
              {/*  bottom__text*/}
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('../../asserts/images/Login_line_left.png')}
                  style={{ width: pxToDp(187), height: pxToDp(3) }}
                />
                <Text
                  style={{
                    color: '#666666',
                    margin: pxToDp(10),
                    fontWeight: 'bold',
                  }}
                >
                  第三方登录
                </Text>
                <Image
                  source={require('../../asserts/images/Login_line_right.png')}
                  style={{ width: pxToDp(187), height: pxToDp(3) }}
                />
              </View>
              {/*  bottom__svg*/}
              <View style={styles.bottom__svg}>
                <TouchableOpacity>
                  <SvgUri
                    svgXmlData={WeChat}
                    width={pxToDp(44)}
                    height={pxToDp(36)}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <SvgUri
                    svgXmlData={qq}
                    width={pxToDp(31)}
                    height={pxToDp(35)}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/*bottom end*/}
            <View
              style={{
                marginTop: pxToDp(20),
                flex: 1,
                justifyContent: 'flex-end',
              }}
            >
              <Image
                source={require('../../asserts/images/Login_bottom.png')}
                width={'100%'}
                height={pxToDp(73)}
              />
            </View>
            {/*bottom  end*/}
          </View>
        </View>
      </View>
    );
  }
}

export default Index;
const styles = StyleSheet.create({
  center__box: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: pxToDp(-60),
    borderTopLeftRadius: pxToDp(70),
    borderTopRightRadius: pxToDp(70),
    alignItems: 'center',
  },
  top__decorate__1: {
    position: 'absolute',
    width: pxToDp(690),
    height: pxToDp(100),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: pxToDp(70),
    borderTopRightRadius: pxToDp(70),
    marginTop: pxToDp(-35),
    opacity: 0.7,
  },
  top__decorate__2: {
    width: pxToDp(630),
    height: pxToDp(120),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: pxToDp(70),
    borderTopRightRadius: pxToDp(70),
    marginTop: pxToDp(-60),
    opacity: 0.5,
  },

  Icon__close: {
    position: 'absolute',
    left: pxToDp(29),
    top: pxToDp(80),
    color: 'white',
    fontSize: pxToDp(36),
  },
  logo: {
    alignItems: 'center',
    position: 'absolute',
    top: pxToDp(170),
    left: 0,
    right: 0,
  },
  logo__text: {
    alignItems: 'center',
    position: 'absolute',
    top: pxToDp(258),
    left: 0,
    right: 0,
  },
  top__box: {
    width: '100%',
    height: pxToDp(560),
    backgroundColor: '#FB8504',
    position: 'relative',
  },
  bottom__svg: {
    flexDirection: 'row',
    marginTop: pxToDp(70),
    justifyContent: 'space-evenly',
    height: pxToDp(30),
  },
  tabBarOptions: {
    width: pxToDp(460),
    alignSelf: 'center',
    borderRadius: pxToDp(40),
    borderWidth: pxToDp(1),
    borderColor: '#fec165',
    backgroundColor: '#FE9E0E',
  },
});
