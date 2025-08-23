import styled, { CSSProperties } from 'styled-components';

interface DividerProps {
  height?: CSSProperties['height'];
}

export const Divider = styled.div<DividerProps>`
  height: ${({ height }) => height || '4vh'};
`;
