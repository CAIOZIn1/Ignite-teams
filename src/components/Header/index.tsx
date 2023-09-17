import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackButton, BackIcon } from './style';

import LogoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

const Header: React.FC<Props> = ({ showBackButton = false }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('groups')
  }

  return (
    <Container>
      {showBackButton &&
      <BackButton onPress={handleGoBack}>
          <BackIcon />
      </BackButton>}

      <Logo source={LogoImg}/>
    </Container>
   );
}

export default Header;
