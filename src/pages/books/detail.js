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
          <Text
            numberOfLines={3}
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
            }}
          >
            {this.state.description}
          </Text>
          <Text
            onPress={() => this.openContent()}
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
              ...margin(550, 5, 0, 0),
            }}
          >
            【更多】
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
            }}
          >
            {this.state.description}
          </Text>
          <Text
            onPress={() => this.closeContent()}
            style={{
              color: 'grey',
              fontSize: pxToDp(23),
              letterSpacing: pxToDp(1),
              ...margin(550, 5, 0, 0),
            }}
          >
            【收起】
          </Text>
        </View>
      );
    }
  };

  render() {
    return (
      <ScrollView style={styles.book_backgroud}>
        <View style={styles.books__wrap}>
          {/* 书籍详情模块 */}
          <View style={styles.books__top}>
            {/* 顶部导航栏 */}
            <View>
              <TopTitle
                bgColor="white"
                color="#000"
                returnBack={this.sss}
                onPress={this.hello}
                title="书籍详情"
                showBtn={false}
              />
            </View>
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
            <View
              style={{
                borderWidth: pxToDp(1),
                borderStyle: 'dotted',
                borderColor: 'white',
                borderRadius: pxToDp(10),
                shadowColor: '#000',
                shadowOffset: { width: 4, height: 4 },
                shadowOpacity: 0.8,
                shadowRadius: 6,
                elevation: 0.5,
                ...padding(5, 8, 5, 5),
              }}
            >
              {this.showContent()}
            </View>

            {/* 查看目录 共100章部分 */}
            <View
              style={{
                height: pxToDp(70),
                marginTop: pxToDp(10),
                //backgroundColor: 'skyblue',
                ...flexRowSpb,
              }}
            >
              <TouchableOpacity
                activeOpacity={activeOpacity}
                onPress={() => NavigationHelper.navigate(this.state.router)}
              >
                <Text
                  style={{
                    //backgroundColor: 'purple',
                    ...fontStyle(27, 70, 70, '700', 'black', 'left'),
                  }}
                >
                  查看目录
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  // backgroundColor: 'orange',
                  marginLeft: pxToDp(-400),
                  ...fontStyle(22, 70, 70, '700', 'grey', 'left'),
                }}
              >
                共100章
              </Text>
              <Text
                style={{
                  ...fontStyle(29, 70, 70, '700', 'grey', 'left'),
                }}
              >
                {'>'}
              </Text>
            </View>
          </View>

          <View style={styles.books__bottom}>
            {/* 推荐书籍模块 */}
            <Text
              style={{
                letterSpacing: pxToDp(2),
                ...fontStyle(26, 50, 32, '700', 'black', 'left'),
              }}
            >
              推荐好书
            </Text>
            {/* 循环推荐好书模块 */}
            {this.state.recommendBook.map((item, key) => {
              return (
                <OK
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
        </View>
      </ScrollView>
    );
  }
}

export default Books;

const styles = StyleSheet.create({
  book_backgroud: {
    backgroundColor: '#efeded',
  },

  books__wrap: {
    width: pxToDp(710),
    ...margin(20, 0, 20, 0),
  },

  books__top: {
    backgroundColor: 'white',
    borderRadius: pxToDp(20),
    ...padding(25, 0, 25, 15),
    ...margin(0, 0, 0, 25),
  },

  books__bottom: {
    backgroundColor: 'white',
    borderRadius: pxToDp(20),
    ...padding(25, 30, 25, 0),
  },
});
