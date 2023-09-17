import { useState } from 'react';
import { FlatList } from 'react-native';

import { Container } from './styles';
import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListInput';
import Button from '@components/Button';
import { useNavigation } from '@react-navigation/native';

const Groups = () => {
  const [groups, setGroups] = useState([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
        contentContainerStyle={
          groups.length === 0 && {flex: 0.9}
        }
        ListEmptyComponent={() => (
          <ListEmpty
            message='Que tal cadastrar a primeira turma?'
          />
        )}
      />

      <Button
        title='Criar uma nova turma'
        onPress={handleNewGroup}
      />
    </Container>
  );
}

export default Groups;
