import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import { deviceWidthDp, pxToDp } from '../../../utils/pxToDp';
import HotCard from '../HotCard';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
  },
  {
    title: 'Middle Earth, Germany',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration:
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F03%2F20190203161419_yerng.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614417723&t=5907bf967350d3d3230702a176ec8381',
  },
];
const SLIDER_1_FIRST_ITEM = 0;

export default class MyCarousel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  static propTypes = {
    type: PropTypes.number,
  };

  static defaultProps = {
    type: 1,
  };

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderItem = ({ item, index }) => {
    return <HotCard />;
  };

  render() {
    const { type } = this.props;
    return (
      <Carousel
        ref={(c) => (this._slider1Ref = c)}
        data={ENTRIES1}
        renderItem={
          type === 1 ? this._renderItemWithParallax : this._renderItem
        }
        slideStyle={{ alignSelf: 'center' }}
        sliderWidth={deviceWidthDp}
        sliderHeight={pxToDp(type === 1 ? 320 : 229)}
        itemWidth={pxToDp(type === 1 ? 610 : 450)}
        itemHeight={pxToDp(type === 1 ? 320 : 190)}
        hasParallaxImages={true}
        firstItem={SLIDER_1_FIRST_ITEM}
        inactiveSlideOpacity={1}
        inactiveSlideScale={0.9}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop={true}
        loopClonesPerSide={ENTRIES1.length}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
    );
  }
}

const styles = StyleSheet.create({
  exampleContainer: {
    width: deviceWidthDp,
    position: 'relative',
  },
});
