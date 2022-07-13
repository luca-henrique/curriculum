import styled from "styled-components";

import SocialIcon from "./Icon";

const mockSocial = [
  { icon: "icon-email", text: "lukas.paes18@gmail.com" },
  {
    icon: "icon-linkedin",
    text: "https://www.linkedin.com/in/lucas-h-paes-de-carvalho-a5951815a/",
  },
  { icon: "icon-github", text: "https://github.com/luca-henrique" },
];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 18px;
`;

const SocialListIcons = () => {
  return (
    <Container>
      {mockSocial.map((item) => {
        return <SocialIcon icon={item.icon} text={item.text} key={item.text} />;
      })}
    </Container>
  );
};

export default SocialListIcons;
