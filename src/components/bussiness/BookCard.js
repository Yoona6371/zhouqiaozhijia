import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import { pxToDp } from '../../utils/pxToDp';

import {
    flexColumnSpb,
    flexRowCenter,
    flexRowSpb,
    fontStyle,
    margin,
    padding,
} from '../../utils/StyleUtils';

import { activeOpacity } from '../../constants/config';

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

class BookCard extends Component {
    static PropTypes = {
        bookImage: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
        title: PropTypes.string,
        chapterNum: PropTypes.number,
        peopleNum: PropTypes.number,
    };

    static defaultProps = {
        title: '用设计解决问题',
        chapterNum: 19,
        peopleNum: 999999,
    };

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        console.log('跳转到该书籍');
    }

    bookCard__peopleNum = () => {
        if (this.props.peopleNum < 10000)
            return this.props.peopleNum;
        else return (Math.floor((this.props.peopleNum) / 10000)).toString() + 'W+';
    }

    render() {
        const { bookImage, title, description, chapterNum, peopleNum } = this.props;
        return (
            <View style={styles.bookCard__wrap}>
                <View style={styles.bookCard__book}>
                    <Image
                        style={{
                            resizeMode: "cover",
                            height: pxToDp(190),
                            width: pxToDp(150),
                        }}
                        source={bookImage}
                    /></View>
                <View style={styles.bookCard__bookDes}>
                    <Text style={{
                        letterSpacing: pxToDp(2.5),
                        ...fontStyle(28, 84, 45, '700', 'black', 'left'),
                        width: pxToDp(370),
                    }}>{title}</Text>
                    <Text style={{
                        marginRight: pxToDp(-50),
                        width: pxToDp(420),
                        ...fontStyle(22, 30, 32, 'normal', 'grey', 'left')
                    }}>{chapterNum}个章节 | {this.bookCard__peopleNum()}人已学习该书籍</Text>
                </View>
                <View style={styles.bookCard__button}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#FFD801', '#ffc005', '#e6ad05']}
                        style={{
                            width: pxToDp(110),
                            height: pxToDp(60),
                            borderBottomLeftRadius: pxToDp(30),
                            borderTopRightRadius: pxToDp(30),
                            borderBottomRightRadius: pxToDp(30),
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={activeOpacity}
                            onPress={() => this.handleClick()}
                            style={{ ...flexRowCenter }}
                        >
                            <Text style={{ lineHeight: pxToDp(55), color: 'white', fontSize: pxToDp(26) }}>
                                详情
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
        );
    }
};

export default BookCard;

const styles = StyleSheet.create({
    bookCard__wrap: {
        width: pxToDp(660),
        height: pxToDp(220),
        borderWidth: pxToDp(1),
        borderStyle: 'dotted',
        borderColor: 'white',
        borderRadius: pxToDp(10),

        //盒子阴影
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 0.5,

        ...margin(0, 0, 0, 15),
        ...padding(15, 15, 15, 15),
        ...flexRowSpb,
    },
    bookCard__book: {
        flex: 1.3,
        borderRadius: pxToDp(10),
        overflow: 'hidden',
        backgroundColor: 'green',
    },
    bookCard__bookDes: {
        flex: 3,
        height: pxToDp(115),
        marginLeft: pxToDp(40),
        ...flexColumnSpb,
    },
    bookCard__button: {
        flex: 1,
        height: pxToDp(230),
        ...padding(0, 20, 0, 0),
    }
});