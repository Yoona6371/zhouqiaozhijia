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
import { pxToDp } from '../../utils/pxToDp';
import Icon from '../../components/common/Icon';
import LoginInput from '../../components/bussiness/LoginInput';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        {/*top 开始*/}
        {/*top__box*/}
        <View style={styles.top__box}>
          <StatusBar backgroundColor="transparent" translucent={true} />
          <ImageBackground
            source={require('../../asserts/images/findPasswod_top.png')}
            style={{ width: '100%', height: pxToDp(470) }}
          >
            {/* top__text*/}
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.top__text}>找回密码</Text>
            </View>
            {/* top__Icon */}
            <View>
              <Icon name="left" style={styles.top__Icon} />
            </View>
            {/*  top__logo*/}
            <View style={styles.top__logo__box}>
              <Image
                source={require('../../asserts/images/findPassword_logo.png')}
                style={{
                  width: pxToDp(132.2),
                  height: pxToDp(132.2),
                }}
              />
            </View>
          </ImageBackground>
        </View>
        {/*top 结束*/}
        {/*center 开始*/}
        <View>
          {/*login_input*/}
          <View style={{ alignItems: 'center', marginTop: pxToDp(90) }}>
            <LoginInput type={3} />
          </View>
          {/*button start*/}
          <View
            style={{
              marginTop: pxToDp(113),
              alignItems: 'center',
            }}
          >
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
          {/*button  end*/}
        </View>
        {/*center 结束*/}
      </View>
    );
  }
}
export default Index;
const styles = StyleSheet.create({
  top__text: {
    fontSize: pxToDp(36),
    color: '#FFFFFF',
    position: 'absolute',
    top: pxToDp(116),
    fontWeight: 'bold',
  },
  top__box: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: pxToDp(470),
    position: 'relative',
  },
  top__Icon: {
    color: '#FFFFFF',
    fontSize: pxToDp(40),
    position: 'absolute',
    top: pxToDp(120),
    left: pxToDp(30),
  },
  touchableOpacity: {
    width: pxToDp(610),
    height: pxToDp(88),
    borderRadius: pxToDp(44),
    backgroundColor: '#fe9e0e',
    justifyContent: 'center',
  },
  top__logo__box: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
