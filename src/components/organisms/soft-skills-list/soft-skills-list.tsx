import { CustomContainer } from '../../atoms/container/custom-container';
import { Typography } from '../../atoms/typography/typography';

import { skills } from '../../../common/skills';

export const SoftSkillsList = () => {
  return (
    <CustomContainer alignItems="start" height="fit-content">
      <Typography tag='h2' size='lg' weight='bold'>Tecnologias</Typography>
      <CustomContainer
        direction="row"
        width="auto"
        height="fit-content"
        wrap="wrap"
        gap="4px"
        margin="16px 0 0 0"
      >
        {skills.map((item, index) => {
          const isLastItem = skills.length - 1  === index;

          return <Typography key={item} size='xs'>{item}{isLastItem ? '' : '-'}</Typography>;
        })}
      </CustomContainer>
    </CustomContainer>
  );
};
