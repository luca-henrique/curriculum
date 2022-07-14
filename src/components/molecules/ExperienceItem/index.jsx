import styled from 'styled-components';

import DescriptionJobList from '../../organisms/DescriptionJobList';

import {Date, JobPositionTitle, EnterpriseName} from '../../atomic/Typography';

export const JobInformationContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin: 4px 0;
`;

const ExperienceItem = ({item}) => {
  return (
    <>
      <Date>
        {item.dateStart} - {item.dateEnd}
      </Date>
      <JobInformationContainer>
        <JobPositionTitle>{item.role}</JobPositionTitle>
        <EnterpriseName> na {item.enterprise}</EnterpriseName>
      </JobInformationContainer>
      <DescriptionJobList data={item.description} />
      <div style={{height: '1px', background: '#BDBDBD', margin: '6px 0'}} />
    </>
  );
};

export default ExperienceItem;
