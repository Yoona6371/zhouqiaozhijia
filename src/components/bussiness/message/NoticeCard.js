import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { pxToDp } from '../../../utils/pxToDp';
import { fontStyle, margin, padding } from '../../../utils/StyleUtils';
import Icon from '../../common/Icon';
import PropTypes from 'prop-types';

class Index extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    type: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    router: PropTypes.string,
  };
  render() {
    let { time, type, style } = this.props;
    let iconName = '';
    let title = '订单通知';
    let content = '您的订单有新的变动消息';
    let contentAssist = '您的快递物流信息已经从青岛发往成都了，点击了解最...';
    let router = '';
    if (type === 2) {
      iconName = '';
      title = '信誉通知';
      content = '您的信誉有新的变动消息';
      contentAssist = '您的信誉信息已经更新了，点击了解最新变动详情';
      router = '';
    }
    return (
      <View style={{ ...style }}>
        <Text style={styles.card__wrap}>{time}</Text>
        <View
          style={{
            ...padding(40, 30, 40, 44),
            backgroundColor: '#fff',
            ...margin(30, 0, 30, 0),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: pxToDp(2),
              borderColor: '#ddd',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  width: pxToDp(35),
                  height: pxToDp(40),
                  borderWidth: pxToDp(5),
                }}
              >
                asd
              </Text>
              <Text
                style={{
                  ...fontStyle(28, 30, 30, '500', '#333'),
                  ...margin(20, 0, 0, 36),
                }}
              >
                {title}
              </Text>
            </View>
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => {
                NavigationHelper.navigate(router);
              }}
            >
              <Text style={{ ...fontStyle(28, 30, 30, 'bold', '#999') }}>
                查看详情
              </Text>
              <Icon
                name={'right'}
                style={{
                  ...fontStyle(18, 30, 28, 'normal', '#a5a5a5'),
                  marginLeft: pxToDp(20),
                }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                ...fontStyle(32, 36, 36, 'bold', '#333'),
                marginTop: pxToDp(45),
              }}
            >
              {content}
            </Text>
            <Text
              style={{
                ...fontStyle(24, 26, 26, '500', '#999'),
                marginTop: pxToDp(23),
              }}
            >
              {contentAssist}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card__wrap: {
    ...padding(18, 0, 18, 0),
    height: pxToDp(40),
    backgroundColor: '#dad9e1',
    ...fontStyle(24, 40, 40, '500', '#fff', 'center'),
    alignSelf: 'center',
    borderRadius: pxToDp(20),
    marginBottom: pxToDp(24),
  },
});

export default Index;
