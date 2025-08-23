import { ReactNode } from 'react';
import * as S from './style';

type TagVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
type SizeVariants = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type WeightVariants = 'light' | 'regular' | 'medium' | 'bold';
type ColorVariants = 'primaryText' | 'secondaryText'; 
type LineHeightVariants = 'xs' | 'sm' | 'md' | 'lg';

export type TypographyProps = {
  tag?: TagVariants;
  children: ReactNode;
  size?: SizeVariants;
  weight?: WeightVariants;
  color?: ColorVariants;
  lineHeight?: LineHeightVariants;
  [key: string]: any;
};

export const Typography = ({ 
  tag = 'p', 
  children, 
  ...rest 
}: TypographyProps) => (
  <S.DynamicTypography tag={tag} {...rest}>
    {children}
  </S.DynamicTypography>
);