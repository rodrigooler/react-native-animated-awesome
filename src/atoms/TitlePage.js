import styled from 'styled-components/native';

import theme from '../themes/default';

const TitlePage = styled.Text`
  font-size: 100;
  text-align: center;
  color: ${props => (props.color ? props.color : theme.palette.darkGrey)};
`;

export default TitlePage;
