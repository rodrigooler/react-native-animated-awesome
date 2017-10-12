// @flow

import * as React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
} from 'react-native';
import { withNavigation } from 'react-navigation';

import Button from '../atoms/Button';

class Slide4 extends React.PureComponent {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1,
      tension: 1,
    }).start();
  }

  nextSlide = () => this.props.navigation.navigate('Slide5');

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 100 }} onPress={this.spring.bind(this)}>
          Spring
        </Text>
        <Animated.Image
          style={{
            width: 227,
            height: 200,
            transform: [{ scale: this.springValue }],
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
        <Button onPress={this.nextSlide} text="NEXT" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withNavigation(Slide4);
