import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { fontStyle } from '../../../utils/StyleUtils';
import { pxToDp, deviceWidthDp } from '../../../utils/pxToDp';
import { margin } from '../../../utils/StyleUtils';

class Index extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={{ marginBottom: pxToDp(100) }}>
        <Text
          style={{
            fontSize: pxToDp(24),
            lineHeight: pxToDp(26),
            color: '#999',
            fontWeight: 'bold',
            ...margin(37, 35, 37, 40),
            textIndent: pxToDp(52),
          }}
        >
          &emsp;&emsp; 化开发具有较高的通用性。无论是前端渲染的单页面应
          还是后端模板渲染的多页面应用，组件化开发的概念都能适用。
          组件化开发具有较高的通用性。无论是前端渲染的单页面应用
          还是后端模板渲染的多页面应用，组件化开发的概念都能适用
          组件化开发具有较高的通用性。无论是前端渲染的单页面应用，
          还是后端模板渲染的多页面应用，组件化开发。
        </Text>
        <Image
          source={{
            uri:
              'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2018.cnblogs.com%2Fblog%2F1648698%2F201906%2F1648698-20190606171420834-309236708.png&refer=http%3A%2F%2Fimg2018.cnblogs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616214188&t=ecd77df87ae297f3896fef52f2885ae6',
          }}
          style={{
            alignSelf: 'center',
            width: pxToDp(deviceWidthDp),
            height: pxToDp(450),
          }}
        />
      </View>
    );
  }
}

export default Index;
