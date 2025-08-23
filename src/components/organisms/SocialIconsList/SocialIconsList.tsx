import SocialIcon from '../../atoms/Icon';

import {ContainerSection} from '../../atoms/Container';

const mockSocial = [
  {icon: 'icon-email', text: 'lukas.paes18@gmail.com'},
  {
    icon: 'icon-linkedin',
    text: 'https://www.linkedin.com/in/lucas-h-paes-de-carvalho-a5951815a/',
  },
  {icon: 'icon-github', text: 'https://github.com/luca-henrique'},
  {icon: 'icon-github', text: 'https://github.com/web-intelligence-arcoverde'},
];

const SocialListIcons = () => {
  return (
    <ContainerSection>
      {mockSocial.map((item) => {
        return <SocialIcon icon={item.icon} text={item.text} key={item.text} />;
      })}
    </ContainerSection>
  );
};

export default SocialListIcons;
