// @flow

import resolveAssetSource from 'resolveAssetSource';

const getImage = (name: string) => {
  switch (name) {
    case 'rodrigooler':
      return resolveAssetSource(require('./rodrigooler.png'));
    default:
      return null;
  }
};

export default getImage;
