import {Header} from '../../atomic/Container';
import {Title, SubTitle, Description} from '../../atomic/Typography';

import SocialListIcons from '../SocialIconsList/SocialIconsList';

const HeaderSection = () => {
  return (
    <Header>
      <Title>Lucas Carvalho</Title>
      <SubTitle>
        Sou desenvolvedor javascript, foco em frontend e mobile.
      </SubTitle>
      <Description>
        Um desenvolvedor web apaixonado, resolvendo problemas e atento aos
        detalhes.
      </Description>
      <SocialListIcons />
    </Header>
  );
};

export default HeaderSection;
