import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import {
  Btn,
  Contacts,
  ContactItem,
  Name,
  Number,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Contacts>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Btn>
            </ContactItem>
          );
        })}
      </Contacts>
    </>
  );
};
