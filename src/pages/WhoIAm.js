// @flow

import * as React from 'react';
import { Text } from 'react-native';

import Avatar from '../atoms/Avatar';
import CenterView from '../atoms/CenterView';
import SubtitlePage from '../atoms/SubtitlePage';
import TitlePage from '../atoms/TitlePage';
import UnicornAnimated from '../atoms/UnicornAnimated';

import { getImages } from '../assets';

export default function WhoIAm() {
  return (
    <CenterView>
      <UnicornAnimated />
      <TitlePage>Animated</TitlePage>
      <SubtitlePage>Stylish animation in react-native</SubtitlePage>
    </CenterView>
  );
}
