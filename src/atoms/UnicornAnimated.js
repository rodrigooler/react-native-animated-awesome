// @flow

import * as React from 'react';
import { StyleSheet, Text, View, Animated, Image, Easing } from 'react-native';

import Unicorn from './Unicorn';

class UnicornAnimated extends React.Component {
  state = {
    scale: new Animated.Value(0),
  };

  componentDidMount() {
    this.scaleAnimated();
  }

  scaleAnimated() {
    const { scale } = this.state;
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.2,
        duration: 1000,
      }),
      Animated.timing(scale, {
        toValue: 0.4,
        duration: 1000,
      }),
    ]).start(() => this.scaleAnimated());
  }

  render() {
    const { scale } = this.state;

    return (
      <Animated.View
        style={{
          width: 227,
          height: 200,
          transform: [
            {
              scale,
            },
          ],
        }}
      >
        <Unicorn />
      </Animated.View>
    );
  }
}

export default UnicornAnimated;
