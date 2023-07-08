import SkillItem from '../../molecules/SkillItem';

import {ContainerSkillList} from '../../atomic/Container';

import {skills} from '../../../common/skills';

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
