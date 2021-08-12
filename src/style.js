import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 40px 70px;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const Header = styled.header`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContactContainer = styled.section`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContactContainerRow = styled.div`
  margin-top: 6px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  align-content: center;
`;

export const Name = styled.h1`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  color: #101214;

  @media (max-width: 490px) {
    font-size: 22px;
    line-height: 22px;
  }
`;

export const Role = styled.h2`
  margin-top: 4px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #2aaee7;
  @media (max-width: 490px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const Contact = styled.h6`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  margin-left: 5px;

  @media (max-width: 490px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const TitleSection = styled.h3`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #73808d;
  padding: 8px 0px;
  border-bottom: 1px solid #73808d;
`;

export const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExperienceTitle = styled.h2`
  margin-top: 20px;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 21px;
  color: #101214;
`;

export const Enterprise = styled.h3`
  margin-top: 6px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  color: #2aaee7;
`;

export const ExperienceDate = styled.h5`
  margin-top: 4px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  color: #73808d;
`;

export const Description = styled.h5`
  margin-top: 4px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #101214;
  width: 70%;

  @media (max-width: 490px) {
    width: 90%;
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 60%;

  @media (max-width: 490px) {
    width: 90%;
  }
`;

export const Skills = styled.h5`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  color: #101214;
  margin-right: 30px;
  margin-top: 10px;

  @media (max-width: 490px) {
    font-size: 14px;
    line-height: 12px;
  }
`;
