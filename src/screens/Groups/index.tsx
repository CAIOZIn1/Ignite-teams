import { Container } from './styles';

import Header from '@components/Header';
import Highlight from '@components/Highlight';
import GroupCard from '@components/GroupCard';

const Groups = () => {
  return (
    <Container>
      <Header />

      <Highlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />

      <GroupCard title='Nome da turma'/>
    </Container>
  );
}

export default Groups;
