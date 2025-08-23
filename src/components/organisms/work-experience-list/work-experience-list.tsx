import { Section } from '../../atoms/container/section';
import { Typography } from '../../atoms/typography/typography';

import { WorkExperience } from '../../molecules/work-experience/work-experience';

import { experience } from '../../../common/experience';
import { Divider } from '../../atoms/divider/divider';

export const WorkExperienceList = () => {
  return (
    <Section>
      <Typography tag="h2" size="lg" weight="bold">
        Experiências de trabalho
      </Typography>
      <Divider height="16px" />
      {experience.map((item, index) => {
        return <WorkExperience key={index} item={item} />;
      })}
    </Section>
  );
};
