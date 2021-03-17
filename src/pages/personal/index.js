import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react';
import { pxToDp } from '../../utils/pxToDp';
import Icon from '../../components/common/Icon/index';
import Avatar from '../../components/common/Avatar';
import { fontStyle } from '../../utils/StyleUtils';
// import DynamicList from '../../components/bussiness/DynamicList';
@inject('RootStore')
@observer
class Index extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.head_bg}>
          {/*用户header开始*/}
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity style={{ justifyContent: 'space-around' }}>
              <View style={styles.headerBox}>
                <View>
                  <Avatar
                    size={150}
                    image={require('../../asserts/images/RecordCard__userImage.png')}
                  />
                </View>
                <View style={{ marginTop: pxToDp(20) }}>
                  <Text
                    style={{ ...fontStyle('30', '32', '32', 'bold', '#fff') }}
                  >
                    用户昵称
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    width: pxToDp(400),
                    marginTop: pxToDp(19),
                  }}
                >
                  <Text
                    style={{ ...fontStyle('24', '26', '26', 'normal', '#fff') }}
                  >
                    个人简介：生活就像太阳花
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          {/*我的收藏开始*/}
          <View style={styles.fourIconBorder}>
            <View style={styles.ItemIcon}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.NumStyle}>6598</Text>
                <Text style={styles.ItemiconText}>关注数</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ItemIcon}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.NumStyle}>6598</Text>
                <Text style={styles.ItemiconText}>粉丝数</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ItemIcon}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.NumStyle}>6598</Text>
                <Text style={styles.ItemiconText}>积分</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.ItemIcon}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.NumStyle}>6598</Text>
                <Text style={styles.ItemiconText}>动态数</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/*我的订单开始*/}
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: pxToDp(938),
          }}
        >
          <View style={styles.myOrderStyle}>
            <View
              style={{
                alignSelf: 'flex-start',
                marginLeft: pxToDp(30),
                marginTop: pxToDp(28),
              }}
            >
              <Text style={styles.titleFontStyle}>我的订单</Text>
            </View>
            <View style={styles.mySaleBorder}>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 8,
                      height: pxToDp(17),
                      width: pxToDp(28),
                      backgroundColor: '#ff2d4b',
                      borderRadius: pxToDp(10),
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: pxToDp(16),
                        lineHeight: pxToDp(17),
                      }}
                    />
                  </View>
                  <Icon
                    name={'appeal'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>待付款</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 2,
                      height: pxToDp(17),
                      width: pxToDp(28),
                      backgroundColor: '#ff2d4b',
                      borderRadius: pxToDp(10),
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: pxToDp(16),
                        lineHeight: pxToDp(17),
                      }}
                    />
                  </View>
                  <Icon
                    name={'live'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>进行中</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 2,
                      height: pxToDp(17),
                      width: pxToDp(28),
                      backgroundColor: '#ff2d4b',
                      borderRadius: pxToDp(10),
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: pxToDp(16),
                        lineHeight: pxToDp(17),
                      }}
                    />
                  </View>
                  <Icon
                    name={'exit'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>已结束</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 2,
                      height: pxToDp(17),
                      width: pxToDp(28),
                      backgroundColor: '#ff2d4b',
                      borderRadius: pxToDp(10),
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: pxToDp(16),
                        lineHeight: pxToDp(17),
                      }}
                    />
                  </View>
                  <Icon
                    name={'toEvaluate'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>待评价</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 10,
                      height: pxToDp(17),
                      width: pxToDp(28),
                      backgroundColor: '#ff2d4b',
                      borderRadius: pxToDp(10),
                      alignItems: 'center',
                      zIndex: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: '#FFF',
                        fontSize: pxToDp(16),
                        lineHeight: pxToDp(17),
                      }}
                    />
                  </View>
                  <Icon
                    name={'after_sales'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>退款/售后</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.functionCenterStyle}>
            <View
              style={{
                alignSelf: 'flex-start',
                marginLeft: pxToDp(30),
                marginTop: pxToDp(28),
              }}
            >
              <Text style={styles.titleFontStyle}>功能中心</Text>
            </View>
            <View style={styles.mySaleBorder}>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'mycollections'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>我的收藏</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'editor4'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>我的需求</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'wallet'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>我的钱包</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'myResources'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>我的资源</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.hotEventStyle}>
            <View
              style={{
                alignSelf: 'flex-start',
                marginLeft: pxToDp(30),
                marginTop: pxToDp(28),
              }}
            >
              <Text style={styles.titleFontStyle}>热门活动</Text>
            </View>
            <View style={styles.mySaleBorder}>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'gen'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>众创中心</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'zhouqiao_college'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>舟桥学院</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'event'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>赛事中心</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ItemIcon}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon
                    name={'earphone2'}
                    style={{
                      color: '#FE9E0E',
                      fontSize: pxToDp(50),
                    }}
                  />
                  <Text style={styles.ItemiconText2}>直播中心</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.moreEvent}>
            <View
              style={{
                alignSelf: 'flex-start',
                marginLeft: pxToDp(30),
                marginTop: pxToDp(28),
              }}
            >
              <Text style={styles.titleFontStyle}>更多服务</Text>
            </View>
            <View style={styles.myMore}>
              <View style={styles.everyMore}>
                <TouchableOpacity style={styles.everyMore}>
                  <View>
                    <Text style={styles.textFontStyle}>意见反馈</Text>
                  </View>
                  <Icon
                    name={'right'}
                    style={{
                      color: '#333333FF',
                      fontSize: pxToDp(28),
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.everyMore}>
                <TouchableOpacity style={styles.everyMore}>
                  <View>
                    <Text style={styles.textFontStyle}>客服中心</Text>
                  </View>
                  <Icon
                    name={'right'}
                    style={{
                      color: '#333333FF',
                      fontSize: pxToDp(28),
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.everyMore}>
                <TouchableOpacity style={styles.everyMore}>
                  <View>
                    <Text style={styles.textFontStyle}>设置</Text>
                  </View>
                  <Icon
                    name={'right'}
                    style={{
                      color: '#333333FF',
                      fontSize: pxToDp(28),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Index;

const styles = StyleSheet.create({
  head_bg: {
    width: '100%',
    height: pxToDp(759),
    backgroundColor: '#fca21b',
    alignItems: 'center',
    borderBottomLeftRadius: pxToDp(20),
    borderBottomRightRadius: pxToDp(20),
  },
  headerBox: {
    height: pxToDp(253),
    width: pxToDp(253),
    marginTop: pxToDp(132),
    alignItems: 'center',
    justifyContent: 'center',
  },
  fourIconBorder: {
    width: '90%',
    height: pxToDp(232),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: pxToDp(60),
  },
  ItemIcon: {
    alignItems: 'center',
    flex: 1,
  },
  NumStyle: {
    ...fontStyle('44', '46', '46', 'bold', '#FFFFFFFF'),
  },
  ItemiconText: {
    ...fontStyle('24', '26', '26', 'normal', '#FFE5CDFF'),
    marginTop: pxToDp(10),
  },
  ItemiconText2: {
    fontSize: pxToDp(24),
    marginTop: pxToDp(10),
    color: '#000',
  },
  myOrderStyle: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: pxToDp(232),
    // top: pxToDp(-250),
    marginTop: pxToDp(-200),
    borderRadius: pxToDp(10),
    // backgroundColor: 'pink',
  },
  functionCenterStyle: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: pxToDp(232),
    marginTop: pxToDp(20),
    // top: pxToDp(-500),
    borderRadius: pxToDp(10),
  },
  hotEventStyle: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: pxToDp(232),
    marginTop: pxToDp(20),
    // top: pxToDp(-500),
    borderRadius: pxToDp(10),
  },
  moreEvent: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: pxToDp(350),
    marginTop: pxToDp(20),
    // top: pxToDp(-500),
    borderRadius: pxToDp(10),
  },
  mySaleBorder: {
    marginTop: pxToDp(20),
    width: '90%',
    borderRadius: pxToDp(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  myMore: {
    marginTop: pxToDp(20),
    width: '90%',
    borderRadius: pxToDp(20),
    flexDirection: 'column',
    alignItems: 'center',
  },
  everyMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: pxToDp(20),
  },
  titleFontStyle: {
    ...fontStyle('30', '32', '32', 'bold', '#333333FF'),
  },
  textFontStyle: {
    ...fontStyle('28', '30', '30', 'normal', '#333333FF'),
  },
});
