import {Wrapper, Label, Input} from './FilterContacts.styled'
import { useDispatch, useSelector} from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from 'redux/contactsSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFieldFilter = e =>
    dispatch(filterContacts(e.currentTarget.value));

  return (
    <Wrapper>
      <Label>
        Filter:{' '}
        <Input type="text" value={filter} onChange={changeFieldFilter} />
      </Label>
    </Wrapper>
  );
};

