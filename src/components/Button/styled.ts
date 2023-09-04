import { TouchableOpacity } from 'react-native';
import { ThemeType } from 'styled-components';
import styled from "styled-components/native";

export type ButtonTypeStyledProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyledProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({theme, type}: {theme: ThemeType, type: string}) => type === 'PRIMARY'? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({theme}: {theme: ThemeType}) => theme.FONT_SIZE.MD};
  color: ${({theme}: {theme: ThemeType}) => theme.COLORS.WHITE};
  font-family: ${({theme}: {theme: ThemeType}) => theme.FONT_FAMILY.BOLD};

`;
