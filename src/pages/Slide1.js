// @flow

import React from 'react';
import { Animated, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import Button from '../atoms/Button';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

class Slide1 extends React.PureComponent {
  nextSlide = () => this.props.navigation.navigate('Slide2');

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FadeInView
          style={{
            width: 250,
            height: 50,
            backgroundColor: 'powderblue',
            marginBottom: 50,
          }}
        >
          <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>
            Fading in
          </Text>
        </FadeInView>
        <Button onPress={this.nextSlide} text="NEXT" />
      </View>
    );
  }
}

export default withNavigation(Slide1);
