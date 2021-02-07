import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Avatar from '../common/Avatar';
import PropTypes from 'prop-types';
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

const COLORARRAY = [
    '#E74C3C',
    '#6BB9F0',
    '#BF55EC',
    '#F84975',
    '#2ECC71',
    '#F9690E',
    '#F9BF3B',
    '#03C9A9',
    '#ff4960',
];

class CourseCard extends Component {

    static propTypes = {
        courseImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        avatar: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        avatarText: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        name: PropTypes.string,
        money: PropTypes.number,
        isVip: PropTypes.bool,
    };

    static defaultProps = {
        title: 'logo设计品牌思维实战简介',
        description: '#品牌设计 #进阶拔高',
        name: '舟桥',
        money: 4300,
        isVip: false,
    };

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log('跳转到课程');
    }

    render() {
        const { courseImage, avatar, avatarText, title, description, name, money, isVip } = this.props;
        return (
            <View style={styles.courseCard__wrap}>
                <TouchableOpacity
                    activeOpacity={activeOpacity}
                    onPress={() => this.handleClick()}
                    style={{ ...flexRowCenter }}
                >
                    <Image
                        style={{
                            resizeMode: "cover",
                            height: pxToDp(240),
                            width: pxToDp(318),
                        }}
                        source={courseImage}
                    ></Image>
                </TouchableOpacity>
                <View style={styles.courseCard__courseBottom}>
                    <View style={styles.courseCard__title}>
                        <TouchableOpacity
                            activeOpacity={activeOpacity}
                            onPress={() => this.handleClick()}
                            style={{ ...flexRowCenter }}
                        >
                            <Text numberOfLines={1}
                                style={{
                                    ...fontStyle(30, 50, 32, 'normal', 'black', 'left'),
                                    lineHeight: pxToDp(40),
                                }}>
                                {title}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.courseCard__des}>
                        <Text style={{
                            ...fontStyle(25, 50, 32, 'normal', COLORARRAY[6], 'left'),
                            lineHeight: pxToDp(50),
                        }}>
                            {description}
                        </Text>
                    </View>
                    <View style={styles.courseCard__footer}>
                        <View style={styles.courseCard__user}>
                            <View style={styles.courseCard__userAvatar}>
                                <Avatar isVip={isVip} image={avatar} size={50} text={avatarText} />
                            </View>
                            <View style={styles.courseCard__userName}><Text style={{
                                ...fontStyle(22, 50, 32, 'normal', 'grey', 'left'),
                                lineHeight: pxToDp(50),
                            }}>{name}</Text></View>
                        </View>
                        <View style={styles.courseCard__money}>
                            <Text style={{
                                ...fontStyle(20, 50, 32, 'normal', COLORARRAY[8], 'left'),
                                lineHeight: pxToDp(50),
                            }}>￥</Text>
                            <Text style={{
                                ...fontStyle(40, 50, 32, 'normal', COLORARRAY[8], 'left'),
                                lineHeight: pxToDp(50),
                            }}>{money}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
};

export default CourseCard;

const styles = StyleSheet.create({
    courseCard__wrap: {
        width: pxToDp(320),
        height: pxToDp(414),
        borderWidth: pxToDp(1),
        borderStyle: 'dotted',
        borderColor: 'grey',
        borderRadius: pxToDp(10),
        overflow: 'hidden',

        //盒子阴影
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 1,

        ...margin(30, 30, 15, 30),
    },

    courseCard__courseImg: {
        width: pxToDp(320),
        height: pxToDp(240),
    },

    courseCard__courseBottom: {
        width: pxToDp(290),
        height: pxToDp(150),
        ...margin(15, 15, 15, 15),
    },
    courseCard__title: {
        height: pxToDp(40),
    },

    courseCard__des: {
        height: pxToDp(50),
    },

    courseCard__footer: {
        height: pxToDp(60),
        ...flexRowSpb,
    },

    courseCard__user: {
        ...flexRowCenter
    },

    courseCard__userAvatar: {
        marginTop: pxToDp(10),
        marginLeft: pxToDp(3),
        width: pxToDp(60),
        height: pxToDp(60),
    },

    courseCard__userName: {},

    courseCard__money: {
        ...flexRowCenter,
    },
});
