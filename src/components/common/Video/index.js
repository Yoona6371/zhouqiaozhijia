import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
// 屏幕方向锁定: 他需要改变 原来Android文件代码，当然适配两端的话，IOS也是需要更改的。
import Orientation from 'react-native-orientation-locker';
import { deviceHeightDp, deviceWidthDp, pxToDp } from '../../../utils/pxToDp';
import { onDoublePress } from '../../../utils/onDoublePress';
// import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData';

let screenWidth = deviceWidthDp;
let screenHeight = deviceHeightDp;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: props.uri,
      isPaused: true, //是暂停
      duration: 0, //总时长
      currentTime: 0, //当前播放时间
      sliderValue: 0, //进度条的进度
      rate: 1,

      //slider属性
      sliderWidth: screenWidth * 0.5,
      sliderHeight: pxToDp(40),
      //用来控制进入全屏的属性
      videoWidth: screenWidth,
      videoHeight: pxToDp(226),
      isFullScreen: false,
      isVisiblePausedSliderFullScreen: false,
    };
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = () => {
    this.setState({
      isFullScreen: false,
      videoWidth: screenWidth,
      videoHeight: pxToDp(226),
      sliderWidth: screenWidth * 0.5,
    });
    Orientation.lockToPortrait();
    return true;
  };
  changePausedState = () => {
    this.setState({
      isPaused: !this.state.isPaused,
    });
  };
  _changePauseSliderFullState = () => {
    // 事件，是否显示 “暂停、进度条、全屏按钮 盒子”
    if (onDoublePress()) {
      this.setState({
        isPaused: !this.state.isPaused,
      });
    }
    clearTimeout(timeID);
    if (this.state.isVisiblePausedSliderFullScreen) {
      this.setState({ isVisiblePausedSliderFullScreen: false });
    } else {
      this.setState({ isVisiblePausedSliderFullScreen: true });
      var timeID = setTimeout(() => {
        this.setState({ isVisiblePausedSliderFullScreen: false });
      }, 5000);
    }
  };
  //格式化音乐播放的时间为0：00。借助onProgress的定时器调用，更新当前时间
  formatMediaTime = (time) => {
    time = parseInt(time, 10);
    let hours = Math.floor(time / 3600);
    let minute = Math.floor(time / 60) - hours;
    let second = time % 60;
    minute = minute > 9 ? minute : '0' + minute;
    second = second > 9 ? second : '0' + second;
    hours = hours > 9 ? hours : '0' + hours;
    return (hours ? hours : '') + ':' + minute + ':' + second;
  };
  //加载视频调用，主要是拿到 “总时间”，并格式化
  customerOnload = (e) => {
    this.setState({
      duration: e.duration,
    });
  };
  // 获得当前的，播放时间数，但这个数是0.104，需要处理
  customerOnprogress = (e) => {
    let time = e.currentTime; // 获取播放视频的秒数
    this.setState({
      currentTime: time,
      sliderValue: time,
    });
  };
  // 移动滑块，改变视频播放进度
  customerSliderValue = (value) => {
    this.player.seek(value);
  };
  enterFullScreen = () => {
    if (!this.state.isFullScreen) {
      //1.改变宽高  2.允许进入全屏模式  3.如何配置屏幕旋转,不需要改变进度条盒子的显示和隐藏
      this.setState({
        videoWidth: screenHeight,
        videoHeight: screenWidth,
        isFullScreen: true,
        sliderWidth: screenHeight * 0.7,
      });
      // 直接设置方向
      Orientation.lockToLandscape();
    } else {
      this.onBackAndroid();
    }
  };
  videoSpeedSet = () => {
    if (this.state.rate !== 2) {
      this.setState({ rate: this.state.rate + 0.5 });
    } else {
      this.setState({ rate: 0.5 });
    }
  };
  _onStartShouldSetResponder = (e) => {
    // console.log(e);
  };
  componentDidMount() {
    var initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
      console.log('是竖屏');
    } else {
      console.log('如果是横屏，就将其旋转过来');
      Orientation.lockToPortrait();
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }
  render() {
    let {
      duration,
      sliderValue,
      currentTime,
      isFullScreen,
      isPaused,
      rate,
      sliderWidth,
      sliderHeight,
      uri,
    } = this.state;
    // 播放按钮组件：是否显示
    let playButtonComponent = (
      <TouchableWithoutFeedback onPress={this.changePausedState}>
        <View style={styles.playBtn} />
      </TouchableWithoutFeedback>
    );
    let pausedBtn = this.state.isPaused ? playButtonComponent : null;
    // 暂停按钮、进度条、全屏按钮 是否显示
    let pausedSliderFullComponent = (
      <View style={{ position: 'absolute', bottom: 0 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* 进度条按钮     */}
          <View style={styles.sliderBox}>
            <Text>{this.formatMediaTime(currentTime)}</Text>
            <Slider
              style={{ width: sliderWidth, height: sliderHeight }}
              value={sliderValue}
              maximumValue={duration}
              thumbTintColor="#000" //开关夹点的yanse
              minimumTrackTintColor="red"
              maximumTrackTintColor="#ccc"
              step={1}
              onValueChange={this.customerSliderValue}
            />
            <Text>{this.formatMediaTime(duration)}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={this.videoSpeedSet}>
              <Text style={{ color: 'white' }}>倍速x{rate}</Text>
            </TouchableOpacity>
          </View>
          {/* 全屏按钮 */}
          <View>
            <TouchableOpacity onPress={this.enterFullScreen}>
              <Text
                style={{
                  backgroundColor: '#00ff00',
                  padding: 5,
                }}
              >
                全屏
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
    let pausedSliderFull = this.state.isVisiblePausedSliderFullScreen
      ? pausedSliderFullComponent
      : null;

    return (
      <View>
        <View>
          <TouchableWithoutFeedback
            onPress={this._changePauseSliderFullState}
            onResponderMove={this._onStartShouldSetResponder}
          >
            <Video
              source={{
                uri: `${uri}`,
              }}
              ref={(ref) => {
                this.player = ref;
              }}
              style={{
                width: this.state.videoWidth,
                height: this.state.videoHeight,
                backgroundColor: '#ffc1c1',
              }}
              allowsExternalPlayback={false} // 不允许导出 或 其他播放器播放
              paused={isPaused} // 控制视频是否播放
              resizeMode="cover"
              onLoad={(e) => this.customerOnload(e)}
              onProgress={(e) => this.customerOnprogress(e)}
              fullscreen={isFullScreen}
              rate={rate}
            />
          </TouchableWithoutFeedback>
          {/* 播放的按钮：点击之后需要消失 */}
          {pausedBtn}
          {/* 暂停按钮，进度条，全屏按钮 */}
          {pausedSliderFull}
        </View>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  myVideo: {
    width: 340,
    height: 240,
  },
  playBtn: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -25,
    marginTop: -25,
    zIndex: 999,
  },
  sliderBox: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
