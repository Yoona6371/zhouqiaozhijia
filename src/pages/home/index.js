import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet } from 'react-native';
// 组件
import Icon from '../../components/common/Icon';
import SearchInput from '../../components/bussiness/searchInput';
import TopTabNavigator from '../../components/common/TopTabNavigator';
// 工具
import { deviceWidthDp, pxToDp } from '../../utils/pxToDp';
import { padding, flexRowSpb } from '../../utils/StyleUtils';
import Recommend from './recommend';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          key: '推荐',
          title: '推荐',
          component: Recommend,
        },
        {
          key: '排行榜',
          title: '排行榜',
          component: Recommend,
        },
        {
          key: '学习',
          title: '学习',
          component: Recommend,
        },
      ],
    };
  }
  _renderHomeTab() {
    let { pages } = this.state;
    return (
      <ScrollView>
        <TopTabNavigator
          ifScrollEnabled={true}
          type={3}
          itemWidth={deviceWidthDp / 3}
          routes={pages}
        />
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.header_container}>
          <Image
            style={styles.header_logo}
            source={require('../../asserts/images/logo.jpg')}
          />
          <SearchInput onFocus={this.onFocus} />
          <Icon name={'earphone'} style={{ fontSize: pxToDp(36) }} />
        </View>
        {this._renderHomeTab()}
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  header_container: {
    ...flexRowSpb,
    ...padding(30, 80, 30, 42),
  },
  header_logo: {
    width: pxToDp(114),
    height: pxToDp(74),
  },
  banner_container: {
    width: deviceWidthDp,
    height: pxToDp(320),
  },
});
