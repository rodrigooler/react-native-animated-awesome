// @flow

import * as React from 'react';
import { withNavigation } from 'react-navigation';

import Avatar from '../atoms/Avatar';
import Button from '../atoms/Button';
import CenterView from '../atoms/CenterView';
import SubtitlePage from '../atoms/SubtitlePage';
import TitlePage from '../atoms/TitlePage';
import UnicornAnimated from '../atoms/UnicornAnimated';

import { getImages } from '../assets';
import theme from '../themes/default';

class Introdution extends React.PureComponent {
  nextSlide = () => this.props.navigation.navigate('Slide1');

  render() {
    return (
      <CenterView>
        <UnicornAnimated />
        <TitlePage color={theme.palette.ruby}>Animated</TitlePage>
        <SubtitlePage>Stylish animation in react-native</SubtitlePage>
        <Button onPress={this.nextSlide} text="NEXT" />
      </CenterView>
    );
  }
}

export default withNavigation(Introdution);
