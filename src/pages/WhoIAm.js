// @flow

import * as React from 'react';
import { Text } from 'react-native';

import Avatar from '../atoms/Avatar';
import CenterView from '../atoms/CenterView';
import SubtitlePage from '../atoms/SubtitlePage';
import TitlePage from '../atoms/TitlePage';
import UnicornAnimated from '../atoms/UnicornAnimated';
import Button from '../atoms/Button';

import { getImages } from '../assets';
import theme from '../themes/default';

export default function WhoIAm() {
  return (
    <CenterView>
      <UnicornAnimated />
      <TitlePage color={theme.palette.ruby}>Animated</TitlePage>
      <SubtitlePage>Stylish animation in react-native</SubtitlePage>
      <Button text="NEXT" />
    </CenterView>
  );
}
