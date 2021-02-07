import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { pxToDp } from '../../utils/pxToDp';
import { fontStyle } from '../../utils/StyleUtils';
import LabelCard from '../../components/bussiness/LabelCard';
import Icon from '../../components/common/Icon';
class DynamicRelease extends React.Component {
  static navigationOptions = { title: null };

  constructor(props) {
    super(props);
    this.state = {
      labelData: [
        { typeText: '生活记录' },
        { typeText: '美味' },
        { typeText: '这是我人生第一次' },
        { typeText: '在家敲代码的时光记录，希望可以更好' },
        { typeText: '冲冲冲' },
      ],
      photoLists: [],
    };
  }
  render() {
    const { labelData, photoLists } = this.state;
    return (
      <View>
        <View style={styles.DynamicBox}>
          <TextInput
            multiline={true}
            placeholder={'记录这一刻，晒给懂你的人..'}
            style={styles.DynamicInput}
          />
          {/*点击按钮，添加图片*/}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {photoLists.map((item) => {
              return (
                <View
                  style={{
                    width: pxToDp(136),
                    height: pxToDp(136),
                    backgroundColor: 'pink',
                  }}
                >
                  {item.key}
                </View>
              );
            })}
            <TouchableOpacity
              style={styles.addPhoto}
              onPress={() => alert('添加图片喽')}
            >
              <Icon name={'add'} style={{ fontSize: pxToDp(70) }} />
              <Text style={{ color: '#999999FF' }}>上传图片</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*添加标签开始*/}
        <View>
          <View style={styles.addLabelBox}>
            <Text style={styles.addLabelTextLeft}># 添加标签</Text>
            <Icon name={'right'} style={styles.addLabelTextRight} />
          </View>
          <View style={styles.labelBox}>
            {labelData.map((item) => (
              <LabelCard typeText={item.typeText} />
            ))}
          </View>
          <View style={styles.releaseBoxLayout}>
            <TouchableOpacity style={styles.releaseBtn}>
              <Text style={styles.releaseText}>发布</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default DynamicRelease;

const styles = StyleSheet.create({
  DynamicBox: {
    height: pxToDp(494),
    backgroundColor: '#FFFFFFFF',
    flexDirection: 'column',
    position: 'relative',
  },
  DynamicInput: {
    paddingLeft: pxToDp(31),
    paddingVertical: pxToDp(0),
  },
  addPhoto: {
    width: pxToDp(136),
    height: pxToDp(136),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F8FF',
    // alignSelf: 'flex-start',
    // position: 'absolute',
    // bottom: pxToDp(40),
    // left: pxToDp(30),
  },
  addLabelBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addLabelTextLeft: {
    ...fontStyle(30, 32, 32, 'bold', '#333333FF'),
    marginTop: pxToDp(36),
    marginLeft: pxToDp(30),
  },
  addLabelTextRight: {
    marginTop: pxToDp(36),
    marginRight: pxToDp(30),
  },
  labelBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  releaseBoxLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  releaseBtn: {
    width: pxToDp(470),
    height: pxToDp(88),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC305FF',
    borderRadius: pxToDp(50),
    marginTop: pxToDp(209),
  },
  releaseText: {
    ...fontStyle(30, 32, 32, 'bold', '#FFFFFF'),
  },
});
