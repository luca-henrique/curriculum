import React from "react";
import {
  Container,
  Header,
  Name,
  Role,
  ContactContainer,
  Contact,
  Section,
  TitleSection,
  ExperienceTitle,
  Enterprise,
  ExperienceDate,
  Description,
} from "./style";

const Home = () => {
  return (
    <Container>
      <Header>
        <Name>Lucas Henrique Paes de Carvalho</Name>
        <Role>Desenvolvedor Frontend</Role>
      </Header>

      <ContactContainer>
        <Contact>lukas.paes18@gmail.com</Contact>
        <Contact>Arcoverde-PE, Brasil</Contact>
        <Contact>+55 87 9 98093765</Contact>
        <Contact>
          https://www.linkedin.com/in/lucas-h-paes-de-carvalho-a5951815a/
        </Contact>
      </ContactContainer>

      <Section>
        <TitleSection>Experiências</TitleSection>
        <ExperienceTitle>Consultor de Software</ExperienceTitle>
        <Enterprise>3Y Software House</Enterprise>
        <ExperienceDate>
          6 junho de 2021, atualmente, trabalhando remotamente.
        </ExperienceDate>
        <Description>
          Construindo e realizando manutenção em aplicações react.js prestando
          serviços para emprestas de todo Brasil, utilizando bibliotecas como
          redux, material-ui,styled components,react router dom , axios.
        </Description>

        <ExperienceTitle>Desenvolvedor React</ExperienceTitle>
        <Enterprise>Meta</Enterprise>
        <ExperienceDate>
          2 Desembro de 2020, atualmente, trabalhando remotamente.
        </ExperienceDate>
        <Description>
          Construindo novas aplicações web e mobile utilizando React e React
          Native como stacks, participei diretamente da construção da e
          manutenção de novos aplicativos diretamente ligados a Unimed para
          consultas via video chamadas com integração com zoom, utilizando
          bibliotecas padrões como redux, material-ui,styled components,react
          router dom , axios no frontend da aplicação
        </Description>

        <ExperienceTitle>Desenvolvedor Full Stack Javascript</ExperienceTitle>
        <Enterprise>CTM Consultoria</Enterprise>
        <ExperienceDate>
          2 Janeiro de 2020, 20 de novembro, alocado na empresa.
        </ExperienceDate>
        <Description>
          Migração de sistemas legados em delphi para web com react.js e
          adonisjs(node) no backend, participei na migração do sistema que
          auxilia a secretaria de desenvolvimento social no cadastramento de
          pessoas no sistema de cadastro unico do programa bolsa familia, migrei
          toda uma base de dados com mais de 50 mil cadastro que estavam em um
          banco de dados criado no firebird em csv, totalmente desktop para uma
          api rest servindo uma aplicação web, na aplicação web gero relatorios
          em pdf, logs de alterações. Construi um sistema de gestão patrimonial
          para prefeituras sem uma base de dados, construido com react.js e
          adonisjs(node), na aplicação web gero relatorios em pdf, logs de
          alterações, gero reladorios em docx, nessas duas aplicações foram
          usadas bibliotecas como redux, material-ui,styled components,react
          router dom , axios, pdfmaker, jobs(filas) para gerar pdfs. Nesses
          projetos participei inteiramente e unicamente no desenvolvimento dos
          sistemas.
        </Description>

        <ExperienceTitle>Estágio Desenvolvimento React</ExperienceTitle>
        <Enterprise>DK Telecom</Enterprise>
        <ExperienceDate>
          7 setembro de 2019, 31 de dezembro, alocado na empresa.
        </ExperienceDate>
        <Description>
          Construção aplicação web para provedor de internet e seu gerenciamento
          do cabeamento de fibra optica em toda cidade, usando Mapbox para a
          renderização do mapa,usadas bibliotecas como redux, material-ui,styled
          components,react router dom , axios.
        </Description>
      </Section>
    </Container>
  );
};

export default Home;
