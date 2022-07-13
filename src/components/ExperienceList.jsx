import styled from "styled-components";

import ExperienceItem from "./ExperienceItem";

const data = [
  {
    enterprise: "Rethink",
    role: "Desenvolvedor React Pleno",
    description: [
      "Implementação de prototipos de alta fidelidade com react",
      "Documentação do projeto",
      "Desenvolvimento com css com SASS com a ferramente Gulp",
      "Implementação de SEO",
      "Uso de TDD",
    ],
  },
  {
    enterprise: "Softwrap",
    role: "Desenvolvedor React Pleno",
    description: [
      "Implementação de prototipos de alta fidelidade com react",
      "Criando arquitetura do projeto",
      "Criando e desenvolvendo atividades para sprints",
      "Hospedagem do projeto",
      "Trabalhando com styled-components para reaproveitamento de components",
      "Usando padrão de componentização do atomic design para melhor organização dos componentes",
    ],
  },
  {
    enterprise: "Tecla T",
    role: "Desenvolvedor Full Stack",
    description: [
      "Implementação de prototipos de alta fidelidade com react",
      "Implementação de novas funcionalidades no back-end com node",
      "Trabalhando com styled-components para reaproveitamento de components",
      "Criando e desenvolvendo atividades para sprints",
      "Hospedagem do projeto",
    ],
  },
  {
    enterprise: "Web Intelligence",
    role: "Tech Leader React",
    description: [
      "Implementação de prototipos de alta fidelidade com react",
      "Criando arquitetura do projeto",
      "Criando e desenvolvendo atividades para sprints",
      "Hospedagem do projeto",
      "Trabalhando com styled-components para reaproveitamento de components",
      "Usando padrão de componentização do atomic design para melhor organização dos componentes",
      "Gerenciando e revisando codigo",
      "Criando atividades para sprint",
      "Trabalhando em equipe melhorando minhas hads skills de comunicação",
      "Criando projetos open sourcers",
      "Projeto de reciclagem desenvolvido com react native vice-campeão do projeto Sertão Digital que tem parceria com Porto Digital",
    ],
  },
  {
    enterprise: "3Y Software House (PJ)",
    role: "Consultor de software",
    description: [
      "Implementação de prototipos de alta fidelidade com react",
      "Criando arquitetura do projeto",
      "Trabalhando com styled-components para reaproveitamento de components",
    ],
  },
  {
    enterprise: "Meta (CLT)",
    role: "Desenvolvedor React Junior",
    description: [
      "Implementação de prototipos de alta fidelidade com react e react native",
      "Criando arquitetura do projeto",
      "Trabalhando com biblioteca do zoom",
      "Trabalhando com styled-components para reaproveitamento de components",
    ],
  },
  {
    enterprise: "CTM Consultoria",
    role: "Desenvolvedor Full Stack",
    description: [
      "Implementação de prototipos de alta fidelidade com react",
      "Criando arquitetura do projeto",
      "Criando e desenvolvendo atividades para sprints",
      "Hospedagem do projeto",
      "Trabalhando com styled-components para reaproveitamento de components",
      "Criando api rest com adonisJs e gerando relatios com pdfmaker",
    ],
  },
  {
    enterprise: "DK Telecom",
    role: "Estágio Front End",
    description: [
      "Implementação de prototipos de alta fidelidade com react e react native",
    ],
  },
];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ExperienceList = () => {
  return (
    <Container>
      {data.map((item) => {
        return <ExperienceItem item={item} />;
      })}
    </Container>
  );
};

export default ExperienceList;
