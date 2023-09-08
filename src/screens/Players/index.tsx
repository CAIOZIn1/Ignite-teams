import  Header  from "@components/Header";
import { Container, Form } from "./styles";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";

const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Nome da Turma'
        subtitle='Adcione a galera e separe os times'
      />

    <Form>
      <Input
        placeholder='Nome da Turma'
        autoCorrect={false}
      />

      <ButtonIcon
        icon='add'
      />
    </Form>

    <Filter
      title='time a'
    />
    </Container>
   );
}

export default Players;
