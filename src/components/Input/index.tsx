import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styled";

const Input = ({...rest}: TextInputProps) => {
  const { COLORS } = useTheme();

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
   );
}

export default Input;
