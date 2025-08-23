import { CustomContainer } from '../../atoms/container/custom-container';
import { Typography } from '../../atoms/typography/typography';

interface ProjectExperienceItemProps {
  name: string;
  description: string;
}

export const ProjectExperienceItem = ({
  name,
  description,
}: ProjectExperienceItemProps) => {
  return (
    <CustomContainer direction="column" alignItems="start" height="auto" gap="4px">
      <Typography tag="h5" size="md" weight="bold" color="primaryText">
        {name}
      </Typography>
      <Typography tag="p" size="xs">
        {description}
      </Typography>
    </CustomContainer>
  );
};
