import DescriptionJobItem from '../../molecules/DescriptionJobItem';

import {ContainerSection} from '../../atomic/Container';

const DescriptionJobList = ({data}) => {
  return (
    <ContainerSection>
      {data.map((item) => {
        return <DescriptionJobItem item={item} />;
      })}
    </ContainerSection>
  );
};

export default DescriptionJobList;
