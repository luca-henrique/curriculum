import { GraduationItem } from '../../molecules/graduation-item/graduation-item';

import { formation } from '../../../common/formation';
import { Section } from '../../atoms/container/section';
import { Typography } from '../../atoms/typography/typography';
import { Divider } from '../../atoms/divider/divider';


export const GraduationSection = () => {
  return (
    <Section>
      <Typography tag="h2" size="lg" weight="bold">
        Formação
      </Typography>
      <Divider height="16px" />
      {formation.map((item,index) => {
        return <GraduationItem key={`graduation-${item.foundation}-${index}`} {...item} />;
      })}
    </Section>
  );
};
