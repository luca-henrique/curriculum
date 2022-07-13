import { Header, Container } from "./components/Container";
import {
  Title,
  SubTitle,
  Description,
  SectionTitle,
} from "./components/Typography";

import SocialListIcons from "./components/SocialIconsList";
import ExperienceList from "./components/ExperienceList";

const Home = () => {
  return (
    <Container>
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
      <div style={{ height: "20px" }} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <section style={{ width: "55%" }}>
          <SectionTitle>Experiências</SectionTitle>
          <div style={{ height: "20px" }} />
          <ExperienceList />
        </section>
        <section>
          <SectionTitle>Skills</SectionTitle>
        </section>
      </div>
    </Container>
  );
};

export default Home;
