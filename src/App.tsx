import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import RoomIcon from "@material-ui/icons/Room";

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
  Skills,
  SkillsContainer,
  ContactContainerRow,
} from "./style";

const Home = () => {
  return (
    <Container>
      <Header>
        <Name>Lucas Henrique Paes de Carvalho</Name>
        <Role>Desenvolvedor Frontend</Role>

        <ContactContainer>
          <ContactContainerRow>
            <EmailIcon fontSize="small" />
            <Contact>lukas.paes18@gmail.com</Contact>
          </ContactContainerRow>

          <ContactContainerRow>
            <RoomIcon fontSize="small" />
            <Contact>Arcoverde-PE, Brasil.</Contact>
          </ContactContainerRow>

          <ContactContainerRow>
            <WhatsAppIcon fontSize="small" />
            <Contact
              href="https://api.whatsapp.com/send?phone=5587998093765&text=%C3%B3pa"
              target="_blank"
            >
              +55 87 9 98093765
            </Contact>
          </ContactContainerRow>

          <ContactContainerRow>
            <LinkedInIcon fontSize="small" />
            <Contact
              href="https://www.linkedin.com/in/lucas-h-paes-de-carvalho-a5951815a/"
              target="_blank"
            >
              https://www.linkedin.com/in/lucas-h-paes-de-carvalho-a5951815a/
            </Contact>
          </ContactContainerRow>

          <ContactContainerRow>
            <GitHubIcon fontSize="small" />
            <Contact href="https://github.com/luca-henrique" target="_blank">
              luca-henrique
            </Contact>
          </ContactContainerRow>
        </ContactContainer>
      </Header>

      <Section>
        <TitleSection>Experiências</TitleSection>

        <ExperienceTitle>Desenvolvedor React Pleno</ExperienceTitle>
        <Enterprise>Rethink</Enterprise>
        <ExperienceDate>inicio: 02/10/2021, atualmente</ExperienceDate>
        <Description>
          Construindo e realizando manutenção em aplicações react.js prestando
          serviços para emprestas de todo Brasil, utilizando bibliotecas como
          redux, material-ui,styled components,react router dom , axios.
        </Description>

        <ExperienceTitle>Desenvolvedor React Pleno</ExperienceTitle>
        <Enterprise>Tecla T(PJ)</Enterprise>
        <ExperienceDate>inicio: 02/09/2021, atualmente</ExperienceDate>
        <Description>
          Construindo e realizando manutenção em aplicações react.js prestando
          serviços para emprestas de todo Brasil, utilizando bibliotecas como
          redux, material-ui,styled components,react router dom , axios.
        </Description>

        <ExperienceTitle>Consultor de Software</ExperienceTitle>
        <Enterprise>3Y Software House (PJ)</Enterprise>
        <ExperienceDate>
          inicio: 6 junho de 2021 ["Prestador de serviço"]
        </ExperienceDate>
        <Description>
          Construindo e realizando manutenção em aplicações react.js prestando
          serviços para emprestas de todo Brasil, utilizando bibliotecas como
          redux, material-ui,styled components,react router dom , axios.
        </Description>

        <ExperienceTitle>Desenvolvedor React</ExperienceTitle>
        <Enterprise>Meta (CLT)</Enterprise>
        <ExperienceDate>2 Desembro de 2020 até 01/09/2021.</ExperienceDate>
        <Description>
          Construindo novas aplicações web e mobile utilizando React e React
          Native como stacks, participei diretamente da construção da e
          manutenção de novos aplicativos diretamente ligados a Unimed para
          consultas via video chamadas com integração com zoom, utilizando
          bibliotecas padrões como redux, material-ui,styled components,react
          router dom , axios no frontend da aplicação.
        </Description>

        <ExperienceTitle>Desenvolvedor Full Stack Javascript</ExperienceTitle>
        <Enterprise>CTM Consultoria</Enterprise>
        <ExperienceDate>
          2 Janeiro de 2020 á 20 de novembro de 2020, alocado na empresa.
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
          7 setembro de 2019 á 31 de dezembro de 2019, alocado na empresa.
        </ExperienceDate>
        <Description>
          Construção aplicação web para provedor de internet e seu gerenciamento
          do cabeamento de fibra optica em toda cidade, usando Mapbox para a
          renderização do mapa,usadas bibliotecas como redux, material-ui,styled
          components,react router dom , axios.
        </Description>
      </Section>

      <Section>
        <TitleSection>Skills</TitleSection>
        <SkillsContainer>
          <Skills>HTML</Skills>
          <Skills>CSS</Skills>
          <Skills>JavaScript</Skills>

          <Skills>Bootstrap</Skills>
          <Skills>Material-UI</Skills>
          <Skills>Antdesign</Skills>

          <Skills>ReactJs</Skills>
          <Skills>React Native</Skills>

          <Skills>NodeJs</Skills>
          <Skills>AdonisJs</Skills>
          <Skills>Java</Skills>

          <Skills>OOP</Skills>

          <Skills>Mysql</Skills>
          <Skills>Postgresql</Skills>

          <Skills>SQL</Skills>
          <Skills>Git</Skills>
          <Skills>Redux</Skills>
          <Skills>Styled Components</Skills>

          <Skills>Mongodb</Skills>
          <Skills>Mongoose</Skills>
        </SkillsContainer>
      </Section>
      <Section>
        <TitleSection>Ferramentas</TitleSection>
        <SkillsContainer>
          <Skills>Visual Studio Code</Skills>
          <Skills>Eclipse</Skills>
          <Skills>Git</Skills>
          <Skills>Gitlab</Skills>
          <Skills>Github</Skills>
          <Skills>Yarn</Skills>
          <Skills>AWS</Skills>
          <Skills>Postman</Skills>
          <Skills>Insomnia</Skills>
          <Skills>Swagger</Skills>
          <Skills>Reactotron</Skills>
        </SkillsContainer>
      </Section>

      <Section>
        <TitleSection>Idiomas</TitleSection>
        <SkillsContainer>
          <Skills>Português - BR</Skills>
          <Skills>Inglês - tecnico </Skills>
        </SkillsContainer>
      </Section>

      <Section>
        <TitleSection>Open Source</TitleSection>

        <ExperienceTitle>Ecolog</ExperienceTitle>
        <Description>
          App open source desenvolvido com react native para disponiabilizar
          pontos de coletas de lixo, usando google maps para a renderização do
          mapa,usadas bibliotecas como redux, material-ui,styled components,
          axios.
        </Description>

        <ExperienceTitle>Gsva-app</ExperienceTitle>
        <Description>
          App open source desenvolvido com react native para emergencia para
          socorrer pessoas na cidade de Arcoverde, usando google maps para a
          renderização do mapa,usadas bibliotecas como redux, material-ui,styled
          components, axios.
        </Description>
      </Section>
    </Container>
  );
};

export default Home;
