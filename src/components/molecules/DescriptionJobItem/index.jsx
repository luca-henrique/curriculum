import styled from 'styled-components';

export const DescriptionJob = styled.p`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #222222;
`;

const DescriptionJobItem = ({item}) => {
  return <DescriptionJob>- {item}</DescriptionJob>;
};

export default DescriptionJobItem;
