import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import { ThemeType } from "styled-components";

import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme } : {theme: ThemeType}) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme } : {theme: ThemeType}) => theme.FONT_SIZE.MD}px;
  color: ${({ theme } : {theme: ThemeType}) => theme.COLORS.GRAY_200};
  font-family: ${({ theme } : {theme: ThemeType}) => theme.FONT_FAMILY.REGULAR};
`;

export const Icon = styled(UsersThree).attrs(({ theme }: {theme: ThemeType}) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
  weight: 'fill',
}))`
  margin-right: 20px;
`;
