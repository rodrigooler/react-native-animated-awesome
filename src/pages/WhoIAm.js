// @flow

import * as React from 'react';

import Avatar from '../atoms/Avatar';
import CenterView from '../atoms/CenterView';

import { getImages } from '../assets';

export default function WhoIAm() {
  return (
    <CenterView>
    <Avatar           source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
    </CenterView>
  )
}