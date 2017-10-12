// @flow

import Introduction from '../pages/Introduction';
import Slide1 from '../pages/Slide1';
import Slide2 from '../pages/Slide2';
import Slide3 from '../pages/Slide3';
import Slide4 from '../pages/Slide4';
import Slide5 from '../pages/Slide5';

export const ROUTE_NAMES = {
  INTRODUCTION: 'Introduction',
  WHO_I_AM: 'WhoIAm',
  SLIDE1: 'Slide1',
  SLIDE2: 'Slide2',
  SLIDE3: 'Slide3',
  SLIDE4: 'Slide4',
  SLIDE5: 'Slide5',
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
  Slide3: {
    screen: Slide3,
  },
  Slide4: {
    screen: Slide4,
  },
  Slide5: {
    screen: Slide5,
  },
});
