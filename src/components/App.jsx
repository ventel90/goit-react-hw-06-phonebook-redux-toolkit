import { Container } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import {Filter} from './FilterContacts/FilterContacts';
import {ContactList} from './ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <h1>PhoneBook</h1>,
      <ContactForm />,
      <Filter />,
      <h1>Contacts</h1>,
      <ContactList />,
    </Container>
  );
};
