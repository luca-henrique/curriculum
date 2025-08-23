import { CustomContainer } from '../../atoms/container/custom-container';
import { Typography } from '../../atoms/typography/typography';

interface GraduationItemProps {
  graduate: string;
  foundation: string;
  dateStart: string;
  dateEnd: string;
}

export const GraduationItem = ({graduate, foundation, dateStart, dateEnd}:GraduationItemProps) => {
  return (
    <CustomContainer height={'auto'} direction='row' alignItems='start' gap={"8px"}>
        <Typography tag='h3' size='xs' weight='bold'>{graduate}</Typography>
        <Typography size='xs'>{foundation}</Typography>
        <Typography size='xs'>
          {dateStart}-{dateEnd}
        </Typography>
     </CustomContainer>
  );
};

