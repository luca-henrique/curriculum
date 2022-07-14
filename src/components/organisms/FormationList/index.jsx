import FormationItem from '../../molecules/FormationItem';

import {ContainerSection} from '../../atomic/Container';

const data = [
  {
    dateStart: '2022',
    dateEnt: '2024',
    graduate: 'Analise e Desenvolvimento de Sistemas',
    foundation: 'Unicesumar',
  },
];

const FormationList = () => {
  return (
    <ContainerSection>
      {data.map((item) => {
        return <FormationItem item={item} />;
      })}
    </ContainerSection>
  );
};

export default FormationList;
