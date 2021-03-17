import React, { Component } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import RankCard from '../../components/bussiness/rankCard/rankCard'
import RankCardTop3 from '../../components/bussiness/rankCard/rankCardTop3'
import TopTabNavigator from '../../components/common/TopTabNavigator/index'
import { pxToDp } from '../../utils/pxToDp'
class dayRank extends Component {
    render() {
        return (
            <View >
                <View style={{ height: pxToDp(50), width: pxToDp(50), backgroundColor: "#FF7200", position: 'absolute', right: 0, top: 0 }}></View>
                <View style={{ height: pxToDp(50), width: pxToDp(50), backgroundColor: "#FF7200", position: 'absolute', left: 0, top: 0 }}></View>
                <View style={{ backgroundColor: "#Fafafa", borderTopRightRadius: pxToDp(40), borderTopLeftRadius: pxToDp(40) }}>
                    <ScrollView>
                        <RankCard
                            rankNumber="04"
                            userPhoto='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F0801%2F20110801111724537.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614743658&t=d8b2e5e37cdd5eb3ddd09d149f3b892e'
                            userName="小焦同学"
                            hot="6669"
                            onPress={() => alert('哎，关注我')}></RankCard >
                        <RankCard
                            rankNumber="04"
                            userPhoto='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F0801%2F20110801111724537.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614743658&t=d8b2e5e37cdd5eb3ddd09d149f3b892e'
                            userName="小焦同学"
                            hot="6669"
                            onPress={() => alert('哎，关注我')}></RankCard >
                        <RankCard
                            rankNumber="04"
                            userPhoto='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F0801%2F20110801111724537.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614743658&t=d8b2e5e37cdd5eb3ddd09d149f3b892e'
                            userName="小焦同学"
                            hot="6669"
                            onPress={() => alert('哎，关注我')}></RankCard >
                        <RankCard
                            rankNumber="04"
                            userPhoto='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F0801%2F20110801111724537.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614743658&t=d8b2e5e37cdd5eb3ddd09d149f3b892e'
                            userName="小焦同学"
                            hot="6669"
                            onPress={() => alert('哎，关注我')}></RankCard >
                        <View style={{ height: pxToDp(500) }}></View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
class monthRank extends Component {
    render() {
        return (
            <View>
                <View style={{ height: pxToDp(50), width: pxToDp(50), backgroundColor: "#FF7200", position: 'absolute', right: 0, top: 0 }}></View>
                <View style={{ height: pxToDp(50), width: pxToDp(50), backgroundColor: "#FF7200", position: 'absolute', left: 0, top: 0 }}></View>
                <View style={{ backgroundColor: "#Fafafa", borderTopRightRadius: pxToDp(40), borderTopLeftRadius: pxToDp(40) }}>
                    <ScrollView>
                        <RankCard
                            rankNumber="04"
                            userPhoto='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F0801%2F20110801111724537.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614743658&t=d8b2e5e37cdd5eb3ddd09d149f3b892e'
                            userName="小焦同学"
                            hot="6669"
                            onPress={() => alert('哎，关注我')}></RankCard >
                        <View style={{ height: pxToDp(500) }}></View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
class weekRank extends Component {
    render() {
        return (
            <View>
                <View style={{ height: pxToDp(50), width: pxToDp(50), backgroundColor: "#FF7200", position: 'absolute', right: 0, top: 0 }}></View>
                <View style={{ height: pxToDp(50), width: pxToDp(50), backgroundColor: "#FF7200", position: 'absolute', left: 0, top: 0 }}></View>
                <View style={{ backgroundColor: "#Fafafa", borderTopRightRadius: pxToDp(40), borderTopLeftRadius: pxToDp(40) }}>
                    <ScrollView>
                        <RankCard
                            rankNumber="04"
                            userPhoto='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile01.16sucai.com%2Fd%2Ffile%2F2011%2F0801%2F20110801111724537.jpg&refer=http%3A%2F%2Ffile01.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614743658&t=d8b2e5e37cdd5eb3ddd09d149f3b892e'
                            userName="小焦同学"
                            hot="6669"
                            onPress={() => alert('哎，关注我')}></RankCard >
                        <View style={{ height: pxToDp(500) }}></View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export class index extends Component {
    state = {
        pages: [
            {
                key: '日榜',
                title: '日榜',
                component: dayRank,
            },
            {
                key: '周榜',
                title: '周榜',
                component: weekRank,
            },
            {
                key: '月榜',
                title: '月榜',
                component: monthRank,
            },
        ],
    }
    MyTabs = () => {
        const widthPhone = Dimensions.get('window').width
        let { pages } = this.state;
        return (
            <TopTabNavigator
                ifScrollEnabled={true}
                type={4}
                itemWidth={widthPhone / 3}
                routes={pages}
            />
        );
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <RankCardTop3
                    name_1="你好李焕英"
                    name_2="唐人街二"
                    name_3="刺杀敌敌畏"
                    hot_1="10000"
                    hot_2="6666"
                    hot_3="5523"
                    click_1={() => alert('谢谢关注榜一大哥')}
                    click_2={() => alert('谢谢关注榜二大哥')}
                    click_3={() => alert('谢谢关注榜三大哥')}
                    uri_1="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4220895789,2906774320&fm=11&gp=0.jpg"
                    uri_2="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1703060581,1310961847&fm=26&gp=0.jpg"
                    uri_3="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3682912314,2610813727&fm=26&gp=0.jpg"
                ></RankCardTop3>
                <View style={{ flex: 1, marginTop: pxToDp(-100) }}>
                    {this.MyTabs()}
                </View>
            </View >
        )
    }
}

export default (index)
