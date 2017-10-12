// @flow

import * as React from 'react';
import styled from 'styled-components/native';

import Text from './Text';

import theme from '../themes/default';

const Wrapper = styled.TouchableOpacity`
  border-color: ${theme.palette.violetRed};
  border-width: 1;
  width: 160;
  height: 60;
  border-radius: 20;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

type Props = {
  text: string,
  onPress: Function,
};

function Button({ text, onPress }) {
  return (
    <Wrapper onPress={onPress}>
      <Text>{text}</Text>
    </Wrapper>
  );
}

Button.defaultProps = {
  text: 'Example',
};

export default Button;
