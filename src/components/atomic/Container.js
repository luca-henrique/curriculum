import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 46px 36px;
`;

export const Header = styled.header`
  display: 'flex';
  flex-direction: column;
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction || 'column'};
  justify-content: ${({justifyContent}) => justifyContent || 'none'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  margin: ${({margin}) => margin || '0px'};
  padding: ${({padding}) => padding || '0px'};
  flex-wrap: ${({wrap}) => (wrap ? 'wrap' : 'nowrap')};
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || '100vh'};
  gap: ${({gap}) => gap || 'none'};
  background: ${({background}) => background || 'transparent'};
`;

export const ContainerSkillList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Divider = styled.div`
  height: ${({height}) => height || '4vh'};
`;
