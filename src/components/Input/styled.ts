import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { ThemeType } from 'styled-components';

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  color: ${({theme} : {theme: ThemeType}) => theme.COLORS.WHITE};
  background-color: ${({theme} : {theme: ThemeType}) =>
  theme.COLORS.GRAY_700};

  font-family: ${({theme} : {theme: ThemeType}) =>
  theme.FONT_FAMILY.REGULAR};
  font-size: ${({theme} : {theme: ThemeType}) =>
  theme.FONT_SIZE.MD}px;

  border-radius: 6px;
  padding: 16px;
`
