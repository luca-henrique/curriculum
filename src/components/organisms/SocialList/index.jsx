import SkillItem from '../../molecules/SkillItem';

import {ContainerSkillList} from '../../atomic/Container';

const skills = [
  'HTML',
  'CSS',
  'Javascript',

  'ReactJs',
  'React Native',

  'Express',
  'AdonisJs',

  'Java',
  'Java Swing',

  'Mysql',
  'PostgreSql',
  'Mongodb',

  'SASS',
  'Git',
  'Webpack',
  'Styled Components',
  'Redux',
  'Jest',
  'Hook',

  'AWS EC2',
  'AWS LAMBDA',
  'AWS S3',

  'Bootstrap',
  'Material-UI',
  'Antdesign',
  'Scrum',
];

const SkillsList = () => {
  return (
    <ContainerSkillList>
      {skills.map((item) => {
        return <SkillItem>{item} - </SkillItem>;
      })}
    </ContainerSkillList>
  );
};

export default SkillsList;
