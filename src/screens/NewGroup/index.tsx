import { useNavigation } from "@react-navigation/native";
import {useState} from 'react';

import Header from "@components/Header";
import { Container, Content, Icon } from "./styled";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNew = () => {
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title='Nova turma'
          subtitle='Crie uma turma para adicionar as pessoas'
        />

        <Input
          placeholder='Nome da turma'
          onChangeText={setGroup}
        />

        <Button
          title="Criar"
          style={{marginTop: 20}}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}

export default NewGroup;
