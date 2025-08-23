import React, { Suspense } from 'react';
import { Header } from '../../components/organisms/header/header';
import { Container } from './style';

import { ContactSection } from '../../components/organisms/contact-section/contact-section';

const GraduationSection = React.lazy(() => import('../../components/organisms/graduation-section/graduation-section').then(module => ({ default: module.GraduationSection })));
const SoftSkillsList = React.lazy(() => import('../../components/organisms/soft-skills-list/soft-skills-list').then(module => ({ default: module.SoftSkillsList })));
const WorkExperienceList = React.lazy(() => import('../../components/organisms/work-experience-list/work-experience-list').then(module => ({ default: module.WorkExperienceList })));



export const Home = () => {
  return (
    <Container>
      <Header />
      <ContactSection />

      <Suspense fallback={<div>Carregando...</div>}>
        <GraduationSection />
        <SoftSkillsList />
        <WorkExperienceList />
      </Suspense>
    </Container>
  );
};
