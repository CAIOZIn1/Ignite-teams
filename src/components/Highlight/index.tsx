import { Container, Title, Subtitle } from "./styles";

type Porps = {
  title: string;
  subtitle: string;
}

const Highlight = ({ title, subtitle}: Porps) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
   );
}

export default Highlight;
