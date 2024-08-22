import {Header} from '../../atomic/Container';
import {Title, SubTitle, Description} from '../../atomic/Typography';

const HeaderSection = () => {
  return (
    <Header>
      <Title>Lucas Henrique Paes de Carvalho</Title>
      <SubTitle>Software engineering full stack javascript.</SubTitle>
      <div style={{ display: 'flex', alignItems: 'center', marginTop:"2px" }}>
          <SubTitle style={{ fontWeight: 500 }}>
            Arcoverde - Pernambuco - Brasil
          </SubTitle>
        </div>
      <Description>
        Sou um desenvolvedor full-stack e mobile desde 2019 com experiência com
        projetos JavaScript e TypeScript. Minhas especialidades incluem o uso de
        frameworks e bibliotecas como ReactJS, React Native, Next.js, Express e
        AdonisJS.
      </Description>
    </Header>
  );
};

export default HeaderSection;
