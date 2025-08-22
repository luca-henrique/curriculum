import { ContactSection } from '../../components/organisms/ContactSection/index';
import ExperienceList from '../../components/organisms/ExperienceList';
import FormationList from '../../components/organisms/FormationList';
import HeaderSection from '../../components/organisms/Header';
import SkillsList from '../../components/organisms/SocialList';

export const Home = () => {
  return (
    <div
      style={{
        fontFamily: 'IBM Plex Sans',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'lightgray',
      }}
    >
      <div style={{ width: '100%', background: '#fff', padding: '40px' }}>
        <HeaderSection />

        <ContactSection />

        <div style={{ margin: '20px' }} />

        <section>
          <h2>Formação</h2>
          <div style={{ margin: '10px' }} />
          <FormationList />
        </section>

        <section>
          <h2>Tecnologias</h2>
          <div style={{ margin: '10px' }} />
          <SkillsList />
        </section>

        <div style={{ margin: '20px' }} />

        <section>
          <h2>Experiências de trabalho</h2>
          <div style={{ margin: '10px' }} />
          <ExperienceList />
        </section>
      </div>
    </div>
  );
};
