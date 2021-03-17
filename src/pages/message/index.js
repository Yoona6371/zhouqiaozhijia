import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { deviceWidthDp, pxToDp } from '../../utils/pxToDp';
import { fontStyle, margin, padding } from '../../utils/StyleUtils';
import Icon from '../../components/common/Icon';
import Avatar from '../../components/common/Avatar';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.setState({ total: 18 });
  }

  render() {
    const { total } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.message_title}>
          <Text style={styles.message__wrap}>消息</Text>
          {/* 消息下方黄框 */}
          <View style={styles.message_assist} />
          {/* 未读提示 */}
          <Text style={[styles.message_tips, styles.message_tips_position]}>
            {total}
          </Text>
        </View>
        <View style={styles.message_list_wrap}>
          <TouchableOpacity
            style={styles.message_list}
            onPress={() => NavigationHelper.navigate('MessageNotice')}
          >
            <View style={{ alignSelf: 'center' }}>
              <Avatar
                image={{
                  uri:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202101%2F15%2F20210115170419_ed8cd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614850704&t=612446e233692bedd314d255c7faeff3',
                }}
                size={90}
              />
            </View>
            <View>
              <Text style={{ ...fontStyle(30, 64, 64, 'bold', '#333') }}>
                通知
              </Text>
              <Text style={{ ...fontStyle(24, 64, 64, '500', '#999') }}>
                尊敬的用户，您收到一条新的消息
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...fontStyle(24, 64, 64, '500', '#999', 'right'),
                }}
              >
                一小时前
              </Text>
              <Text
                style={{
                  ...styles.message_tips,
                  marginTop: pxToDp(16),
                  marginLeft: pxToDp(92),
                }}
              >
                18
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.message_list}
            onPress={() => NavigationHelper.navigate('MessageDetail')}
          >
            <View style={{ alignSelf: 'center' }}>
              <Avatar
                image={{
                  uri:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202101%2F15%2F20210115170419_ed8cd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614850704&t=612446e233692bedd314d255c7faeff3',
                }}
                size={90}
              />
            </View>
            <View>
              <Text style={{ ...fontStyle(30, 64, 64, 'bold', '#333') }}>
                通知
              </Text>
              <Text style={{ ...fontStyle(24, 64, 64, '500', '#999') }}>
                尊敬的用户，您收到一条新的消息
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...fontStyle(24, 64, 64, '500', '#999', 'right'),
                }}
              >
                一小时前
              </Text>
              <Text
                style={{
                  ...styles.message_tips,
                  marginTop: pxToDp(16),
                  marginLeft: pxToDp(92),
                }}
              >
                18
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message__wrap: {
    position: 'relative',
    marginTop: pxToDp(115),
    alignSelf: 'center',
    ...fontStyle(34, 36, 36, 'bold', '#F1A23C'),
  },
  message_title: {
    backgroundColor: '#fff',
    paddingBottom: pxToDp(40),
    marginBottom: pxToDp(20),
  },
  message_assist: {
    backgroundColor: '#FFF6EA',
    width: pxToDp(80),
    height: pxToDp(24),
    alignSelf: 'center',
    marginTop: pxToDp(-15),
    zIndex: -1,
    borderTopLeftRadius: pxToDp(10),
    borderBottomRightRadius: pxToDp(10),
  },
  message_tips: {
    width: pxToDp(52),
    height: pxToDp(32),
    backgroundColor: '#FF313D',
    ...fontStyle(24, 32, 32, 'bold', '#fff', 'center'),
    borderTopLeftRadius: pxToDp(13),
    borderTopRightRadius: pxToDp(13),
    borderBottomRightRadius: pxToDp(13),
  },
  message_tips_position: {
    position: 'absolute',
    top: pxToDp(95),
    left: deviceWidthDp / 2 + pxToDp(35),
  },
  message_list_wrap: {
    backgroundColor: '#fff',
    ...padding(30, 0, 30, 0),
    paddingBottom: pxToDp(44),
  },
  message_list: {
    marginTop: pxToDp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Index;
