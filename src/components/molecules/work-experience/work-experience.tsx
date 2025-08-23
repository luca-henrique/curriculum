import { Typography } from '../../atoms/typography/typography';
import { CustomContainer } from '../../atoms/container/custom-container';
import { ProjectExperienceList } from '../project-experience-list/project-experience-list';

export const WorkExperience = ({ item }) => {
  return (
     <CustomContainer direction="column" alignItems="start" gap="4px" height="auto">
      <CustomContainer direction="row" alignItems="end" gap="4px" height="auto">
        <Typography tag="h3" size="sm" weight="bold" color="primaryText">
          {item.role}
        </Typography>
        <Typography tag="h4" size="xs" color="primaryText">
          na {item.enterprise}
        </Typography>
      </CustomContainer>
      <Typography tag="h5" size="xs">
        {item.dateStart} - {item.dateEnd}
      </Typography>
      <Typography tag="p" size="xs">
        {item.description}
      </Typography>
      <ProjectExperienceList projects={item.projects} />
    </CustomContainer>
  );
};
