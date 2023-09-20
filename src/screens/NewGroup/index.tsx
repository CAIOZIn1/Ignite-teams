import { Alert } from 'react-native';
import {useState} from 'react';
import { useNavigation } from "@react-navigation/native";
import { AppError } from "@utils/AppError";

import Header from "@components/Header";
import { Container, Content, Icon } from "./styled";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";
import groupCreate from "@storage/group/groupCreate";

const NewGroup = () => {
  const [group, setGroup] = useState('');

  const navigation = useNavigation();

  const handleNew = async () => {
    try{
      if(group.trim().length === 0) return Alert.alert('Novo Grupo', 'Informa o nome da turma');

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (err){
      if(err instanceof AppError){
        Alert.alert('Novo Grupo', err.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
      }
    }
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
