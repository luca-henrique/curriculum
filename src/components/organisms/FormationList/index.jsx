import FormationItem from '../../molecules/FormationItem';

import {ContainerSection} from '../../atomic/Container';

import {formation} from '../../../common/formation';

const FormationList = () => {
  return (
    <ContainerSection>
      {formation.map((item) => {
        return <FormationItem item={item} />;
      })}
    </ContainerSection>
  );
};

export default FormationList;
