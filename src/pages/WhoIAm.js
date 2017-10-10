// @flow

import * as React from 'react';
import {Text} from 'react-native';

import Avatar from '../atoms/Avatar';
import CenterView from '../atoms/CenterView';
import TitlePage from '../atoms/TitlePage';
import SubtitlePage from '../atoms/SubtitlePage';

import { getImages } from '../assets';

export default function WhoIAm() {
  return <CenterView>
      <Avatar source={{ uri: '../assets/images/rodrigooler.png' }} />
      <TitlePage>Animated</TitlePage>
      <SubtitlePage>Stylish animation in react-native</SubtitlePage>
    </CenterView>;
}