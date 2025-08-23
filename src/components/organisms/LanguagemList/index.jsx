import LanguagemItem from '../../molecules/LanguagemItem';

import {ContainerSection} from '../../atoms/Container';

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
