import { ThemeType } from 'styled-components';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  align-items: center;

  font-size: ${({theme}: {theme: ThemeType}) => theme.FONT_SIZE.SM}px;
  font-family: ${({theme}: {theme: ThemeType}) => theme.FONT_FAMILY.REGULAR};
  color: ${({theme}: {theme: ThemeType}) => theme.COLORS.GRAY_300};

`;
