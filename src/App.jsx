import {Container, Divider} from './components/atomic/Container';
import {SectionTitle} from './components/atomic/Typography';

import ExperienceList from './components/organisms/ExperienceList';
import SkillsList from './components/organisms/SocialList';
import FormationList from './components/organisms/FormationList';
import LanguagemList from './components/organisms/LanguagemList';

import HeaderSection from './components/organisms/Header';

const Home = () => {
  return (
    <Container>
      <HeaderSection />
      <Divider height='20px' />
      <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
        <section style={{width: '80%'}}>
          <SectionTitle>Experiências</SectionTitle>
          <Divider height='20px' />
          <ExperienceList />
        </section>
        <section>
          <SectionTitle>Skills</SectionTitle>
          <SkillsList />
          <Divider height='10px' />
          <SectionTitle>Formação</SectionTitle>
          <FormationList />

          <Divider height={'10px'} />
          <SectionTitle>Idiomas</SectionTitle>
          <LanguagemList />

          <Divider height='10px' />
          <SectionTitle>Projetos</SectionTitle>
        </section>
      </div>
    </Container>
  );
};

export default Home;
