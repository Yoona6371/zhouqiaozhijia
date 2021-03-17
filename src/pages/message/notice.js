import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from '../../components/common/Icon';
import { margin, fontStyle, padding } from '../../utils/StyleUtils';
import { pxToDp } from '../../utils/pxToDp';
import NoticeCard from '../../components/bussiness/message/NoticeCard';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState({
      list: [
        {
          type: 1,
          time: '2021-02-01 10:18',
        },
        {
          type: 1,
          time: '2021-02-01 10:18',
        },
        {
          type: 2,
          time: '2021-02-01 10:18',
        },
        {
          type: 2,
          time: '2021-02-01 10:18',
        },
        {
          type: 2,
          time: '2021-02-01 10:18',
        },
        {
          type: 2,
          time: '2021-02-01 10:18',
        },
        {
          type: 2,
          time: '2021-02-01 10:18',
        },
      ],
    });
  }

  render() {
    let { list } = this.state;
    return (
      <View>
        <View style={{ backgroundColor: '#fff' }}>
          <TouchableOpacity
            style={styles.notice__wrap}
            onPress={() => NavigationHelper.goBack()}
          >
            <Icon name={'back'} />
            <Text style={styles.notice_title}>通知消息</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={list}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: pxToDp(200) }}
          renderItem={({ item, index }) => (
            <NoticeCard
              type={item.type}
              time={item.time}
              key={index}
              style={{ margin: pxToDp(35) }}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notice__wrap: {
    ...margin(30, 115, 0, 27),
    flexDirection: 'row',
  },
  notice_title: {
    ...fontStyle(34, 36, 36, 'bold', '#333'),
    marginLeft: pxToDp(30),
  },
  notice_content: {
    // flexDirection: 'column-reverse',
  },
});

export default Index;
