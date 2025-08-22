import {JobPositionTitle, Date, EnterpriseName} from '../../atomic/Typography';

const FormationItem = ({item}) => {
  return (
    <ul>
      <ol style={{display: 'flex', flexDirection: 'row', gap: '4px'}}>
        <JobPositionTitle>{item.graduate}</JobPositionTitle> -
        <EnterpriseName>{item.foundation}</EnterpriseName> -
        <Date>
          {item.dateStart} - {item.dateEnd}
        </Date>
      </ol>
    </ul>
  );
};

export default FormationItem;
