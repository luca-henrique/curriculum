import styled, { CSSProperties } from 'styled-components';

interface CustomContainerProps {
  direction?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  margin?: CSSProperties['margin'];
  padding?: CSSProperties['padding'];
  wrap?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  gap?: CSSProperties['gap'];
  background?: CSSProperties['background'];
}

export const CustomContainer = styled.div<CustomContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  margin: ${({ margin }) => margin || '0px'};
  padding: ${({ padding }) => padding || '0px'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || '100vh'};
  gap: ${({ gap }) => gap || '0px'};
  background: ${({ background }) => background || 'transparent'};
`;