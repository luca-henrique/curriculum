import ExperienceItem from '../../molecules/ExperienceItem';

import {ContainerSection} from '../../atomic/Container';

const data = [
  {
    dateStart: '08/08/2022',
    dateEnd: 'Atualmente',
    enterprise: 'ETE Prof. Francisco Jonas Feitosa Costa',
    role: 'Tech Leader',
    description: [
      'Aluno mentor da turma para o desenvolvendo extra classe',
      'Aluno responsavel para implmentação dos projetos do programa de extensão tecnologica',
      'Desenvolvendor do app Ecolog em react native para coleta de lixo reciclavel',
      'PET - Prototipo de uma aplicação de Cashback focada no Comércio Local ',
      'PET - Data Science com Dados Abertos e Privados com Python',
      'PET - Desenvolvimento um sistema de apoio a delegacia da mulher em Arcoverde',
    ],
  },
  {
    dateStart: '15/06/2021',
    dateEnd: 'Atualmente',
    enterprise: 'Web Intelligence',
    role: 'Tech Leader React',
    description: [
      'Implementação de prototipos de alta fidelidade com react',
      'Criando arquitetura do projeto',
      'Criando e desenvolvendo atividades para sprints',
      'Hospedagem do projeto',
      'Trabalhando com styled-components para reaproveitamento de components',
      'Usando padrão de componentização do atomic design para melhor organização dos componentes',
      'Gerenciando e revisando codigo',
      'Criando atividades para sprint',
      'Trabalhando em equipe melhorando minhas soft skills de comunicação',
      'Criando projetos open sourcers',
      'Projeto de reciclagem desenvolvido com react native vice-campeão do projeto Sertão Digital que tem parceria com Porto Digital',
      'Gerente projeto da fintech Berro Tech',
      'Desenvolvedor full stack projeto da fintech Berro Tech usando tecnologias como NextJS, React Native e AdonisJs',
    ],
  },
  {
    dateStart: '05/08/2021',
    dateEnd: '10/11/2022',
    enterprise: 'Rethink',
    role: 'Desenvolvedor React Pleno',
    description: [
      'Implementação de prototipos de alta fidelidade com react',
      'Implementação de prototipos de alta fidelidade com react native',
      'Documentação do projeto',
      'Desenvolvimento com css com SASS com a ferramente Gulp',
      'Implementação de SEO',
      'Uso de TDD',
    ],
  },
  {
    dateStart: '15/04/2022',
    dateEnd: '2/08/2022',
    enterprise: 'Softwrap',
    role: 'Desenvolvedor React Pleno',
    description: [
      'Implementação de prototipos de alta fidelidade com react',
      'Criando arquitetura do projeto',
      'Criando e desenvolvendo atividades para sprints',
      'Hospedagem do projeto',
      'Trabalhando com styled-components para reaproveitamento de components',
      'Usando padrão de componentização do atomic design para melhor organização dos componentes',
    ],
  },
  {
    dateStart: '15/02/2021',
    dateEnd: '15/12/2021',
    enterprise: 'Tecla T',
    role: 'Desenvolvedor Full Stack',
    description: [
      'Implementação de prototipos de alta fidelidade com react',
      'Implementação de novas funcionalidades no back-end com node',
      'Trabalhando com styled-components para reaproveitamento de components',
      'Criando e desenvolvendo atividades para sprints',
      'Hospedagem do projeto',
    ],
  },

  {
    dateStart: '15/06/2021',
    dateEnd: '01/12/2021',
    enterprise: '3Y Software House (PJ)',
    role: 'Consultor de software',
    description: [
      'Implementação de prototipos de alta fidelidade com react',
      'Criando arquitetura do projeto',
      'Trabalhando com styled-components para reaproveitamento de components',
    ],
  },
  {
    enterprise: 'Meta (CLT)',
    role: 'Desenvolvedor React Junior',
    dateStart: '03/12/2020',
    dateEnd: '01/08/2021',
    description: [
      'Implementação de prototipos de alta fidelidade com react e react native',
      'Criando arquitetura do projeto',
      'Trabalhando com biblioteca do zoom',
      'Trabalhando com styled-components para reaproveitamento de components',
    ],
  },
  {
    enterprise: 'CTM Consultoria',
    role: 'Desenvolvedor Full Stack',
    dateStart: '02/01/2020',
    dateEnd: '02/09/2020',
    description: [
      'Implementação de prototipos de alta fidelidade com react',
      'Criando arquitetura do projeto',
      'Criando e desenvolvendo atividades para sprints',
      'Hospedagem do projeto',
      'Trabalhando com styled-components para reaproveitamento de components',
      'Criando api rest com adonisJs e gerando relatios com pdfmaker',
    ],
  },
  {
    dateStart: '02/07/2019',
    dateEnd: '31/12/2019',
    enterprise: 'DK Telecom',
    role: 'Estágio Front End',
    description: [
      'Implementação de prototipos de alta fidelidade com react e react native',
    ],
  },
];

const ExperienceList = () => {
  return (
    <ContainerSection>
      {data.map((item) => {
        return <ExperienceItem item={item} />;
      })}
    </ContainerSection>
  );
};

export default ExperienceList;
