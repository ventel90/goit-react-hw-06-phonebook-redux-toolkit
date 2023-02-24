import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import { Wrapper, Label, Input } from './FilterContacts.styled';

export default function Filter() {
const dispatch = useDispatch();
const filter = useSelector(getFilter);
const contacts = useSelector(state => state.contacts);
  const changeFilter = e => {
    console.log(e.currentTarget.value);
    let value = e.currentTarget.value;
    dispatch(setContactFilter(value));

  };
  return (
    <Wrapper>
      <Label htmlFor="filter">Filter: </Label>``
      <Input
        name="filter"
        type="text"
        id="filter"
//         value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};
