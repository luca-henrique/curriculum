import LanguagemItem from '../../molecules/LanguagemItem';

import {ContainerSection} from '../../atomic/Container';

const data = ['Português (Nativo)', 'Inglês (Tecnico)'];

const LanguagemList = () => {
  return (
    <ContainerSection>
      {data.map((item) => {
        return <LanguagemItem item={item} />;
      })}
    </ContainerSection>
  );
};

export default LanguagemList;
