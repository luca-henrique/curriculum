import { Header as Container } from '../../atoms/header/header';
import { Typography } from '../../atoms/typography/typography';

export const Header = () => {
  return (
    <Container>
      <Typography weight="bold" size="lg">
        Lucas Henrique Paes de Carvalho
      </Typography>
      <Typography>Software engineering full stack javascript.</Typography>
      <Typography weight="bold">Arcoverde - Pernambuco - Brasil</Typography>
      <Typography size="xs">
        Sou um desenvolvedor full-stack e mobile desde 2019 com experiência com
        projetos JavaScript e TypeScript. Minhas especialidades incluem o uso de
        frameworks e bibliotecas como ReactJS, React Native, Next.js, Express e
        AdonisJS.
      </Typography>
    </Container>
  );
};

