import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import OK from '../../components/bussiness/BookCard';
import TopTitle from '../../components/common/TopTitle';
import { pxToDp } from '../../utils/pxToDp';
import { activeOpacity } from '../../constants/config';

import {
  flexColumnSpb,
  flexRowCenter,
  flexRowSpb,
  fontStyle,
  margin,
  padding,
} from '../../utils/StyleUtils';

/**
 * description 是书籍内容介绍
 * mainBook 是最上头的那本书
 * recommendBook 是推荐好书模块
 */
class Books extends Component {
  constructor() {
    super();
    this.state = {
      moreContent: 1,
      description:
        '几千年的漫漫征程，几百代的风云变幻，曾走过绿茵花溪，也踏过枯骨万里。一个世纪的近代史，刻满了血与泪的印记；七十年的上下求索，在挫折中迎来新生。只要民族的意志永远向前，无论历经多少艰难苦痛，我们的祖国依旧能披荆斩棘，砥砺前行！',
      router: 'ImageShow',
      mainBook: {
        bookImage:
          'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
        title: '小蝌蚪找妈妈',
        chapterNum: 10,
        peopleNum: 10000000,
      },
      recommendBook: [
        {
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
          title: '小蝌蚪找妈妈',
          chapterNum: 10,
          peopleNum: 1000,
        },
        {
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
          title: '小蝌蚪找妈妈',
          chapterNum: 10,
          peopleNum: 100000,
        },
        {
          bookImage:
            'https://pic1.zhimg.com/v2-e59ab0cb5246627953a0df3c3f5c534c_r.jpg',
          title: '小蝌蚪找妈妈',
          chapterNum: 10,
          peopleNum: 999999,
        },
      ],
    };
  }

  openContent = () => {
    this.setState({ moreContent: 0 });
  };

  closeContent = () => {
    this.setState({ moreContent: 1 });
  };

  showContent = () => {
    if (this.state.moreContent === 1) {
      return (
        <View>
          <Text numberOfLines={3} style={styles.content}>
            {this.state.description}
          </Text>
          <Text
            onPress={() => this.openContent()}
            style={styles.content__openAndClose}
          >
            【更多】
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text style={styles.content}>{this.state.description}</Text>
          <Text
            onPress={() => this.closeContent()}
            style={styles.content__openAndClose}
          >
            【收起】
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        {/* 书籍详情模块 */}
        {/* 顶部导航栏 */}
        <TopTitle
          bgColor="white"
          color="#000"
          returnBack={this.sss}
          onPress={this.hello}
          title="书籍详情"
          showBtn={false}
        />

        {/* 书籍 */}
        <OK
          bookImage={{
            uri: this.state.mainBook.bookImage,
          }}
          title={this.state.mainBook.title}
          chapterNum={this.state.mainBook.chapterNum}
          peopleNum={this.state.mainBook.peopleNum}
        />

        {/* 书籍内容简介部分 */}
        <View style={{ ...margin(31, 0, 31, 0) }}>
          <View
            style={{
              borderBottomWidth: pxToDp(1),
              borderColor: '#f0f0f0',
              ...padding(0, 30, 0, 30),
            }}
          >
            {this.showContent()}
          </View>

          {/* 查看目录 共100章部分 */}
          <View
            style={{
              height: pxToDp(103),
              ...flexRowSpb,
            }}
          >
            <TouchableOpacity
              activeOpacity={activeOpacity}
              onPress={() => NavigationHelper.navigate(this.state.router)}
            >
              <Text
                style={{
                  ...fontStyle(27, 103, 103, '700', 'black', 'left'),
                }}
              >
                查看目录
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                width: pxToDp(520),
                ...fontStyle(24, 103, 103, '700', '#acb0b3', 'left'),
              }}
            >
              共100章
            </Text>
            <Text
              style={{
                ...fontStyle(29, 103, 103, '700', '#acb0b3', 'left'),
              }}
            >
              {'>'}
            </Text>
          </View>
        </View>
        {/* 那个灰色的条 */}
        <View style={{ height: pxToDp(15), backgroundColor: '#f8f8f8' }} />
        <View style={{ marginTop: pxToDp(15), paddingTop: pxToDp(30) }}>
          {/* 推荐书籍模块 */}
          <Text
            style={{
              letterSpacing: pxToDp(1),
              marginLeft: pxToDp(31),
              ...fontStyle(26, 50, 32, '700', 'black', 'left'),
            }}
          >
            推荐好书
          </Text>
          {/* 循环推荐好书模块 */}
          {this.state.recommendBook.map((item, index) => {
            return (
              <OK
                key={index}
                bookImage={{
                  uri: item.bookImage,
                }}
                title={item.title}
                chapterNum={item.chapterNum}
                peopleNum={item.peopleNum}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

export default Books;

const styles = StyleSheet.create({
  content: {
    letterSpacing: pxToDp(2),
    color: '#acb0b3',
    lineHeight: pxToDp(38),
    fontSize: pxToDp(22),
    fontWeight: '700',
  },

  content__openAndClose: {
    letterSpacing: pxToDp(2),
    color: '#acb0b3',
    lineHeight: pxToDp(38),
    fontSize: pxToDp(22),
    fontWeight: '700',
    marginLeft: pxToDp(590),
    marginTop: pxToDp(8),
  },
});
