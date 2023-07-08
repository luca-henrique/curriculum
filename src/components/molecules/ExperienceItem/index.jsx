import styled from 'styled-components';

import {
  Date,
  JobPosition,
  Enterprise,
  ProjectDescription,
  ProjectName,
} from '../../atomic/Typography';

export const JobInformationContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const ExperienceItem = ({item}) => {
  return (
    <>
      <JobInformationContainer>
        <JobPosition>{item.role}</JobPosition>
        <Enterprise> na {item.enterprise}</Enterprise>
      </JobInformationContainer>
      <Date>
        {item.dateStart} - {item.dateEnd}
      </Date>
      <div style={{marginBottom: '4px'}} />
      {item.projects.map((project) => {
        return (
          <>
            <ProjectName>{project.name}</ProjectName>
            <div style={{marginBottom: '4px'}} />
            <ProjectDescription>{project.description}</ProjectDescription>
            <div style={{marginBottom: '8px'}} />
          </>
        );
      })}
    </>
  );
};

export default ExperienceItem;
