// @flow

import * as React from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing } from 'react-native';

import Unicorn from './Unicorn';

const Wrapper = styled(createAnimatedComponent(Animated.View)).attrs({ width: 227, height: 200, transform: [{ scale: ${props => props.scale} }] })

class UnicornAnimated extends React.Component {
  state = {
    scale: new Animated.Value(0.6),
  };

  componentDidMount() {
    this.scaleAnimated();
  }

  scaleAnimated() {
    const { scale } = this.state;
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
      }),
      Animated.timing(scale, {
        toValue: 0.6,
        duration: 300,
      }),
    ]).start(() => this.scaleAnimated());
  }

  render() {
    const { scale } = this.state;

    return <Wrapper scale={scale}>
        <Unicorn />
      </Wrapper>;
  }
}

export default UnicornAnimated;
