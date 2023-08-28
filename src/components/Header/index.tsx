import { Container, Logo, BackButton, BackIcon } from './style';

import LogoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

const Header: React.FC<Props> = ({ showBackButton = false }) => {
  return (
    <Container>
      <BackButton>
        {
          showBackButton && <BackIcon />
        }
      </BackButton>

      <Logo source={LogoImg}/>
    </Container>
   );
}

export default Header;
