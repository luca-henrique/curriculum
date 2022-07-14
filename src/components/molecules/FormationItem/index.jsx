import {JobPositionTitle, Date, EnterpriseName} from '../../atomic/Typography';

import {ContainerSection} from '../../atomic/Container';

const FormationItem = ({item}) => {
  return (
    <ContainerSection>
      <Date>
        {item.dateStart} - {item.dateEnd}
      </Date>
      <JobPositionTitle>{item.graduate}</JobPositionTitle>
      <EnterpriseName>{item.foundation}</EnterpriseName>
    </ContainerSection>
  );
};

export default FormationItem;
