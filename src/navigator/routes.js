// @flow

import Introduction from '../pages/Introduction';
import Slide1 from '../pages/Slide1';
import Slide2 from '../pages/Slide2';

export const ROUTE_NAMES = {
  INTRODUCTION: 'Introduction',
  WHO_I_AM: 'WhoIAm',
  SLIDE1: 'Slide1',
  SLIDE2: 'Slide2',
};

export default (routes = {
  Introdution: {
    screen: Introduction,
  },
  // WhoIAm: {
  //   screen: WhoIAm,
  // },
  Slide1: {
    screen: Slide1,
  },
  Slide2: {
    screen: Slide2,
  },
});
