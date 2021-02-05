import React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import DynamicList from '../../components/bussiness/DynamicList';
class DynamicLists extends React.Component {
  static navigationOptions = { title: null };

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      dynamicDate: [
        {
          DynamicUserName: '阿甘',
          DynamicText:
            '宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，',
          DynamicLabelLists: ['突发奇想', '宋老狗'],
          CollectionNum: 700,
          CommentNum: 665,
          FabulousNum: 664,
          timeGo: '一分钟',
        },
        {
          DynamicUserName: '阿甘',
          DynamicText:
            '宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，',
          DynamicLabelLists: ['突发奇想', '宋老狗'],
          CollectionNum: 700,
          CommentNum: 665,
          FabulousNum: 664,
          timeGo: '一分钟',
        },
        {
          DynamicUserName: '阿甘',
          DynamicText:
            '宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，宋老狗，',
          DynamicLabelLists: ['突发奇想', '宋老狗'],
          CollectionNum: 700,
          CommentNum: 665,
          FabulousNum: 664,
          timeGo: '一分钟',
        },
      ],
    });
  }
  render() {
    const { dynamicDate } = this.state;
    return (
      <View>
        <View>
          <FlatList
            data={dynamicDate}
            renderItem={({ item, index }) => (
              <DynamicList DynamicUserName={item.DynamicUserName} />
            )}
          />
        </View>
      </View>
    );
  }
}

export default DynamicLists;

const styles = StyleSheet.create({});
