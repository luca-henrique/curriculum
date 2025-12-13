import { Typography } from '../../atoms/typography/typography';
import { CustomContainer } from '../../atoms/container/custom-container';
import { ProjectExperienceList } from '../project-experience-list/project-experience-list';
import styled from 'styled-components';
import { Tag } from '../../atoms/tag/tag';

const Card = styled(CustomContainer)`
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 12px;
`;

interface Project {
  name: string;
  description: string;
  link?: string;
}

interface WorkExperienceItem {
  role: string;
  enterprise: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  techs?: string[];
  projects?: Project[];
}

interface WorkExperienceProps {
  item: WorkExperienceItem;
}

export const WorkExperience = ({ item }: WorkExperienceProps) => {
  return (
    <Card
      direction="column"
      alignItems="start"
      gap="8px"
      height="auto"
      width="100%"
    >
      <CustomContainer
        direction="row"
        alignItems="baseline"
        gap="8px"
        height="auto"
        justifyContent="space-between"
        width="100%"
      >
        <CustomContainer
          direction="row"
          alignItems="baseline"
          gap="8px"
          height="auto"
        >
          <Typography tag="h3" size="md" weight="bold" color="primaryText">
            {item.role}
          </Typography>
          <Typography tag="h4" size="sm" color="secondaryText">
            at {item.enterprise}
          </Typography>
        </CustomContainer>
        <Typography tag="span" size="sm" color="secondaryText" weight="medium">
          {item.dateStart} - {item.dateEnd}
        </Typography>
      </CustomContainer>

      <Typography tag="p" size="sm" lineHeight="lg">
        {item.description}
      </Typography>
      <ProjectExperienceList projects={item.projects} />
    </Card>
  );
};
