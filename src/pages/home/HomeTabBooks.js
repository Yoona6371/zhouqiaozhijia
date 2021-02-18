import React, { PureComponent } from 'react';
import { FlatList, ScrollView } from 'react-native';
import BookCard from '../../components/bussiness/BookCard';
import { pxToDp } from '../../utils/pxToDp';
import { flexColumnSpb, padding } from '../../utils/StyleUtils';

export default class HomeTabBooks extends PureComponent {
  state = {
    shoppingData: [],
  };

  componentDidMount() {
    this.setState({
      shoppingData: [
        { prince: 666, Title: 'One Plus 7' },
        { prince: 666, Title: 'One Plus 7' },
        { prince: 666, Title: 'One Plus 7' },
        { prince: 666, Title: 'One Plus 7' },
        { prince: 666, Title: 'One Plus 7' },
        { prince: 666, Title: 'One Plus 7' },
      ],
    });
  }

  render() {
    const { shoppingData } = this.state;
    return (
      <ScrollView style={{ marginTop: pxToDp(35) }}>
        {/*商品列表开始*/}
        <FlatList
          data={shoppingData}
          contentContainerStyle={{ backgroundColor: '#fff' }}
          renderItem={({ item, index }) => (
            <BookCard
              key={index}
              bookImage={{
                uri:
                  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
              }}
            />
          )}
        />
        {/*商品列表结束*/}
      </ScrollView>
    );
  }
}
