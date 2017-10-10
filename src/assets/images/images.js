// @flow

import resolveAssetSource from 'resolveAssetSource';

const getImage = (name: string) => {
  switch (name) {
    case 'avatar':
      return resolveAssetSource(require('../../assets/images/avatar.png'));
    default:
      return null;
  }
};

export default getImage;