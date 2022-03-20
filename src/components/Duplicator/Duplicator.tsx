import DuplicatorStyled from './DuplicatorStyled';
import DateFromUser from '../common/DateFromUser/DateFromUser';
import DateToUser from '../common/DateToUser/DateToUser';
import ActionButtons from '../common/ActionButtons/ActionButtons';

const Duplicator = () => {
  return (
    <DuplicatorStyled>
      <DateFromUser />
      <ActionButtons />
      <DateToUser />
    </DuplicatorStyled>
  )
};

export default Duplicator;