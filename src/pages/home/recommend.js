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
import Banner from '../../components/bussiness/banner/index';
import ModuleCard from '../../components/bussiness/ModuleCard';
import ContainerCard from '../../components/bussiness/ContainerCard';
import HomeTabBooks from './HomeTabBooks';
import TopTabNavigator from '../../components/common/TopTabNavigator';
// 工具
import { deviceWidthDp, pxToDp } from '../../utils/pxToDp';
import { fontStyle } from '../../utils/StyleUtils';
import HomeTabCourse from './HomeTabCourse';

class Recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [
        {
          key: '关注',
          title: '关注',
          component: HomeTabCourse,
        },
        {
          key: 'Ps',
          title: 'Ps',
          component: HomeTabCourse,
        },
        {
          key: 'AI',
          title: 'AI',
          component: HomeTabCourse,
        },
        {
          key: 'CAD',
          title: 'CAD',
          component: HomeTabCourse,
        },
        {
          key: 'UI设计',
          title: 'UI设计',
          component: HomeTabCourse,
        },
        {
          key: '工业设计',
          title: '工业设计',
          component: HomeTabCourse,
        },
      ],
      bookPages: [
        {
          key: '关注',
          title: '关注',
          component: HomeTabBooks,
        },
        {
          key: 'Ps',
          title: 'Ps',
          component: HomeTabBooks,
        },
        {
          key: 'AI',
          title: 'AI',
          component: HomeTabBooks,
        },
        {
          key: 'CAD',
          title: 'CAD',
          component: HomeTabBooks,
        },
        {
          key: 'UI设计',
          title: 'UI设计',
          component: HomeTabBooks,
        },
        {
          key: '工业设计',
          title: '工业设计',
          component: HomeTabBooks,
        },
      ],
    };
  }
  _renderHomeTabCourse() {
    let { pages } = this.state;
    return (
      <TopTabNavigator
        ifScrollEnabled={true}
        type={1}
        itemWidth={deviceWidthDp / 5}
        routes={pages}
      />
    );
  }
  _renderHomeTabBooks() {
    let { bookPages } = this.state;
    return (
      <TopTabNavigator
        ifScrollEnabled={true}
        type={1}
        itemWidth={deviceWidthDp / 5}
        routes={bookPages}
      />
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
              {this._renderHomeTabBooks()}
            </ContainerCard>
          </View>
          <View style={{ marginTop: pxToDp(50) }}>
            <ContainerCard title={'大家都在学'} rightRemove={true}>
              {this._renderHomeTabCourse()}
            </ContainerCard>
            <TouchableOpacity
              onPress={() => NavigationHelper.navigate()}
              style={styles.course_more}
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

export default Recommend;

const styles = StyleSheet.create({
  banner_container: {
    width: deviceWidthDp,
    height: pxToDp(320),
  },
  course_more: {
    width: pxToDp(690),
    height: pxToDp(72),
    alignSelf: 'center',
    backgroundColor: '#FEF5E7',
    marginTop: pxToDp(40),
    marginBottom: pxToDp(50),
  },
});
