import { TextInputProps } from "react-native";

import { Container } from "./styled";

const Input = ({...rest}: TextInputProps) => {
  return (
    <Container
      {...rest}
    />
   );
}

export default Input;
