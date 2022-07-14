import {AiOutlineMail, AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai';

import styled from 'styled-components';

const Icon = {
  'icon-email': <AiOutlineMail size={20} color=' #000' />,
  'icon-linkedin': <AiOutlineLinkedin size={20} color=' #000' />,
  'icon-github': <AiFillGithub size={20} color=' #000' />,
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LableIcon = styled.label`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16;
  line-height: 16px;

  text-align: right;

  color: #222222;
  margin-left: 4px;
`;

const SocialIcon = ({icon, text}) => {
  return (
    <Container>
      {Icon[icon]}
      <LableIcon>{text}</LableIcon>
    </Container>
  );
};

export default SocialIcon;
