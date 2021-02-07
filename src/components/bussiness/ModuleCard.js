import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';
import { activeOpacity } from '../../constants/config';

import {
    fontStyle,
    margin,
} from '../../utils/StyleUtils';


/**
 * buttonColor可以选择的值：
 * "#fe7600" 橘黄色
 * "#5816fe" 蓝紫色
 * "#0067fe" 天蓝色
 * "#00b858" 绿色
 */

class moduleCard extends Component {
    static propTypes = {
        image: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        name: PropTypes.string,
        router: PropTypes.string,
        buttonColor: PropTypes.string,
    }

    static defaultProps = {
        name: "舟桥学院",
        buttonColor: '#5816fe',
    };

    constructor(props) {
        super(props);
    };

    render() {
        const { image, name, router, buttonColor } = this.props;
        return (
            <View style={styles.moduleCard__wrap}>
                {/* 背景图片部分 */}
                <Image
                    style={{
                        resizeMode: "cover",
                        height: pxToDp(300),
                        width: pxToDp(230),
                    }}
                    source={image}
                >
                </Image>
                {/* 舟桥学院和Go部分 */}
                <View style={{
                    position: 'absolute',
                    width: pxToDp(150),
                    top: pxToDp(145),
                    left: pxToDp(40),
                }}>
                    {/* 舟桥学院 */}
                    <View><Text
                        style={{
                            ...fontStyle(33, 50, 50, 'normal', 'white', 'center'),
                            letterSpacing: pxToDp(3),
                        }}
                    >{name}</Text></View>

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
                            <Text style={{ lineHeight: pxToDp(47), color: 'white', fontSize: pxToDp(29), textAlign: 'center' }}>
                                GO
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

export default moduleCard;

const styles = StyleSheet.create({
    moduleCard__wrap: {
        position: 'relative',
        width: pxToDp(230),
        height: pxToDp(300),
        backgroundColor: 'blue',
        borderRadius: pxToDp(10),
        overflow: 'hidden',
        ...margin(10, 10, 10, 10),
    }
});