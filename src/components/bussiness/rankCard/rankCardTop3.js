// 例子:<RankCardTop3
// name_1="你好李焕英"
// name_2="唐人街二"
// name_3="刺杀敌敌畏"
// hot_1="10000"
// hot_2="6666"
// hot_3="5523"
// click_1={() => alert('谢谢关注榜一大哥')}
// click_2={() => alert('谢谢关注榜二大哥')}
// click_3={() => alert('谢谢关注榜三大哥')}
// uri_1="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4220895789,2906774320&fm=11&gp=0.jpg"
// uri_2="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1703060581,1310961847&fm=26&gp=0.jpg"
// uri_3="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3682912314,2610813727&fm=26&gp=0.jpg"
// ></RankCardTop3>
import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { pxToDp } from '../../../utils/pxToDp'
import PropTypes from 'prop-types'
export class rankCardTop3 extends Component {
    static propTypes = {
        name_1: PropTypes.string.isRequired,
        name_2: PropTypes.string.isRequired,
        name_3: PropTypes.string.isRequired,
        hot_1: PropTypes.string.isRequired,
        hot_2: PropTypes.string.isRequired,
        hot_3: PropTypes.string.isRequired,
        click_1: PropTypes.func.isRequired,
        click_2: PropTypes.func.isRequired,
        click_3: PropTypes.func.isRequired,
        uri_1: PropTypes.string.isRequired,
        uri_2: PropTypes.string.isRequired,
        uri_3: PropTypes.string.isRequired,
    }
    render() {
        const { name_1, name_2, name_3, hot_1, hot_2, hot_3, click_1, click_2, click_3, uri_1, uri_2, uri_3 } = this.props;
        return (
            <View>
                <ImageBackground style={{ width: '100%', height: pxToDp(900) }} source={require('../../../asserts/images/rankBG.png')}>
                    <Text style={styles.title}>设计师人气榜单</Text>
                    <View style={styles.rank3}>
                        <View style={styles.rank3_2}>
                            <View style={styles.whiteCircle}>
                                <Image style={styles.photo2} source={{ uri: uri_1 }}></Image>
                                <Image style={styles.photo2_icon} source={require('../../../asserts/images/rank_2.png')}></Image>
                            </View>
                            <Text numberOfLines={1} style={styles.name2}>{name_2}</Text>
                            <TouchableOpacity onPress={click_2} style={styles.btn}>
                                <Text style={styles.Btn_txt}>关注</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rank3_1}>
                            <View style={styles.whiteCircle_1}>
                                <Image style={styles.photo1} source={{ uri: uri_2 }}></Image>
                                <Image style={styles.photo1_icon} source={require('../../../asserts/images/rank_1.png')}></Image>
                            </View>
                            <Text numberOfLines={1} style={styles.name1}>{name_1}</Text>
                            <TouchableOpacity onPress={click_1} style={styles.btn}>
                                <Text style={styles.Btn_txt}>关注</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rank3_3}>
                            <View style={styles.whiteCircle}>
                                <Image style={styles.photo2} source={{ uri: uri_3 }}></Image>
                                <Image style={styles.photo2_icon} source={require('../../../asserts/images/rank_3.png')}></Image>
                            </View>
                            <Text numberOfLines={1} style={styles.name2}>{name_3}</Text>
                            <TouchableOpacity onPress={click_3} style={styles.btn}>
                                <Text style={styles.Btn_txt}>关注</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ImageBackground style={styles.rank_taizi} source={require('../../../asserts/images/rank_taizi.png')}>
                        {/* <Text style={styles.hotNum2}>839</Text>
                        <Text style={styles.hotNum1}>999</Text>
                        <Text style={styles.hotNum3}>654</Text> */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ alignItems: 'center', flex: 1, height: pxToDp(200) }}>
                                <Text style={styles.hotNum2}>{hot_2}</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1, height: pxToDp(200) }}>
                                <Text style={styles.hotNum1}>{hot_1}</Text>
                            </View>
                            <View style={{ alignItems: 'center', flex: 1, height: pxToDp(200) }}>
                                <Text style={styles.hotNum3}>{hot_3}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        color: '#fff',
        marginTop: pxToDp(115),
        alignSelf: 'center',
        fontWeight: '700',
        fontSize: pxToDp(38)
    },
    rank3: {
        flexDirection: 'row',
        marginTop: pxToDp(66)
    },
    rank3_2: {
        marginTop: pxToDp(70),
        height: pxToDp(500),
        width: pxToDp(200),
        flex: 1,
        alignItems: 'center',
        height: pxToDp(270)
    },
    rank3_1: {
        width: pxToDp(200),
        flex: 1,
        alignItems: 'center',
        height: pxToDp(0)
    },
    rank3_3: {
        marginTop: pxToDp(110),
        width: pxToDp(200),
        flex: 1,
        alignItems: 'center',
        height: pxToDp(0)
    },
    photo2: {
        width: pxToDp(130),
        height: pxToDp(130),
        borderRadius: pxToDp(999)
    },
    photo1: {
        width: pxToDp(148),
        height: pxToDp(148),
        borderRadius: pxToDp(999)
    },
    photo2_icon: {
        height: pxToDp(67),
        width: pxToDp(59),
        position: 'absolute',
        top: pxToDp(108),
        left: pxToDp(42)
    },
    photo1_icon: {
        height: pxToDp(81),
        width: pxToDp(72),
        position: 'absolute',
        top: pxToDp(118),
        left: pxToDp(46)
    },
    whiteCircle: {
        height: pxToDp(144),
        width: pxToDp(144),
        borderRadius: pxToDp(9999),
        borderWidth: pxToDp(2),
        borderColor: '#FFF',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteCircle_1: {
        height: pxToDp(163),
        width: pxToDp(162),
        borderRadius: pxToDp(9999),
        borderWidth: pxToDp(2),
        borderColor: '#FFF',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name2: {
        color: '#FFF',
        marginTop: pxToDp(190),
        fontSize: pxToDp(32),
        fontWeight: "700"
    },
    name1: {
        color: '#FFF',
        marginTop: pxToDp(210),
        fontSize: pxToDp(32),
        fontWeight: "700"
    },
    btn: {
        height: pxToDp(42),
        width: pxToDp(90),
        borderWidth: pxToDp(1),
        borderRadius: pxToDp(40),
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: pxToDp(19)
    },
    Btn_txt: {
        color: "#FFF",
        fontSize: pxToDp(25),
        fontWeight: '500',
        opacity: 0.72,
    },
    rank_taizi: {
        width: '100%',
        height: pxToDp(240)
    },
    hotNum1: {
        color: "#FFF",
        fontSize: pxToDp(44),
        fontWeight: '700',
        marginTop: pxToDp(32)
    },
    hotNum2: {
        color: "#FFF",
        fontSize: pxToDp(44),
        fontWeight: '700',
        marginTop: pxToDp(90)
    },
    hotNum3: {
        color: "#FFF",
        fontSize: pxToDp(44),
        fontWeight: '700',
        marginTop: pxToDp(130)
    },

})
export default (rankCardTop3)
