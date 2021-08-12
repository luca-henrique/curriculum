import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  padding: 0px 160px;
`;

export const Header = styled.header`
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

export const Name = styled.h1`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 28px;
  color: #101214;
`;

export const Role = styled.h2`
  margin-top: 4px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #2aaee7;
`;

export const Contact = styled.h6`
  margin-top: 4px;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const TitleSection = styled.h3`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #73808d;

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
  font-size: 18px;
  line-height: 21px;
  color: #101214;
`;

export const Enterprise = styled.h3`
  margin-top: 4px;
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
`;

export const Skills = styled.h5`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #101214;
`;
