import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { pxToDp } from '../../utils/pxToDp';
import DynamicList from '../../components/bussiness/DynamicList';
import CommentCard from '../../components/bussiness/commentCard';

class DynamicDetail extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          father: {
            comment:
              '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
            likeNumber: 25,
            type: 'father', //默认type：father
            date: '2020-02-03 12:53',
            key: '1',
          },
          child: '',
        },
        {
          father: {
            comment:
              '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
            likeNumber: 25,
            type: 'father', //默认type：father
            date: '2020-02-03 12:53',
          },
          child: {
            hh: [
              {
                comment:
                  '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
                type: 'child',
                date: '2020-02-03 12:53',
              },
              {
                comment:
                  '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
                type: 'child',
                date: '2020-02-03 12:53',
              },
              {
                comment:
                  '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
                type: 'child',
                date: '2020-02-03 12:53',
              },
            ],
          },
        },
      ],
    };
  }

  render() {
    var childData = {
      list: [
        {
          comment:
            '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
          type: 'child',
          date: '2020-02-03 12:53',
        },
        {
          comment:
            '这个想法太棒了，这是我现金位置看到的做好看的页面，没有之一。你是做棒的，加油呀！！！我相信你可以做的更好。 ',
          type: 'child',
          date: '2020-02-03 12:53',
        },
      ],
    };
    return (
      <View>
        <ScrollView>
          {/*动态 开始*/}
          <View style={{ marginBottom: pxToDp(20) }}>
            <DynamicList />
          </View>
          {/*动态 结束*/}
          {/*  评论开始*/}
          <View>
            <FlatList
              data={this.state.list}
              initialNumToRender={5}
              renderItem={({ item }) => {
                return (
                  <CommentCard
                    comment={item.father.comment}
                    likeNumber={item.father.likeNumber}
                    date={item.father.date}
                    type={item.father.type}
                  >
                    {this.state.list.child === '' ? (
                      <View />
                    ) : (
                      <View>
                        <FlatList
                          data={childData.list}
                          initialNumToRender={5}
                          renderItem={({ item }) => {
                            return (
                              <CommentCard
                                type={item.type}
                                date={item.date}
                                comment={item.comment}
                              />
                            );
                          }}
                        />
                      </View>
                    )}
                  </CommentCard>
                );
              }}
            />
          </View>
          {/*  评论结束*/}
        </ScrollView>
      </View>
    );
  }
}
export default DynamicDetail;
