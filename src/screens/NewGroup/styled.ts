
import { UsersThree } from 'phosphor-react-native';
import { ThemeType } from 'styled-components';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: {theme: ThemeType }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({theme}: {theme: ThemeType}) => ({
  size: 56,
  color: theme.COLORS.WHITE,
}))`
  align-self: center;
`;



