import { StyleSheet } from 'react-native';
import { deviceWidthDp, pxToDp } from '../../../../utils/pxToDp';

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};

export default StyleSheet.create({
  exampleContainer: {
    width: deviceWidthDp,
    height: pxToDp(320),
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollview: {
    flex: 1,
  },
  slider: {
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {},
  banner_bg: {},
});
