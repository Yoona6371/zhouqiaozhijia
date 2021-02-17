import { StyleSheet } from 'react-native';
import { colors } from './index.style';
import { deviceWidthDp, pxToDp } from '../../../../utils/pxToDp';

const IS_IOS = true;

const slideHeight = pxToDp(320);
const slideWidth = pxToDp(610);

export const sliderWidth = deviceWidthDp;
export const itemWidth = slideWidth;

const entryBorderRadius = 8;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
  },

  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: entryBorderRadius,
  },
  imageContainerEven: {
    backgroundColor: colors.black,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderTopRightRadius: pxToDp(15),
    borderBottomRightRadius: pxToDp(15),
  },
});
