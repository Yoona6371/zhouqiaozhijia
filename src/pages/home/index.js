import React, { Component } from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// 组件
import Icon from '../../components/common/Icon';
import SearchInput from '../../components/bussiness/searchInput';
import Banner from '../../components/bussiness/banner/index';
import ModuleCard from '../../components/bussiness/ModuleCard';
import ContainerCard from '../../components/bussiness/ContainerCard';
import HomeTabBooks from './HomeTabBooks';

// 工具
import { deviceWidthDp, pxToDp } from '../../utils/pxToDp';
import { padding, flexRowSpb, fontStyle } from '../../utils/StyleUtils';
import HomeTabCourse from './HomeTabCourse';

class Home extends Component {
  _renderHomeTab() {
    return <Text>123</Text>;
  }
  _renderHomeTabBooks() {}
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
        <ScrollView>
          <View style={styles.banner_container}>
            <Banner />
          </View>
          <View style={{ marginTop: pxToDp(30) }}>
            <ModuleCard />
          </View>
          <View style={{ marginTop: pxToDp(50) }}>
            <ContainerCard title={'热门需求'}>
              <Banner type={2} />
            </ContainerCard>
          </View>
          <View style={{ marginTop: pxToDp(50) }}>
            <ContainerCard title={'每日书籍推荐'} rightRemove={true}>
              <HomeTabBooks />
            </ContainerCard>
          </View>
          <View style={{ marginTop: pxToDp(50) }}>
            <ContainerCard title={'大家都在学'} rightRemove={true}>
              <HomeTabCourse />
            </ContainerCard>
            <TouchableOpacity
              onPress={() => NavigationHelper.navigate()}
              style={{
                width: pxToDp(690),
                height: pxToDp(72),
                alignSelf: 'center',
                backgroundColor: '#FEF5E7',
                marginTop: pxToDp(40),
              }}
            >
              <Text
                style={{
                  ...fontStyle(26, 72, 72, 'normal', '#FE9E0E', 'center'),
                }}
              >
                点击查看更多
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
