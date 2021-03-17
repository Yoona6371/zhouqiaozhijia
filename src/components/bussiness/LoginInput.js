import React, { Component } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { pxToDp } from '../../utils/pxToDp';
import PropTypes from 'prop-types';
import Icon from '../common/Icon';
import utils from '../../utils/utils';

export default class LoginInput extends Component {
  static propTypes = {
    type: PropTypes.number,
    phoneNumber: PropTypes.string,
    password: PropTypes.string,
    verificationCode: PropTypes.string,
  };
  static defaultProps = {
    type: 1,
  };
  /* type:3 -> 找回密码 手机号 验证码 重置密码
   * type:2 -> 注册 手机号 密码 确认密码
   * type:1(默认) ->登录 手机号 密码
   */
  constructor(props) {
    super(props);
  }
  state = {
    phoneNumber: '',
    password: '',
    verificationCode: '',
    errShow: false,
  };
  //电话号码
  phoneNumberChangeText = (phoneNumber) => {
    this.setState({ phoneNumber });
  };
  phoneNumberSubmitEditing = () => {
    const { phoneNumber } = this.state;
    this.setState({ errShow: true });
    // console.log(utils.checkPhone(phoneNumber));
  };

  //密码
  passwordSubmitEditing = () => {
    this.setState({ password });
    this.setState({ errShow: true });
  };
  passwordChangeText = () => {
    const { password } = this.state;

    // console.log(utils.checkPassword(password));
  };

  //申请验证码
  verificationCodeRequest = () => {};
  verificationCodeSubmitEditing = () => {
    this.setState(verificationCode);
    this.setState({ errShow: true });
  };
  verificationCodeChangeText = () => {
    const { verificationCode } = this.state;
  };
  render() {
    const { phoneNumber, password, verificationCode, errShow } = this.state;
    const { type } = this.props;

    return (
      <View>
        {type === 1 ? (
          <View>
            <View>
              <View style={styles.input_box}>
                <TextInput
                  placeholder="输入手机号码"
                  placeholderTextColor="#918D87"
                  maxLength={11}
                  onSubmitEditing={this.phoneNumberSubmitEditing}
                  onChangeText={this.phoneNumberChangeText}
                  keyboardType="phone-pad"
                  style={{ fontSize: pxToDp(24) }}
                />
                <Icon name="phone" style={styles.icon__type12} />
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkPhone(phoneNumber)}
                </Text>
              ) : (
                <View />
              )}
            </View>
            <View>
              <View style={[styles.input_box, { marginTop: pxToDp(50) }]}>
                <TextInput
                  placeholder="输入密码"
                  style={{ fontSize: pxToDp(24) }}
                  placeholderTextColor="#918D87"
                  maxLength={16}
                  secureTextEntry={true}
                  onSubmitEditing={this.passwordSubmitEditing}
                  onChangeText={this.passwordChangeText}
                />
                <Icon name="lock" style={styles.icon__type12} />
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkPassword(password)}
                </Text>
              ) : (
                <View />
              )}
            </View>
          </View>
        ) : type === 2 ? (
          <View>
            <View>
              <View style={styles.input_box}>
                <TextInput
                  placeholder="请输入手机号码"
                  placeholderTextColor="#918D87"
                  maxLength={11}
                  onSubmitEditing={this.phoneNumberSubmitEditing}
                  onChangeText={this.phoneNumberChangeText}
                  keyboardType="phone-pad"
                  style={{ fontSize: pxToDp(24) }}
                />
                <Icon name="phone" style={styles.icon__type12} />
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkPhone(phoneNumber)}
                </Text>
              ) : (
                <View />
              )}
            </View>
            <View>
              <View style={[styles.input_box, { marginTop: pxToDp(50) }]}>
                <TextInput
                  placeholder="请输入密码"
                  style={{ fontSize: pxToDp(24) }}
                  placeholderTextColor="#918D87"
                  maxLength={16}
                  secureTextEntry={true}
                  onSubmitEditing={this.passwordSubmitEditing}
                  onChangeText={this.passwordChangeText}
                />
                <Icon name="lock" style={styles.icon__type12} />
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkPassword(password)}
                </Text>
              ) : (
                <View />
              )}
            </View>
            <View>
              <View style={[styles.input_box, { marginTop: pxToDp(50) }]}>
                <TextInput
                  placeholder="请确认密码"
                  style={{ fontSize: pxToDp(24) }}
                  placeholderTextColor="#918D87"
                  maxLength={16}
                  secureTextEntry={true}
                  onSubmitEditing={this.passwordSubmitEditing}
                  onChangeText={this.passwordChangeText}
                />
                <Icon name="lock" style={styles.icon__type12} />
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkPassword(password)}
                </Text>
              ) : (
                <View />
              )}
            </View>
          </View>
        ) : (
          <View>
            <View>
              <View style={styles.input__box__type3}>
                <Icon name="phone" style={styles.icon__type3} />
                <TextInput
                  placeholder="请输入手机号码"
                  placeholderTextColor="#918D87"
                  maxLength={11}
                  onSubmitEditing={this.phoneNumberSubmitEditing}
                  onChangeText={this.phoneNumberChangeText}
                  keyboardType="phone-pad"
                  style={{ fontSize: pxToDp(24) }}
                />
              </View>
            </View>
            {errShow ? (
              <Text style={styles.errorText}>
                {utils.checkPhone(phoneNumber)}
              </Text>
            ) : (
              <View />
            )}
            <View>
              <View style={styles.input__box__type3}>
                <Icon name="verification" style={styles.icon__type3} />
                <TextInput
                  placeholder="请输入验证码"
                  style={{ fontSize: pxToDp(24) }}
                  placeholderTextColor="#918D87"
                  onSubmitEditing={this.verificationCodeSubmitEditing}
                  onChangeText={this.verificationCodeChangeText}
                />
                <View style={styles.touchableOpacity__type3}>
                  <TouchableOpacity
                    style={{ justifyContent: 'center' }}
                    onPress={this.verificationCodeRequest}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontSize: pxToDp(21),
                        alignSelf: 'center',
                      }}
                    >
                      获取验证码
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkVerification(verificationCode)}
                </Text>
              ) : (
                <View />
              )}
            </View>
            <View>
              <View style={styles.input__box__type3}>
                <Icon name="lock" style={styles.icon__type3} />
                <TextInput
                  placeholder="请重设密码"
                  style={{ fontSize: pxToDp(24) }}
                  placeholderTextColor="#918D87"
                  maxLength={16}
                  secureTextEntry={true}
                  onSubmitEditing={this.passwordSubmitEditing}
                  onChangeText={this.passwordChangeText}
                />
              </View>
              {errShow ? (
                <Text style={styles.errorText}>
                  {utils.checkPassword(password)}
                </Text>
              ) : (
                <View />
              )}
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon__type12: {
    color: '#fe9e0e',
    position: 'absolute',
    right: pxToDp(27),
    top: pxToDp(20),
  },
  icon__type3: {
    color: '#fe9e0e',
    fontSize: pxToDp(24),
    marginRight: pxToDp(15),
  },
  touchableOpacity__type3: {
    width: pxToDp(150),
    height: pxToDp(50),
    backgroundColor: '#fe970d',
    borderRadius: pxToDp(25),
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
  },
  input__box__type3: {
    width: pxToDp(630),
    height: pxToDp(107),
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: pxToDp(2),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  input_box: {
    width: pxToDp(610),
    height: pxToDp(88),
    backgroundColor: '#F6F3EF',
    borderRadius: pxToDp(16),
    position: 'relative',
    paddingLeft: pxToDp(40),
  },
  input_box_margin: {
    marginTop: pxToDp(60),
  },
  errorText: {
    color: 'red',
    fontSize: pxToDp(18),
    paddingLeft: pxToDp(20),
  },
});
