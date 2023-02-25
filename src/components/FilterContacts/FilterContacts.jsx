import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';
import { Wrapper, Label, Input } from './FilterContacts.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Wrapper>
      <Label htmlFor="filter">Find: <Input
          name="filter"
          type="text"
          id="filter"
          value={filter}
          onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
        />
      </Label>
    </Wrapper>
  );
};