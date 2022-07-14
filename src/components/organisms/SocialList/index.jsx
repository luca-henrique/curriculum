import SkillItem from '../../molecules/SkillItem';

import {ContainerSkillList} from '../../atomic/Container';

const skills = [
  'HTML',
  'CSS',
  'Javascript',

  'ReactJs',
  'ReactNative',

  'Express',
  'AdonisJs',

  'Java',

  'Mysql',
  'PostgreSql',
  'Mongodb',

  'SASS',
  'Git',
  'Webpack',
  'Styled Components',
  'Redux',

  'Bootstrap',
  'Material-UI',
  'Antdesign',
  'Scrum',

  'Java Swing',
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
