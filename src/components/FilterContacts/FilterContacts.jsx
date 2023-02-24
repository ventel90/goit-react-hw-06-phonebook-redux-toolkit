import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import { Wrapper, Label, Input } from './FilterContacts.styled';

export const Filter = () => {
  const dispatch = useDispatch();
//   const filter = useSelector(getFilter);
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(getFilter);

  const changeFilter = e => {
    console.log(e.currentTarget.value);
    let value = e.currentTarget.value;
    dispatch(setContactFilter(value));

  };
  return (
    <Wrapper>
      <Label htmlFor="filter">Filter: </Label>``
      <Input
        type="text"
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </Wrapper>
  );
};
