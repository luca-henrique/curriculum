import styled from 'styled-components';

export const TagContainer = styled.span`
  background-color: ${({ theme }) => theme.colors.secondaryText}10; /* 10% opacity of secondary or just a gray */
  color: ${({ theme }) => theme.colors.primaryText};
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
  border: 1px solid #e0e0e0;
`;
