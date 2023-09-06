import Header from "@components/Header";
import { Container, Content, Icon } from "./styled";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

const NewGroup = () => {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova turma'
          subtitle='Crie uma turma para adicionar as pessoas'
        />

        <Input />

        <Button
          title="Criar"
          style={{marginTop: 20}}
        />
      </Content>
    </Container>
  );
}

export default NewGroup;
