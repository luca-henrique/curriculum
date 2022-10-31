import FormationItem from '../../molecules/FormationItem';

import {ContainerSection} from '../../atomic/Container';

const data = [
  {
    dateStart: '2022',
    dateEnt: '2024',
    graduate: 'Analise e Desenvolvimento de Sistemas',
    foundation: 'Unicesumar',
  },

  {
    dateStart: '2022',
    dateEnt: '2023',
    graduate: 'Técnico de Desenvolvimento de Sistemas',
    foundation: 'ETE Prof. Francisco Jonas Feitosa Costa',
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
