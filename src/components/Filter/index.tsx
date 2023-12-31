import { TouchableOpacityProps } from "react-native";
import { Container, Title, FilterStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
}

const Filter = ({
  title,
  isActive = false,
  ...rest
}: Props) => {
  return (
    <Container
      {...rest}
      isActive={isActive}
    >
      <Title>{title}</Title>
    </Container>
   );
}

export default Filter;

