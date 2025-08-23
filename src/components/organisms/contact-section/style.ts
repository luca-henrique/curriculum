
import styled from 'styled-components';

export const Section = styled.section`

`;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap:12px;
  margin-top: 16px
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap:4px
`;

export const Link = styled.a`
  display: inline-block; 
  text-decoration: none;
  color: inherit; 
  padding: 12px 4px; 
  margin: -12px -4px;

  &:hover {
    text-decoration: underline;
  }
`;