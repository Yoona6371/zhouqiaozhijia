import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';
import { activeOpacity } from '../../constants/config';

import { flexColumnSpb, flexRowSpb, fontStyle, margin } from '../../utils/StyleUtils';

/**
 * buttonColor可以选择的值：
 * "#fe7600" 橘黄色
 * "#5816fe" 蓝紫色
 * "#0067fe" 天蓝色
 * "#00b858" 绿色
 */

class ModuleCard extends Component {
    static propTypes = {
        image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        name: PropTypes.string,
        router: PropTypes.string,
        buttonColor: PropTypes.string,
    };

    static defaultProps = {
        name: '舟桥学院',
        buttonColor: '#5816fe',
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { image, name, router, buttonColor } = this.props;
        return (
            <View style={styles.moduleCard__wrap}>
                {/* 背景图片部分 */}
                <Image
                    style={{
                        resizeMode: 'cover',
                        height: pxToDp(270),
                        width: pxToDp(200),
                    }}
                    source={image}
                ></Image>
                {/* 舟桥学院和Go部分 */}
                <View
                    style={{
                        position: 'absolute',
                        width: pxToDp(150),
                        top: pxToDp(130),
                        left: pxToDp(26),
                    }}
                >
                    {/* 舟桥学院 */}
                    <View>
                        <Text
                            style={{
                                ...fontStyle(33, 50, 50, 'normal', 'white', 'center'),
                                letterSpacing: pxToDp(3),
                            }}
                        >
                            {name}
                        </Text>
                    </View>

                    {/* GO部分 */}
                    <TouchableOpacity
                        style={{
                            backgroundColor: buttonColor,
                            width: pxToDp(110),
                            height: pxToDp(50),
                            borderRadius: pxToDp(25),
                            ...margin(24, 18, 0, 0),
                        }}
                        activeOpacity={activeOpacity}
                        onPress={() => NavigationHelper.navigate(router)}
                    >
                        <View>
                            <Text
                                style={{
                                    lineHeight: pxToDp(47),
                                    color: 'white',
                                    fontSize: pxToDp(29),
                                    textAlign: 'center',
                                }}
                            >
                                GO
              </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

class Real__ModuleCard extends Component {
    render() {
        return (
            <View style={{
                ...flexRowSpb
            }}>
                <ScrollView horizontal={true}>
                    <ModuleCard image={{ uri: "https://pic3.zhimg.com/v2-9142a39322cb4ef3a72ba12ff89cd46e_r.jpg" }} name='舟桥学院' buttonColor='#fe7600' />
                    <ModuleCard image={{ uri: "https://pic3.zhimg.com/v2-9142a39322cb4ef3a72ba12ff89cd46e_r.jpg" }} name='实训' buttonColor='#5816fe' />
                    <ModuleCard image={{ uri: "https://pic3.zhimg.com/v2-9142a39322cb4ef3a72ba12ff89cd46e_r.jpg" }} name='实训' buttonColor='#0067fe' />
                    <ModuleCard image={{ uri: "https://pic3.zhimg.com/v2-9142a39322cb4ef3a72ba12ff89cd46e_r.jpg" }} name='工艺设计' buttonColor='#00b858' />
                </ScrollView>
            </View>
        )
    }
}

export default Real__ModuleCard;

const styles = StyleSheet.create({
    moduleCard__wrap: {
        position: 'relative',
        width: pxToDp(200),
        height: pxToDp(270),
        backgroundColor: 'blue',
        borderRadius: pxToDp(10),
        overflow: 'hidden',
        ...margin(10, 10, 10, 10),
    },
});
