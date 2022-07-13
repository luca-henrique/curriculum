import styled from "styled-components";

import DescriptionJobList from "./DescriptionJobList";

export const Date = styled.label`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  background: linear-gradient(135deg, #ff26b2 0%, #851bd9 64.06%, #3f0fff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const DescriptionJob = styled.p`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  /* Black */

  color: #222222;
`;

export const JobInformationContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin: 4px 0;
`;

export const JobPositionTitle = styled.h6`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height */

  /* grey */

  color: #999999;
`;

export const EnterpriseName = styled.h6`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 17px;
  /* identical to box height */

  /* grey */

  color: #999999;
`;

const ExperienceItem = ({ item }) => {
  return (
    <>
      <Date>Sep. 2017 - Currently</Date>
      <JobInformationContainer>
        <JobPositionTitle>{item.role}</JobPositionTitle>
        <EnterpriseName> na {item.enterprise}</EnterpriseName>
      </JobInformationContainer>
      <DescriptionJobList data={item.description} />
      <div style={{ height: "1px", background: "#BDBDBD", margin: "6px 0" }} />
    </>
  );
};

export default ExperienceItem;
