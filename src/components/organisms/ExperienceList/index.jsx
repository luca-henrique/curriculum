import ExperienceItem from '../../molecules/ExperienceItem';

import {ContainerSection} from '../../atomic/Container';

import {experience} from '../../../common/experience';

const ExperienceList = () => {
  return (
    <ContainerSection>
      {experience.map((item) => {
        return <ExperienceItem item={item} />;
      })}
    </ContainerSection>
  );
};

export default ExperienceList;
